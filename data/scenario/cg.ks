;=========================================
; CG モード　画面作成
;=========================================
*start
[fadeoutbgm time=1000]
@layopt layer=message0 visible=false

@clearfix
[cm]

[html]
<div id="cgall">
<div class="fadein">
<img src="data/bgimage/gallery_bg.jpg" style="z-index:-10;">
<div class="cg_back" style="left:50px;top:650px;position:absolute;cursor:pointer;z-index:10;">
	<img src="data/fgimage/back_system.png" alt="" class="non">
</div>

<div class='tabs'>
  <div class='tab-buttons'>
    <span class='content1' style="margin-left:105px;padding-top:10px;transition: .3s;">章選択</span>
    <span class='content2' style="padding-top:10px;transition: .3s;">画廊</span>
    [if exp="sf.Aroot == 1 && sf.Broot == 1"]
    <span class='content3' style="padding-top:10px;transition:.3s;">音楽</span>
    [else]
    <span style="padding-top:10px;transition:.3s;opacity:0.5;pointer-events: none;">音楽</span>
    [endif]
    <div id='lamp' class='content1 lamp'></div>
  </div>
  <div class='tab-content'>
    
    <div class='content1'>
      <img src="data/image/scene1.jpg" style="width:400px;" id="chapbg">
      <div id="chaptertitle">場面1. 相合傘</div>
      <div id="summary">ふたりでひとつの傘に入りながら、ともに帰路を歩む春也と先輩。やがて先輩と別れひとりになる春也だったが、その背後には巨大な魚影が忍び寄っていた。</div>
      <div class="chapterchoice">
        <div id="chapter1" class="chap">場面1.相合傘</div>
        [if exp="sf.S2 == 1"]
        <div id="chapter2" class="chap">場面2.約束</div>
        [else][endif]
        [if exp="sf.S3 == 1"]
        <div id="chapter3" class="chap">場面3.回想／邂逅</div>
        [else][endif]
        [if exp="sf.S4 == 1"]
        <div id="chapter4" class="chap">場面4.あじさい園</div>
        [else][endif]
        [if exp="sf.S5 == 1"]
        <div id="chapter5" class="chap">場面5.予兆</div>
        [else][endif]
        [if exp="sf.S6 == 1"]
        <div id="chapter6" class="chap">場面6.雨妖</div>
        [else][endif]
        [if exp="sf.S7 == 1"]
        <div id="chapter7" class="chap">場面7.葛藤</div>
        [else][endif]
      </div>
      <div class="chapterA">
        [if exp="sf.S8a == 1"]
        <div id="chapter8A" class="chap">場面8A.決着</div>
        [else][endif]
        [if exp="sf.S9a == 1"]
        <div id="chapter9A" class="chap">場面9A.別れ</div>
        [else][endif]
        [if exp="sf.S10a == 1"]
        <div id="chapter10A" class="chap">場面10A.エピローグ</div>
        [else][endif]
      </div>
      <div class="chapterB">
        [if exp="sf.S8b == 1"]
        <div id="chapter8B" class="chap">場面8B.対面</div>
        [else][endif]
        [if exp="sf.S9b == 1"]
        <div id="chapter9B" class="chap">場面9B.彼岸</div>
        [else][endif]
        [if exp="sf.S10b == 1"]
        <div id="chapter10B" class="chap">場面10B.「　」</div>
        [else][endif]
      </div>
      [if exp="sf.Aroot == 1 && sf.Broot == 1"]
      <div id="chapterEX" class="chap" style="position:absolute;top:200px;left:870px;">EX.背中</div>
      [else][endif]
    </div>
    
    <div class='content2'>
      <div style="float:left;position:absolute;top:-10px;left:40px;">
        [if exp="sf.ST1 == 1"]
        <img src="data/bgimage/tonarib.jpg" class="cg" id="tonari">
        [else][endif]
        [if exp="sf.ST2 == 1"]
        <img src="data/bgimage/shadow1.jpg" class="cg" id="shadow">
        [else][endif]
        [if exp="sf.ST3 == 1"]
        <img src="data/bgimage/tekubi.jpg" class="cg" id="tekubi">
        [else][endif]
        [if exp="sf.ST4 == 1"]
        <img src="data/bgimage/te.jpg" class="cg" id="senpai">
        [else][endif]
        [if exp="sf.ST5 == 1"]
        <img src="data/bgimage/vsuyo.jpg" class="cg" id="vsuyo">
        [else][endif]
        [if exp="sf.ST6 == 1"]
        <img src="data/bgimage/Alast.jpg" class="cg" id="alast">
        [else][endif]
        [if exp="sf.ST7 == 1"]
        <img src="data/bgimage/Blast.jpg" class="cg" id="blast">
        [else][endif]
        [if exp="sf.ST8 == 1"]
        <img src="data/bgimage/hug1.jpg" class="cg" id="hug">
        [else][endif]
      </div>
      [if exp="sf.SM1 == 1"]
      <img src="data/bgimage/op.png" class="cg" id="g_op" style="position:absolute;top:297px;left:40px;">
      <div class="try" style="left:140px;">▶</div>
      [else][endif]
      [if exp="sf.SM2 == 1"]
      <img src="data/bgimage/endA.png" class="cg" id="g_ed1" style="position:absolute;top:297px;left:300px;">
      <div class="try" style="left:400px;">▶</div>
      [else][endif]
      [if exp="sf.SM3 == 1"]
      <img src="data/bgimage/endB.png" class="cg" id="g_ed2" style="position:absolute;top:297px;left:560px;">
      <div class="try" style="left:660px;">▶</div>
      [else][endif]
    </div>
    
    <div class='content3'>
      <audio src="data/bgm/main.ogg" id="audiotag"></audio>
      <div style="position:absolute;left:150px;">
        <div id="bgm1" class="m_title">雨にして人を外れ</div>
        <div id="bgm2" class="m_title">日常会話</div>
        <div id="bgm3" class="m_title">あじさい園</div>
        <div id="bgm4" class="m_title">雨妖</div>
        <div id="bgm5" class="m_title">僕の先輩</div>
        <div id="bgm6" class="m_title">雨にして人を外れOPver.</div>
        <div id="bgm7" class="m_title">外の光</div>
        <div id="bgm8" class="m_title">心の中へ</div>
      </div>
      <div id="play"><img src="data/image/music3.png" class="act"></div>
	  <div id="time">
  		<span id="current" style="position:absolute;top:265px;left:575px;font-weight:bold;font-size:20px;font-family:applimincho;">00:00</span>
		<span id="duration" style="position:absolute;top:265px;left:995px;font-weight:bold;font-size:20px;font-family:applimincho;">00:00</span>
	  </div>
	  <div id="seekbar" style="position:absolute;top:264px;left:647px;"></div>
	  <img src="data/image/music5.png"  style="position:absolute;left:805px;top:328px;">
	  <input type="range" id="volume" style="position:absolute;top:341px;left:800px;width:200px;height:4px;" value="30" min="0" max="99">
	  <div id="bmusic" style="position:absolute;left:580px;top:326px;cursor:pointer;"><img src="data/image/music2.png"></div>
	  <div id="nmusic" style="position:absolute;left:720px;top:326px;cursor:pointer;"><img src="data/image/music4.png"></div>
	  <img src="data/image/music1.png" style="position:absolute;left:670px;top:-20px;" >
    </div>
    
  </div>
  <div id="cgbig"></div>
  <div id="cgvideo"><video src="" autoplay id="vcg"></video></div>
</div>
</div>




<script>
$('.cg_back').click(function(){tyrano.plugin.kag.ftag.startTag("jump", {target:"backtitle"})});

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
  
$('#chapter1').hover(
  function(){
    $chapters.css('border-left','solid 4px rgba(0,0,0,0)');
    $('#chapter1').css('border-left','solid 4px rgba(0,0,0,1)');
    $('#chaptertitle').text('場面1. 相合傘');
    $('#summary').text('ふたりでひとつの傘に入りながら、ともに帰路を歩む春也と先輩。やがて先輩と別れひとりになる春也だったが、その背後には巨大な魚影が忍び寄っていた。');
    $('#chapbg').attr('src','data/image/scene1.jpg');
  },function(){
});
</script>
[endhtml]

[if exp="sf.pc == true"]
[loadjs storage="music.js"]
[else]
[loadjs storage="music2.js"]
[endif]
[loadjs storage="cg.js"]
[s]



*backtitle
[cm]
[clearfix]
@jump storage=title.ks target=*start

