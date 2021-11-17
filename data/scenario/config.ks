;=========================================
; コンフィグ モード　画面作成
;=========================================

;	メッセージレイヤ0を不可視に
	[layopt layer="message0" visible="false"]

;	fixボタンをクリア
	[clearfix]

;	キーコンフィグの無効化
	[stop_keyconfig]

;	レイヤーモードの解放
	[free_layermode time="100" wait="true"]

;	カメラのリセット
	[reset_camera time="100" wait="true"]
	
;	前景レイヤの中身をすべて空に
	[iscript]
	$(".layer_camera").empty();
	[endscript]

;	メニューボタン非表示
	[hidemenubutton]

	[iscript]

	TG.config.autoRecordLabel = "true"; // ラベル通過記録を有効に

	tf.current_bgm_vol = parseInt(TG.config.defaultBgmVolume); // BGM音量
	tf.current_se_vol = parseInt(TG.config.defaultSeVolume); // SE音量
	
	tf.current_ch_speed = parseInt(TG.config.chSpeed); // テキスト表示速度
	tf.current_auto_speed = parseInt(TG.config.autoSpeed); // オート時のテキスト表示速度
	
	tf.text_skip ="ON"; // 未読スキップ
	if(TG.config.unReadTextSkip != "true"){
		tf.text_skip ="OFF";
	}

	tf.user_setting = TG.config.alreadyReadTextColor;
	if(tf.user_setting != 'default'){
		TG.config.alreadyReadTextColor = 'default'; // 一時的に既読テキストの文字色を変更しないようにしています
	}

	[endscript]

[cm]


[html]
<div id="config_top">
<img class="config_bg" src="data/bgimage/config_bg.png" style="z-index:-1;position:absolute;">
<div class='tabs'>
  <div class='tab-buttons' style="position:absolute;width:600px;top:30px;">
    <span class='content1' style="margin-left:105px;padding-top:10px;transition: .3s;">設定</span>
    <span class='content2' style="padding-top:10px;transition: .3s;">ボイス</span> 
    <div id='lamp' class='content1 lamp'></div>
  </div>
  
  <div class='tab-content'>
   <div class='content1'>
	<div class="config_body">
			<div class="range">
				<p><span id="spanbgm" style="display:inline-block;margin-top:25px;">50</span></p>
				<input type="range" id="bgm_volume" min="0" max="100" step="1" value="50" style="left:125px;top:50px;position:absolute;">
			</div>
			<div class="range">
				<span id="spanse" style="display:inline-block;margin-top:25px;"></span>
				<input type="range" id="se_volume" min="0" max="100" value="20" step="1" style="left:125px;top:120px;position:absolute;">
			</div>
			<div class="range">
				<span id="spantext" style="display:inline-block;margin-top:21px;"></span>
				<input type="range" id="text_speed" min="-100" max="0" value="-30" step="1" style="left:125px;top:188px;position:absolute;">
			</div>
			<div class="range">
				<span id="spanauto" style="display:inline-block;margin-top:22px;"></span>
				<input type="range" id="auto_speed" min="-5000" max="-500" value="-1300" step="100" style="left:125px;top:257px;position:absolute;">
			</div>
			<div class="unread_area" id="unread_check" style="left:300px;top:300px;position:absolute;">
                <input type="radio" name="unread_skip" id="unreadon">
                <label for="unreadon" class="checkbox c1" style="padding:28px 80px 28px 0px;left:-80px;"></label>
                <input type="radio" name="unread_skip" id="unreadoff">
                <label for="unreadoff" class="checkbox c2" style="left:0px;width:100px;"></label>
            </div>
	</div>
   </div>
   <div class='content2'>
	<div class="config_body">
			<div class="range"> 
				<p><span id="vo" style="display:inline-block;margin-top:25px;">50</span></p>
				<input type="range" id="vo_volume" min="0" max="100" step="1" value="50" style="left:125px;top:50px;position:absolute;">
			</div>
			<div class="range">
				<p><span id="vo1" style="display:inline-block;margin-top:25px;">50</span></p>
				<input type="range" id="vo1_volume" min="0" max="100" step="1" value="50" style="left:125px;top:120px;position:absolute;">
			</div>
			<div class="range">
				<p><span id="mopacity" style="display:inline-block;margin-top:25px;">50</span></p>
				<input type="range" id="mo_volume" min="0" max="255" step="1" value="50" style="left:125px;top:190px;position:absolute;">
			</div>
			<div id="fullscreen" style="position:absolute;top:350px;">FullScreen</div>
	</div>
   </div>
  </div>
</div>
	
	<div class="menu_close config_back" style="left:50px;top:640px;position:absolute;cursor:pointer;">
	  <img src="tyrano/images/system/back_system.png" alt="" class="non">
	</div>
[endhtml]

[iscript]
$('.config_back').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{target:"back"})});

$(function () {
			var current_bgm_vol=parseInt(tyrano.plugin.kag.config.defaultBgmVolume); //システム値取得
			$('#bgm_volume').val(current_bgm_vol); //スライダー初期位置
			$('#spanbgm').html(current_bgm_vol); //初期表示
			$('#bgm_volume').on('input change', function() {
				$('#spanbgm').html($(this).val());
				current_bgm_vol=$(this).val();
				tyrano.plugin.kag.ftag.startTag("bgmopt",{volume: $(this).val()});
			});
			var current_se_vol=parseInt(tyrano.plugin.kag.config.defaultSeVolume); //システム値取得
			$('#se_volume').val(current_se_vol); //スライダー初期位置
			$('#spanse').html(current_se_vol); //初期表示
			$('#se_volume').on('input change', function() {
				$('#spanse').html($(this).val());
				current_se_vol=$(this).val();
				tyrano.plugin.kag.ftag.startTag("seopt",{volume: $(this).val()});
			});
			var current_ch_speed=parseInt(tyrano.plugin.kag.config.chSpeed); //システム値取得
			var span_ch_speed=-current_ch_speed+100 //表示用変数
			$('#text_speed').val(-current_ch_speed); //スライダー初期位置
			$('#spantext').html(span_ch_speed); //初期表示
			$('#text_speed').on('input change', function() {
				span_ch_speed=100+parseInt($(this).val());
				$('#spantext').html(span_ch_speed);
				current_ch_speed=-$(this).val();
				tyrano.plugin.kag.ftag.startTag("configdelay",{speed: -$(this).val()});
			});
			var current_auto_speed=parseInt(tyrano.plugin.kag.config.autoSpeed); //システム値取得
			var span_auto_speed=(-current_auto_speed+5500)/50 //表示用変数
			$('#auto_speed').val(-current_auto_speed); //スライダー初期位置
			$('#spanauto').html(span_auto_speed); //初期表示
			$('#auto_speed').on('input change', function() {
				span_auto_speed=(5500+parseInt($(this).val()))/50;
				$('#spanauto').html(span_auto_speed);
				current_auto_speed=-$(this).val();
				tyrano.plugin.kag.ftag.startTag("autoconfig",{speed: -$(this).val()});
			});
			$('#vo_volume').val(tyrano.plugin.kag.variable.sf.vo_vol); //スライダー初期位置
			$('#vo').html(tyrano.plugin.kag.variable.sf.vo_vol); //初期表示
			$('#vo_volume').on('input change', function() {
				$('#vo').html($(this).val());
				tyrano.plugin.kag.variable.sf.vo_vol=$(this).val();
			});
			if(typeof tyrano.plugin.kag.variable.sf.vo1_vol!="undefined"){tyrano.plugin.kag.variable.tf.vo1_vol=tyrano.plugin.kag.variable.sf.vo1_vol}else{tyrano.plugin.kag.variable.tf.vo1_vol=100}
			$('#vo1_volume').val(tyrano.plugin.kag.variable.tf.vo1_vol); //スライダー初期位置
			$('#vo1').html(tyrano.plugin.kag.variable.tf.vo1_vol); //初期表示
			$('#vo1_volume').on('input change', function() {
				$('#vo1').html($(this).val());
				tyrano.plugin.kag.variable.tf.vo1_vol=$(this).val();
				tyrano.plugin.kag.variable.sf.vo1_vol=tyrano.plugin.kag.variable.tf.vo1_vol;
				tyrano.plugin.kag.ftag.startTag("seopt",{volume:tyrano.plugin.kag.variable.tf.vo1_vol,buf:2});
			});
			
			$('#fullscreen').on('click',function(e){tyrano.plugin.kag.menu.screenFull()});
			
			if(typeof tyrano.plugin.kag.variable.sf.mopacity=="undefined"){tyrano.plugin.kag.variable.sf.mopacity=255}
			$('#mo_volume').val(tyrano.plugin.kag.variable.sf.mopacity); //スライダー初期位置
			$('#mopacity').html(tyrano.plugin.kag.variable.sf.mopacity); //初期表示
			$('#mo_volume').on('input change', function() {
				$('#mopacity').html($(this).val());
				tyrano.plugin.kag.variable.sf.mopacity=$(this).val();
				$('.message_outer').css('opacity',tyrano.plugin.kag.variable.sf.mopacity/255);
			});
});

	
	   $(function(){
            var text_skip ="ON";
			if(tyrano.plugin.kag.config.unReadTextSkip != "true"){
				text_skip ="OFF";
			};
			if(text_skip=="ON"){
				$('#unreadon').prop('checked', true);$('#unreadoff').prop('checked', false);
			}else{
				$('#unreadon').prop('checked', false);$('#unreadoff').prop('checked', true);
			};
			$('#unreadon').change(function(){
				if( $(this).prop('checked') ){
					text_skip ="ON";
					tyrano.plugin.kag.ftag.startTag("config_record_label",{skip: "true"});
				}else{
					text_skip ="OFF";
					tyrano.plugin.kag.ftag.startTag("config_record_label",{skip: "false"});
				}
			});
			$('#unreadoff').change(function(){
				if( $(this).prop('checked') ){
					text_skip ="OFF";
					tyrano.plugin.kag.ftag.startTag("config_record_label",{skip: "false"});
				}else{
					text_skip ="ON";
					tyrano.plugin.kag.ftag.startTag("config_record_label",{skip: "true"});
				}
			});
	   });
	   
	   $("#config_top").on('contextmenu', function(){tyrano.plugin.kag.ftag.startTag("jump",{target:"back"})});
	   
$('.tab-content>div').hide();
$('.tab-content>div').first().slideDown();
  $('.tab-buttons span').click(function(){
    var thisclass=$(this).attr('class');
    $('#lamp').removeClass().addClass(thisclass);
    $('.tab-content>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(800);
      }
      else{
        $(this).hide();
      }
    });
  });
[endscript]
[s]
;--------------------------------------------------------------------------------
; コンフィグモードの終了
;--------------------------------------------------------------------------------
*back
[cm]

	[iscript]
	TG.config.alreadyReadTextColor = tf.user_setting; // 既読テキストの文字色を復帰
	[endscript]

;	テキスト速度のサンプル表示に使用していたメッセージレイヤを非表示に
	[layopt layer="message1" visible="false"]

;	fixボタンをクリア
	[clearfix]

;	キーコンフィグの有効化
	[start_keyconfig]

;	コールスタックのクリア
	[clearstack]

;	ゲーム復帰
	[awakegame]

