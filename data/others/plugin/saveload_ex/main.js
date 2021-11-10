(function(){
//ページ移動
const changePage = function(j_save, elm, page, type){
    page = (page === undefined ? 0 : page)
    //現在のページ番号と対応するスロットのみ表示する
    if(page != $(elm).attr("data-page")){
        $(elm).hide()
    }else{
        $(elm).show()
    }
    //現在のページ番号を保存する
    if(type == "save"){
        TYRANO.kag.variable.sf._saveload.save_page = page
    }else if(type == "load"){
        TYRANO.kag.variable.sf._saveload.load_page = page
    }
}


//ページャー表示
const displayPage = function(j_save, page){
    $(j_save).find(".area_page_list img").each(function(){
        //ホバー、アクティブ時の画像も一旦通常のボタン画像に戻す
        let src = $(this).attr("src").replace("_a.png", ".png").replace("_h.png", ".png")
        if($(this).attr("data-page") == page){
            //アクティブページはアクティブ用画像にする
            $(this).attr("src", src.replace(".png", "_a.png"))
        }else{
            //それ以外は通常時画像
            $(this).attr("src", src)
        }
    })
}


//ページ番号セット
const setDataPage = function(elm){
    let num = $(elm).attr("data-num")
    let page = returnPage(num)
    $(elm).attr("data-page", page)
}


//各セーブスロットにページ情報を付与
const setPage = function(){
    var page = []
    if(TYRANO.kag.variable.sf._saveload.slot != 0){
        for (var i = 0; i < (TYRANO.kag.config.configSaveSlotNum / TYRANO.kag.variable.sf._saveload.slot); i++){
            page.push({num: i})
        }    
    }
    return page    
}


//スロット番号をもとにページ番号を返す
const returnPage = function(num){
    let page = 0
    if(TYRANO.kag.variable.sf._saveload.slot != 0){
        page = Math.floor(num / TYRANO.kag.variable.sf._saveload.slot)
    }
    return page
}


//日付ゼロ埋め
const zeroDate = function() {
    var nowdate = new Date();
    var year = nowdate.getFullYear();
    var mon = ("00" + (nowdate.getMonth() + 1)).slice(-2);
    var date = ("00" + nowdate.getDate()).slice(-2);
    return year + "/" + mon + "/" + date;
};

//時間ゼロ埋め
const zeroTime = function() {
    var nowdate = new Date();
    var h = ("00" + nowdate.getHours()).slice(-2);
    var m = ("00" + nowdate.getMinutes()).slice(-2);
    var s = ("00" + nowdate.getSeconds()).slice(-2);
    return h + ":" + m + ":" + s;
}


//コメント入力欄表示
const setComment = function(elm, array_save){
    if(TYRANO.kag.variable.sf._saveload.comment){
        $(elm).find(".save_list_item_comment").on("click", function(e){
            //コメント欄をクリックしてもセーブorロードはさせない
            e.stopPropagation()
        })
        $(elm).find(".save_list_item_submit").on("click", function(e){
            //更新ボタンクリックしたらコメント保存
            e.stopPropagation()
            let array = array_save.data;
            let num = $(elm).attr("data-num");
            let comment = $(".save_list_item_comment[data-num=" + num + "]").attr("value")
            array[num].comment = comment
            $.setStorage(that.kag.config.projectID + "_tyrano_data", array_save, that.kag.config.configSave)
        })    
    }else{
        //コメント欄非表示
        $(elm).find(".save_list_item_comment").hide()
        $(elm).find(".save_list_item_submit").hide()
    }
}


//セーブデータ保護・削除ボタン表示
const setProtectDelete = function(n, array_save, type, cb){
    that = TYRANO
    var array = array_save.data;
    
    //削除ボタン表示するか
    if(!TYRANO.kag.variable.sf._saveload.delete){
        n.find(".save_list_item_delete").each(function(){
            $(this).hide()
        })
    }
    //保護ボタン表示するか
    if(!TYRANO.kag.variable.sf._saveload.lock){
        n.find(".save_list_item_lock").each(function(){
            $(this).hide()
        })
    }

    //セーブデータ保護
    n.find(".save_list_item_lock").each(function () {
        $(this).click(function(e){
            var num = $(this).attr("data-num");
            let img = $(this).attr("src")
            let img_lock = $(this).attr("data-src")
            let img_unlock = $(this).attr("data-src-u")
            let trash = $(this).next()
            let img_trash = trash.attr("data-src")
            let img_untrash = trash.attr("data-src-u")
            if(array[num].save_date != ""){
                array[num].lock = !array[num].lock
                if(array[num].lock){
                    $(this).attr("src", img_lock)
                    $(this).attr("data-lock", "true")
                    trash.attr("data-delete", "false")
                    trash.attr("src", img_untrash)
                }else{
                    $(this).attr("src", img_unlock)
                    $(this).attr("data-lock", "false")
                    trash.attr("data-delete", "true")
                    trash.attr("src", img_trash)
                }
                $.setStorage(that.kag.config.projectID + "_tyrano_data", array_save, that.kag.config.configSave)
                e.stopPropagation()
            }
        })
    })
    //セーブデータ削除
    n.find(".save_list_item_delete").each(function () {
        $(this).click(function(e){
            var num = parseInt($(this).attr("data-num"));
            let del = $(this).attr("data-delete")
            if(del == "false"){
                //セーブデータ保護されている場合、何もしない
            }else{            
                $._confirm("セーブデータNo." + (parseInt(num) + 1) + " を削除しますか？", function(){
                    //削除する
                    TYRANO.kag.menu.clearSave(num)
                    if(TYRANO.kag.variable.sf._newslot == num){
                        TYRANO.kag.variable.sf._newslot = null
                    }
                    //セーブ情報更新して画面再表示
                    if(type == "save"){
                        TYRANO.kag.menu.displaySave(cb)
                    }else{
                        TYRANO.kag.menu.displayLoad(cb)
                    }
                }, function(){
                    //削除しない
                }, "削除する", "削除しない")    
            }
            e.stopPropagation()
        })
    })
}


//最新セーブデータ画像表示
const displayNew = function(j_save){
    if(TYRANO.kag.variable.sf._saveload.new){
        j_save.find(".save_list_item_new").each(function() {
            const num = $(this).attr("data-num")
            const img = j_save.find(".save_list_item_thumb img")
            //最新セーブデータ表示する場合かつ該当スロットにセーブデータが存在する場合
            if(TYRANO.kag.variable.sf._newslot == num && img.attr("data-thumb") == "true"){
                $(this).show()
            }else{
                //最新セーブデータを削除した場合、最新セーブデータ画像は表示されなくなる
                $(this).hide()
            }
        })
    }else{
        //最新セーブデータ表示しない
        j_save.find(".save_list_item_new").each(function() {
            $(this).hide()
        })
    }
}


//ボタンホバー
const hoverButton = function(j_save){
    let tmp_src = "";
    //戻るボタン、保護ボタン、削除ボタン
    $(j_save).find(".menu_close_image,.save_list_item_lock,.save_list_item_delete").hover(function(){
        tmp_src = $(this).attr("src");
        var img_src = tmp_src.replace(".png","_h.png");
        $(this).attr("src",img_src);
    }, function(){
        //もとにもどす
        $(this).attr("src",tmp_src);
    });
    //ページ表示
    $(j_save).find(".area_page_list img").hover(function(){
        tmp_src = $(this).attr("src");
        if(tmp_src.indexOf("_a.png") < 0){
            //アクティブじゃない場合のみ画像変更
            var img_src = tmp_src.replace(".png","_h.png");
            $(this).attr("src",img_src);    
        }
    }, function(){
        //もとにもどす
        if($(this).attr("src").indexOf("_a.png") < 0){
            //アクティブじゃない場合のみ画像変更
            $(this).attr("src",tmp_src);
        }
    })
}


/**
 *  モーダルウィンドウ
 *  ティラノデフォルトのものとは別に定義しておく
 *  @param str {string}             メッセージ
 *  @param cb_ok {function}         OKクリック時のコールバック
 *  @param cb_cancel {function}     Cancelクリック時のコールバック
 *  @param str_ok {string}          OKボタンテキスト
 *  @param str_cancel {string}      Cancelボタンテキスト
*/
$._confirm = (str, cb_ok, cb_cancel, str_ok, str_cancel) => {
    let ok = $(".remodal").find(".remodal-confirm").html()
    let cancel = $(".remodal").find(".remodal-cancel").html()
    if(str_ok){
        $(".remodal").find(".remodal-confirm").html(str_ok)
    }
    if(str_cancel){
        $(".remodal").find(".remodal-cancel").html(str_cancel)
    }

    $(".remodal_title").html(str);
    $(".remodal").find(".remodal-cancel").show();
    $(".remodal").find(".remodal-confirm").show();
    var inst = $('[data-remodal-id=modal]').remodal();
    inst.open();
    /////////OK /////////////
    $(document).off('closed', '.remodal');        
    $(document).off('confirmation', '.remodal');        
    $(document).on('confirmation', '.remodal', function (e) {
        $(document).off('confirmation', '.remodal');        
        $(document).off('cancellation', '.remodal');        
        if(typeof cb_ok == "function"){
            cb_ok();
        }
    });
    ///////キャンセル//////////////
    $(document).off('cancellation', '.remodal');        
    $(document).on('cancellation', '.remodal', function (e) {
        
        $(document).off('confirmation', '.remodal');        
        $(document).off('cancellation', '.remodal');        
        
        if(typeof cb_cancel == "function"){
            cb_cancel();
        }
    });
    //ボタン文言をもとに戻す
    $(document).one('closed', '.remodal', function(){
        $(".remodal").find(".remodal-confirm").html(ok)
        $(".remodal").find(".remodal-cancel").html(cancel)
    });        
}


//
//既存関数オーバーライド
//

/**
 * メニュー画面表示用
 * ティラノデフォルトの関数とは別に定義しておく
 * @param {*} j_menu 
 * @param {*} cb 
 * @param {*} that 
 */
$._preloadImgCallback = function(j_menu, cb, that){
    var img_storage = [];
    j_menu.find("img").each(function() {
        if($(this).attr("src") != ""){
            //srcがあるもののみ
            img_storage.push($(this).attr("src"));
        }
    });
    //ロードが全て完了したら、ふわっと出す
    var sum = 0;
    for (var i = 0; i < img_storage.length; i++) {
        that.kag.preload(img_storage[i], function() {
            sum++;
            if (img_storage.length == sum) {
                cb();
            }
        });
    }
    if(img_storage.length==0){
        cb();
    }
};


//セーブデータ削除
tyrano.plugin.kag.menu.clearSave = function(num,cb) {
    var array_save = this.getSaveData();
    var json = {}
    json.title = $.lang("not_saved")
    // ラストテキスト
    json.current_order_index = 0
    json.save_date = ""
    json.img_data = ""
    json.stat = {}
    array_save.data[num] = json
    $.setStorage(TYRANO.kag.config.projectID + "_tyrano_data", array_save, TYRANO.kag.config.configSave);
}
TYRANO.kag.menu.clearSave = tyrano.plugin.kag.menu.clearSave


//セーブ画面表示
TYRANO.kag.menu.setMenu_saveload = function(j_obj,cb) {
    var that = this;
    var layer_menu = this.kag.layer.getMenuLayer();

    //戻るボタンクリック時
    j_obj.find(".menu_close").click(function(e) {
        $(".menu_mask").fadeIn(TYRANO.kag.variable.sf._saveload.masktime, function(){
            layer_menu.fadeOut(TYRANO.kag.variable.sf._saveload.fadetime, function(){
                layer_menu.empty();
                if(typeof cb=="function"){
                    //終わったタイミングでコールバックを返す
                    cb();
                }
            });
            if (that.kag.stat.visible_menu_button == true) {
                $(".button_menu").show();
            }
        })
    });
    
    //最初に画面を表示するとき
    j_obj.hide();
    if(layer_menu.css("display") == "none"){
        //layer_menu.empty()
    }
    layer_menu.append(j_obj);
    if(TYRANO.kag.variable.sf._saveload.fademask){
        //画面フェード時に暗転を挟む場合
        if(TYRANO.kag.variable.sf._saveload.maskimage != ""){
            //マスク画像指定あり
            $(".menu_mask").css({
                "display": "block",
                "background-image": `url(data/image/${TYRANO.kag.variable.sf._saveload.maskimage})`,
            })
        }else{
            //マスク色指定あり
            $(".menu_mask").css({
                "display": "block",
                "background-color": TYRANO.kag.variable.sf._saveload.maskcolor,
            })
        }
        TYRANO.kag.variable.sf._saveload.masktime = TYRANO.kag.variable.sf._saveload.fadetime
    }else{
        //マスク用オブジェクトに透明色を指定、マスク時間は0にしておく
        $(".menu_mask").css({
            "background-color": "transparent",
        })
        TYRANO.kag.variable.sf._saveload.masktime = 0
    }
    layer_menu.show()
    //opacity変化させる際にz-indexを反映させるため
    $(".layer_menu>div").css({
        opacity: 0.99,
        "z-index": 0,
    })
    //メニュー用レイヤー内の最終オブジェクトをフェードイン
    $(".layer_menu>*:last()").fadeIn(TYRANO.kag.variable.sf._saveload.fadetime, function(){
        $._preloadImgCallback(layer_menu,function(){
            j_obj.show() 
            //メニュー用レイヤー内の最終オブジェクト以外のオブジェクトは消す
            $(".layer_menu>*:not(:last())").remove()
            //マスク用オブジェクトをフェードアウト
            $(".menu_mask").fadeOut(TYRANO.kag.variable.sf._saveload.masktime)
        },that);
    })
}
tyrano.plugin.kag.menu.setMenu_saveload = TYRANO.kag.menu.setMenu_saveload


//セーブ画面作成

TYRANO.kag.menu.displaySave = function(cb) {
    var that = this;
    that.kag.stat.is_skip = false;
    //セーブデータ配列
    var array_save = that.getSaveData();
    var array = array_save.data;

    for (var i = 0; i < array.length; i++) {
        array[i].num = i;
    }
    
    //セーブスナップ予めとっておく
    this.snapSave(TYRANO.kag.stat.current_save_str, function(){
        let array_page = setPage()
    
        that.kag.html("save", {
            array_save : array,
            array_page: array_page,
            "novel" : $.novel
        }, function(html_str) {
            var j_save = $(html_str);
            now_page = 0
            if(TYRANO.kag.variable.sf._saveload.memory){
                now_page = TYRANO.kag.variable.sf._saveload.save_page || 0
            }
            //フォントをゲームで指定されているフォントにする。
            j_save.find(".save_list").css("font-family", that.kag.config.userFace);
            j_save.find(".save_display_area").each(function() {
    
                setDataPage(this)
                changePage(j_save, this, now_page, "save")
                setComment(this, array_save)
    
                //セーブスロットクリック
                $(this).on("click", function(e) {
                    var num = $(this).attr("data-num");
                    var img = $(this).find(".save_list_item_thumb img")
                    if(TYRANO.kag.variable.sf._saveload.dialog && img.attr("data-thumb") == "true"){
                        //上書き確認ダイアログ表示あり
                        if(array[num].lock == true){
                            //スロット保護されている場合は何もしない
                            return false
                        }
                        $._confirm("セーブデータを上書きして保存しますか？", function(){
                            //OKの場合、上書き
                            that.doSave(num,function(){
                                var layer_menu = that.kag.layer.getMenuLayer();
                                if(!TYRANO.kag.variable.sf._saveload.hold){
                                    //セーブ後画面保持しない
                                    $(".menu_mask").fadeIn(TYRANO.kag.variable.sf._saveload.masktime, function(){
                                        layer_menu.fadeOut(TYRANO.kag.variable.sf._saveload.fadetime, function(){
                                            layer_menu.hide();
                                            layer_menu.empty();
                                            if (that.kag.stat.visible_menu_button == true) {
                                                $(".button_menu").show();
                                            }
                                            if(typeof cb=="function"){
                                                cb();
                                            }
                                        })
                                    })
                                }else{
                                    //セーブ後画面保持する
                                    that.displaySave(cb)
                                }
                            });
                        }, function(){
                            //Cancelの場合、何もしない
                        }, "上書きして保存", "保存しない")
                    }else{
                        //上書き確認ダイアログなし
                        if(array[num].lock == true){
                            //スロット保護されている場合は何もしない
                            return false
                        }
                        //that.snap = null;
                        var layer_menu = that.kag.layer.getMenuLayer();
                        that.doSave(num,function(){
                            if(!TYRANO.kag.variable.sf._saveload.hold){
                                //セーブ後画面保持しない
                                $(".menu_mask").fadeIn(TYRANO.kag.variable.sf._saveload.masktime, function(){
                                    layer_menu.fadeOut(TYRANO.kag.variable.sf._saveload.fadetime, function(){    
                                        layer_menu.hide();
                                        layer_menu.empty();
                                        if (that.kag.stat.visible_menu_button == true) {
                                            $(".button_menu").show();
                                        }
                                        if(typeof cb=="function"){
                                            cb();
                                        }
                                    })
                                });
                            }else{
                                //セーブ後画面保持する
                                that.displaySave(cb)
                            }
                        })
                    }
                });
            });
            
            //上下ボタンは表示しない
            j_save.find(".button_smart").hide();
    
            //ページ移動
            j_save.find(".page").click(function(e){
                let page = $(this).attr("data-page")
                j_save.find(".save_display_area").each(function() {
                    changePage(j_save, this, page, "save")
                })
                displayPage(j_save, page)
            })
            setProtectDelete(j_save, array_save, "save", cb)
    
            setStyle(j_save)
            displayNew(j_save)
            hoverButton(j_save)
            displayPage(j_save, now_page)
    
            that.setMenu_saveload(j_save,cb);
        });
    
    })
}
tyrano.plugin.kag.menu.displaySave = TYRANO.kag.menu.displaySave


//ロード画面作成
TYRANO.kag.menu.displayLoad = function(cb) {
    var that = this;
    this.kag.stat.is_skip = false;

    //セーブデータ配列
    var array_save = that.getSaveData();
    var array = array_save.data;

    for (var i = 0; i < array.length; i++) {
        array[i].num = i;
    }

    let array_page = setPage()

    this.kag.html("load", {
        array_save : array,
        array_page: array_page,
        "novel" : $.novel
    }, function(html_str) {
        var j_save = $(html_str);
        var now_page = 0
        if(TYRANO.kag.variable.sf._saveload.memory){
            now_page = TYRANO.kag.variable.sf._saveload.load_page || 0
        }
        //フォント設定
        j_save.find(".save_list").css("font-family", that.kag.config.userFace);

        j_save.find(".save_display_area").each(function() {
            setDataPage(this)
            changePage(j_save, this, now_page, "load")
            setComment(this, array_save)

            //セーブスロットクリック
            $(this).on("click", function(e) {
                var num = $(this).attr("data-num");
                //セーブデータが存在しない場合
                if(array[num]["save_date"]==""){
                    return ;
                }
                that.snap = null;
                //セーブデータロード
                that.loadGame(num);
                var layer_menu = that.kag.layer.getMenuLayer();
                //画面フェードして消す
                $(".menu_mask").fadeIn(TYRANO.kag.variable.sf._saveload.masktime, function(){
                    layer_menu.fadeOut(TYRANO.kag.variable.sf._saveload.fadetime, function(){
                        layer_menu.hide();
                        layer_menu.empty();
                        if (that.kag.stat.visible_menu_button == true) {
                            $(".button_menu").show();
                        }
                    })    
                })
            });
        });
        
        //上下ボタンは表示しない
        j_save.find(".button_smart").hide();

        //ページボタンクリック時
        j_save.find(".page").click(function(e){
            let page = $(this).attr("data-page")
            j_save.find(".save_display_area").each(function() {
                changePage(j_save, this, page, "load")
            })
            displayPage(j_save, page)
        })
        setProtectDelete(j_save, array_save, "load", cb)
        setStyle(j_save)
        displayNew(j_save)
        hoverButton(j_save)
        displayPage(j_save, now_page)

        var layer_menu = that.kag.layer.getMenuLayer();
        that.setMenu_saveload(j_save,cb);
    });
}
tyrano.plugin.kag.menu.displayLoad = TYRANO.kag.menu.displayLoad


//セーブを実行する
TYRANO.kag.menu.doSave = function(num,cb) {
    var array_save = this.getSaveData();
    var data = {};
    var that = this;

//    if (this.snap == null) {
        //ここはサムネイルイメージ作成のため、callback指定する
//        this.snapSave(this.kag.stat.current_save_str, function() {
            //現在、停止中のステータスなら、[_s]ポジションからセーブデータ取得
            data = that.snap;
            data.save_date = zeroDate() + "　" + zeroTime() //$.getNowDate() + "　" + $.getNowTime();
            data.lock = false

            //追加表示変数
            if(TYRANO.kag.variable.sf._saveload.exvar !== ""){
                array_var = TYRANO.kag.variable.sf._saveload.exvar.split(",")
                data.data_text = ""
                for(var i = 0; i < array_var.length; i++){
                    data.data_text += TYRANO.kag.embScript(array_var[i])
                    if(i < array_var.length - 1){
                        data.data_text += TYRANO.kag.variable.sf._saveload.exvar_join
                    }
                }    
            }
            //最新セーブデータ表示用
            TYRANO.kag.variable.sf._newslot = num  
            //変数保存
            array_save.data[num] = data;
            $.setStorage(that.kag.config.projectID + "_tyrano_data", array_save, that.kag.config.configSave);
            TYRANO.kag.saveSystemVariable()

            if(typeof cb=="function"){
                //終わったタイミングでコールバックを返す
                cb();
            }
//        });
//    }else{
//        if(typeof cb=="function"){
//            //終わったタイミングでコールバックを返す
//            cb();
//        }
//    }
}
tyrano.plugin.kag.menu.doSave = TYRANO.kag.menu.doSave


//各種スタイル指定
const setStyle = function(j_save){
    let sl = TYRANO.kag.variable.sf._saveload
    //背景画像
    if($(j_save).find(".img_bg_base").attr("data-type") == "save"){
        $(j_save).find(".img_bg_base").attr({
            "src": `data/image/${sl.bg_save}`,
        })
    }else{
        $(j_save).find(".img_bg_base").attr({
            "src": `data/image/${sl.bg_load}`,
        })
    }
    //スクロールバー
    $(j_save).find(".area_save_list").css({
        "--scroll-width": `${sl.scroll_width}px`,
        "--scroll-thumb-radius": `${sl.scroll_thumb_radius}px`,
        "--scroll-thumb-color": sl.scroll_thumb_color,
        "--scroll-base-radius": `${sl.scroll_base_radius}px`,
        "--scroll-base-color": sl.scroll_base_color,
    })

    //戻るボタン
    $(j_save).find(".menu_close").css({
        "top": `${sl.back_y}px`,
        "left": `${sl.back_x}px`,
        "width": `${sl.back_width}px`,
        "height": `${sl.back_height}px`,
    })
    $(j_save).find(".menu_close img").attr({
        "src": `data/image/${sl.back_img}`,
    })    
    //ページャー
    let pager = "row"
    if(sl.page_vertical){
        pager = "column"
    }
    $(j_save).find(".area_page_list").css({
        "top": `${sl.page_y}px`,
        "left": `${sl.page_x}px`,
        "flex-direction": pager,
    })
    if(sl.page_vertical){
        $(j_save).find(".area_page_list").find("img.page:not(:first-child)").css({
            "margin-top": `${sl.page_margin}px`,
        })
    }else{
        $(j_save).find(".area_page_list").find("img.page:not(:first-child)").css({
            "margin-left": `${sl.page_margin}px`,
        })
    }
    $(j_save).find(".area_page_list").find("img").each(function(){
        let num = parseInt($(this).attr("data-page")) + 1
        let img = `data/image/${sl.page_img.replace("{page}", num)}`
        $(this).attr("src", img)
    })
    //セーブリストラッパー
    $(j_save).find(".area_save_list").css({
        "top": `${sl.area_y}px`,
        "left": `${sl.area_x}px`,
    })
    //セーブリスト全体
    let slot_vertical = "row"
    if(sl.slot_vertical == true){
        slot_vertical = "column"
    }
    $(j_save).find(".save_list").css({
        "width": (sl.slot_width + sl.slot_marginx) * sl.slot_column + 20 + "px",
        "height": `calc(100vh - ${sl.area_y}px)`,
        "flex-direction": slot_vertical,
    })
    //セーブスロット
    $(j_save).find(".save_list_item").css({
        //"backgroung-image": `data/image/${sl.slot_bg}` ,
        "width": `${sl.slot_width}px`,
        "height": `${sl.slot_height}px`,
        "margin-right": `${sl.slot_marginx}px`,
        "margin-bottom": `${sl.slot_marginy}px`,
    })
    $(j_save).find(".save_list_item_bg").attr({
        "src": `data/image/${sl.slot_bg}`,
    })
    //スロット番号
    $(j_save).find(".save_list_item_num").css({
        "top": `${sl.num_y}px`,
        "left": `${sl.num_x}px`,
        "width": `${sl.num_width}px`,
        "height": `${sl.num_height}px`,
        "color": sl.num_color,
        "justify-content": replaseAlign(sl.num_align),
        "font-size": `${sl.num_size}px`,
    })
    //サムネイル
    $(j_save).find(".save_list_item_thumb").css({
        "top": `${sl.thumb_y}px`,
        "left": `${sl.thumb_x}px`,
        "width": `${sl.thumb_width}px`,
        "height": replaceLength(sl.thumb_height),
    })
    if($(j_save).find(".save_list_item_thumb img").attr("data-thumb") == "false"){
        $(j_save).find(".save_list_item_thumb img").attr("src", `data/image/${sl.thumb_noimage}`)
    }
    //日付
    $(j_save).find(".save_list_item_date").css({
        "top": `${sl.date_y}px`,
        "left": `${sl.date_x}px`,
        "width": `${sl.date_width}px`,
        "height": `${sl.date_height}px`,
        "color": sl.date_color,
        "text-align": sl.date_align,
        "font-size": `${sl.date_size}px`,
    })
    //ログテキスト
    $(j_save).find(".save_list_item_text").css({
        "top": `${sl.text_y}px`,
        "left": `${sl.text_x}px`,
        "width": `${sl.text_width}px`,
        "height": `${sl.text_height}px`,
        "color": sl.text_color,
        "text-align": sl.text_align,
        "font-size": `${sl.text_size}px`,
    })
    //追加表示変数
    $(j_save).find(".save_list_item_data").css({
        "top": `${sl.var_y}px`,
        "left": `${sl.var_x}px`,
        "width": `${sl.var_width}px`,
        "height": `${sl.var_height}px`,
        "color": sl.var_color,
        "text-align": sl.var_align,
        "font-size": `${sl.var_size}px`,
    })
    //データ保護ボタン
    $(j_save).find(".save_list_item_lock").css({
        "top": `${sl.lock_y}px`,
        "left": `${sl.lock_x}px`,
        "width": replaceLength(sl.lock_width),
        "height": replaceLength(sl.lock_height),
    })
    $(j_save).find(".save_list_item_lock").each(function(){
        if($(this).attr("data-lock") == "true"){
            $(this).attr({
                "src": `data/image/${sl.lock_img_lock}`,
                "data-src": `data/image/${sl.lock_img_lock}`,
                "data-src-u": `data/image/${sl.lock_img_unlock}`,
            })
        }else{
            $(this).attr({
                "src": `data/image/${sl.lock_img_unlock}`,
                "data-src": `data/image/${sl.lock_img_lock}`,
                "data-src-u": `data/image/${sl.lock_img_unlock}`,
            })
        }    
    })
    //データ削除ボタン
    $(j_save).find(".save_list_item_delete").css({
        "top": `${sl.delete_y}px`,
        "left": `${sl.delete_x}px`,
        "width": replaceLength(sl.delete_width),
        "height": replaceLength(sl.delete_height),
    })
    $(j_save).find(".save_list_item_delete").each(function(){
        if($(this).attr("data-delete") == "true"){
            $(this).attr({
                "src": `data/image/${sl.delete_img_delete}`,
                "data-src": `data/image/${sl.delete_img_delete}`,
                "data-src-u": `data/image/${sl.delete_img_undelete}`,
            })
        }else{
            $(this).attr({
                "src": `data/image/${sl.delete_img_undelete}`,
                "data-src": `data/image/${sl.delete_img_delete}`,
                "data-src-u": `data/image/${sl.delete_img_undelete}`,
            })
        }    
    })
    //最新データ表示
    $(j_save).find(".save_list_item_new").css({
        "top": `${sl.new_y}px`,
        "left": `${sl.new_x}px`,
        "width": replaceLength(sl.new_width),
        "height": replaceLength(sl.new_height),
    })
    $(j_save).find(".save_list_item_new").attr({
        "src": `data/image/${sl.new_img}`,
    })
    //コメント入力欄
    $(j_save).find(".save_list_item_comment").css({
        "top": `${sl.comment_y}px`,
        "left": `${sl.comment_x}px`,
        "width": replaceLength(sl.comment_width),
        "height": replaceLength(sl.comment_height),
        "font-size": `${sl.comment_size}px`,
    })
    $(j_save).find(".save_list_item_comment").attr({
        "placeholder": sl.comment_placeholder,
    })
    //更新ボタン
    $(j_save).find(".save_list_item_submit").css({
        "top": `${sl.comment_button_y}px`,
        "left": `${sl.comment_button_x}px`,
        "width": replaceLength(sl.comment_button_width),
        "height": replaceLength(sl.comment_button_height),
    })
    $(j_save).find(".save_list_item_submit").attr({
        "src": `data/image/${sl.comment_button_img}`,
    })
}


/**
 * align文字列をflexに対応させる
 * @param {"left" or "center" or "right"} align 
 * @returns {String}
 */
const replaseAlign = function(align){
    if(align.toLowerCase() == "left"){
        align = "flex-start"
    }else if(align.toLowerCase() == "right"){
        align = "flex-end"
    }
    return align
}

/**
 * length文字列を数値に変換する
 * @param {number or "auto"} length 
 * @returns 
 */
const replaceLength = function(length){
    if((length + "").toLowerCase() !== "auto"){
        length = length + "px"
    }
    return length

}
})()