
*start

;背景変更マクロ　storage と time を指定する
[macro name="back"]

;@layopt layer=message0 visible=false
[backlay]
[image layer=base page=back storage=%storage]
[trans layer="base" method=%method|crossfade children=false time=%time|2000]
[wt]
;@layopt layer=message0 visible=true

[endmacro]



;キャラクターを表示、そして設定
[macro name="charaset"]

[image storage=%storage left=%left|0 top=%top|0 layer=%layer page=back visible=true]

[endmacro]


[macro name="chararemove"]

[freeimage layer = %layer]

[endmacro]

;;;;;;;;;;;;セーブ関係

;save情報を取得、ptextを継承する

[macro name="saveinfo"]

[iscript]

tf.savetext = "";

tf.array_save = TG.menu.getSaveData().data;
tf.data = tf.array_save[mp.index];

tf.title = tf.data.title;
tf.save_date = tf.data.save_date;

tf.savetext = "<span style='font-size:10px'>"+tf.save_date+"</span><br />"+tf.title;

[endscript]

[ptext * text=&tf.savetext ]


[endmacro]

[macro name="setsave"]

    [iscript]

        TG.menu.doSave(mp.index);
        
    [endscript]

[endmacro]

[macro name="loading"]

    [iscript]

        TG.menu.loadGame(mp.index);

    [endscript]

[endmacro]



;1無表情,2にこにこ,3悲しげ,4ごまかし,5苛立ち,6困惑,7微笑,8考え事,9驚き,10目閉じ微笑,11目閉じ,12困り笑い,13落ち込み
[macro name="yukino/1"][chara_mod name="yukino" storage="yukino/tatie1.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/2"][chara_mod name="yukino" storage="yukino/tatie2.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/3"][chara_mod name="yukino" storage="yukino/tatie3.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/4"][chara_mod name="yukino" storage="yukino/tatie4.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/5"][chara_mod name="yukino" storage="yukino/tatie5.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/6"][chara_mod name="yukino" storage="yukino/tatie6.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/7"][chara_mod name="yukino" storage="yukino/tatie7.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/8"][chara_mod name="yukino" storage="yukino/tatie8.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/9"][chara_mod name="yukino" storage="yukino/tatie9.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/10"][chara_mod name="yukino" storage="yukino/tatie10.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/11"][chara_mod name="yukino" storage="yukino/tatie11.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/12"][chara_mod name="yukino" storage="yukino/tatie12.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/13"][chara_mod name="yukino" storage="yukino/tatie13.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino/14"][chara_mod name="yukino" storage="yukino/tatie14.png" cross="false" wait="true" time=100][endmacro]
[macro name="yukino1"][chara_show name="yukino" storage="yukino/tatie1.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino2"][chara_show name="yukino" storage="yukino/tatie2.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino3"][chara_show name="yukino" storage="yukino/tatie3.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino4"][chara_show name="yukino" storage="yukino/tatie4.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino5"][chara_show name="yukino" storage="yukino/tatie5.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino6"][chara_show name="yukino" storage="yukino/tatie6.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino7"][chara_show name="yukino" storage="yukino/tatie7.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino8"][chara_show name="yukino" storage="yukino/tatie8.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino9"][chara_show name="yukino" storage="yukino/tatie9.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino10"][chara_show name="yukino" storage="yukino/tatie10.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino11"][chara_show name="yukino" storage="yukino/tatie11.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino12"][chara_show name="yukino" storage="yukino/tatie12.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukino13"][chara_show name="yukino" storage="yukino/tatie13.png" page="%page|fore" top="%top|50" left="%left" time="%time|700" width="%width|1000" wait="%wait|true"][endmacro]
[macro name="yukinohide"][chara_hide name="yukino" time=700][endmacro]
[macro name="hide"][chara_hide name="yukino" time="%time|1000" wait="%wait|true"][endmacro]


[macro name="bucho"][chara_show name="bucho" storage="%storage|bucho/bucho1.png" page="%page|fore" top="%top|20" left="%left" time="%time|700" width="%width|1000"][endmacro]
[macro name="bucho2"][chara_show name="bucho" storage="bucho/bucho2.png" page="%page|fore" top="%top|20" left="%left" time="%time|700" width="%width|1000"][endmacro]
[macro name="buchohide"][chara_hide name="bucho" time="%time|700"][endmacro]
[macro name="bucho/1"][chara_mod name="bucho" storage="bucho/bucho1.png" cross="false" wait="true" time="%time|100][endmacro]


[macro name="haruya"][chara_show name="haruya" storage="%storage|haruya/haruya1.png" page="%page|fore" top="370" left="-330" time="%time|700" zindex="200" layer="message0"][endmacro]
[macro name="haruyahide"][chara_hide name="haruya" time="%time|700" layer="message0" wait="%wait|true"][endmacro]
[macro name="haruya1"][chara_show name="haruya" storage="%storage|yukino/tatie8.png" page="%page|fore" top="430" left="-330" time="%time|700" zindex="200" layer="message0"][endmacro]
[macro name="hmod"][chara_mod name="haruya" storage="%storage|haruya/haruya1_1.png" cross="false" wait="true" time=0][endmacro]

[macro name="uyo"][chara_show name="uyo" storage="uyo.png" page="%page|fore" top="%top|-150" left="%left" time="%time|700" width="%width|900"][endmacro]
[macro name="uyohide"][chara_hide name="uyo" time="%time|700"][endmacro]

[macro name="kaisou"][layopt layer=1 visible=true][image layer="1" storage="vignette.png" name="kaisou"][endmacro]
[macro name="fkaisou"][free name="kaisou" layer=1][endmacro]
;機能
[chara_config ptext="chara_name_area" pos_mode=true memory=true effect=easeOutQuad]
[macro name="role"][button name="role_button" role=menu graphic="menu_off.png" enterimg="menu_on.png" x=1130 y=610][endmacro]
[macro name="role2"][button name="role_button" role=menu graphic="menu_off2.png" enterimg="menu_on2.png" x=1130 y=610][endmacro]
[macro name="rhide"][clearfix name="role_button"][endmacro]
[macro name="mhide"][anim layer="message0" opacity=0 time="%time|1000"][endmacro]
[macro name="mshow"][anim layer="message0" opacity=255 time="%time|1000"][endmacro]

;スチル
[macro name="M3"][position layer="message0" left=0 top=581 width=1280 height=180 opacity=&sf.mopacity frame="frame_still2.png" page=fore visible=true]
[position layer="message0" page=fore margint="00" marginl="300" marginr="150" marginb="80"]
[loadcss file="./data/others/css/next2.css"]
[anim name="chara_name_area" top="+=150" left="-=120" time="0"][endmacro]

[macro name="M1"][position layer="message0" left=0 top=581 width=1280 height=180 opacity=&sf.mopacity frame="frame_still.png" page=fore visible=true]
[position layer="message0" page=fore margint="00" marginl="300" marginr="150" marginb="80"]
[loadcss file="./data/others/css/next2.css"]
[anim name="chara_name_area" top="+=150" left="-=120" time="0"][endmacro]

;通常
[macro name="M0"][position layer="message0" left=100 top=460 width=1180 height=260 opacity=&sf.mopacity frame="frame2.png" page=fore visible=true]
[position layer="message0" page=fore margint="70" marginl="190" marginr="150" marginb="50"]
[loadcss file="./data/others/css/next1.css"]
[anim name="chara_name_area" top="-=150" left="+=120" time="0"][endmacro]

;カラー
[macro name="M2"][position layer="message0" left=100 top=460 width=1180 height=260 frame="frame1.png" opacity=&sf.mopacity page=fore visible=true]
[position layer="message0" page=fore margint="70" marginl="190" marginr="150" marginb="50"]
[loadcss file="./data/others/css/next3.css"]
[endmacro]

[macro name="trans_in"]
[trans layer="%layer|0" time="%time|700" method="%method|fadeIn"]
[wt]
[endmacro]

[macro name="trans_out"]
[backlay layer="%layer|0"]
[trans layer="%layer|0" time="%time|700" method="%method|fadeOut"]
[freeimage layer="%layer|0"]
[wt]
[freeimage layer="%layer|0"]
[endmacro]

;keyframe
[keyframe name="nod3"]
[frame p="0%" y="0"]
[frame p="50%" y="10"]
[frame p="100%" y=" 0"]
[endkeyframe]

[keyframe name="nod"]
[frame p="0%" y="0"]
[frame p="50%" y="15"]
[frame p="100%" y=" 0"]
[endkeyframe]

[keyframe name="nod2"]
[frame p="0%" y="0"]
[frame p="25%" y="15"]
[frame p="50%" y="0"]
[frame p="75%" y="15"]
[frame p="100%" y=" 0"]
[endkeyframe]

[keyframe name="surp"]
[frame p="0%" y="0"]
[frame p="50%" y="-15"]
[frame p="100%" y=" 0"]
[endkeyframe]

[keyframe name="down"]
[frame p="0%" y="0"]
[frame p="100%" y="10"]

[keyframe name="up"]
[frame p="0%" y="0"]
[frame p="100%" y="-10"]
[endkeyframe]

[keyframe name="up2"]
[frame p="0%" y="0"]
[frame p="100%" y="-20"]
[endkeyframe]

[keyframe name="no"]
[frame p="0%" x="0"]
[frame p="25%" x="15"]
[frame p="66%" x="-15"]
[frame p="100%" x=" 0"]
[endkeyframe]

[keyframe name="left"]
[frame p="0%" x="0"]
[frame p="50%" x="20"]
[frame p="100%" x="0"]
[endkeyframe]

[return]


