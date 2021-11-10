var still = 1;

$('#tonari').click(function(){
  still = 2;
  $('#cgbig').css({'background-image':'url("data/bgimage/tonarib.jpg")','visibility':'visible'});
});
$('#shadow').click(function(){
  still = 3;
  $('#cgbig').css({'background-image':'url("data/bgimage/shadow1.jpg")','visibility':'visible'});
});
$('#tekubi').click(function(){
  still = 4;
  $('#cgbig').css({'background-image':'url("data/bgimage/tekubi.jpg")','visibility':'visible'});
});
$('#senpai').click(function(){
  $('#cgbig').css({'background-image':'url("data/bgimage/te.jpg")','visibility':'visible'});
});
$('#vsuyo').click(function(){
  still = 6;
  $('#cgbig').css({'background-image':'url("data/bgimage/vsuyo.jpg")','visibility':'visible'});
});
$('#hug').click(function(){
  still = 8;
  $('#cgbig').css({'background-image':'url("data/bgimage/hug1.jpg")','visibility':'visible'});
});
$('#alast').click(function(){
  $('#cgbig').css({'background-image':'url("data/bgimage/Alast.jpg")','visibility':'visible'});
});
$('#blast').click(function(){
  $('#cgbig').css({'background-image':'url("data/bgimage/Blast.jpg")','visibility':'visible'});
});
$('#g_op').click(function(){
  audio.pause()
  $('#cgvideo').css('visibility','visible');
  $('#vcg').attr('src','data/video/amehazuOP3.mp4');
});
$('#g_ed1').click(function(){
  audio.pause()
  $('#cgvideo').css('visibility','visible');
  $('#vcg').attr('src','data/video/amehazuED_A.mp4');
});
$('#g_ed2').click(function(){
  audio.pause()
  $('#cgvideo').css('visibility','visible');
  $('#vcg').attr('src','data/video/amehazuED_B2.mp4');
});

$('#cgbig').click(function(){
  if (still == 2) {
    $('#cgbig').css('background-image','url("data/bgimage/tonarik.jpg")');
    still = 21;
  } else if (still == 21) {
    $('#cgbig').css('background-image','url("data/bgimage/tonarimono.jpg")');
    still = 22;
    } else if (still == 22) {
    $('#cgbig').css('background-image','url("data/bgimage/tonarimu.jpg")');
    still = 23;
    } else if (still == 23) {
    $('#cgbig').css('background-image','url("data/bgimage/tonarib_n.jpg")');
    still = 24;
  } else if (still == 24) {
    $('#cgbig').css('background-image','url("data/bgimage/tonariemi_n.jpg")');
    still = 25;
  } else if (still == 25) {
    $('#cgbig').css('background-image','url("data/bgimage/tonarik_n.jpg")');
    still = 26;
  } else if (still == 27) {
    $('#cgbig').css('background-image','url("data/bgimage/tonarime_n.jpg")');
    still = 1;
  } else if (still == 3) {
    $('#cgbig').css('background-image','url("data/bgimage/shadow.jpg")');
    still = 31;
  } else if (still == 31) {
    $('#cgbig').css('background-image','url("data/bgimage/shadow2.jpg")');
    still = 1;
  } else if (still == 4) {
    $('#cgbig').css('background-image','url("data/bgimage/tekubi2.jpg")');
    still = 41;
  } else if (still == 41) {
    $('#cgbig').css('background-image','url("data/bgimage/tekubi3.jpg")');
    still = 1;
  } else if (still == 6) {
    $('#cgbig').css('background-image','url("data/bgimage/vsuyo2.jpg")');
    still = 1;
  } else if (still == 8) {
    $('#cgbig').css('background-image','url("data/bgimage/hug2.jpg")');
    still = 81;
  } else if (still == 81) {
    $('#cgbig').css('background-image','url("data/bgimage/hug3.jpg")');
    still = 82;
  } else if (still == 82) {
    $('#cgbig').css('background-image','url("data/bgimage/hug4.jpg")');
    still = 1;
  } else {
    $('#cgbig').css({'background-image':'','visibility':'hidden'});}
});

$('#cgvideo').click(function(){
  $('#vcg').attr('src','');
  $('#cgvideo').css('visibility','hidden');
});

var current_bgm_vol=parseInt(tyrano.plugin.kag.config.defaultBgmVolume);
var videoElem = document.getElementById('vcg');
videoElem.volume = current_bgm_vol/100;

videoElem.onended = (event) => {
  $('#vcg').attr('src','');
  $('#cgvideo').css('visibility','hidden');
};

$("#cgbig").bind('contextmenu', function() {
  $(this).html('');
  still = 1;
  $(this).css({'background-image':'','visibility':'hidden'});

  return false;
});


var $chapters = $("#chapter1,#chapter2,#chapter3,#chapter4,#chapter5,#chapter6,#chapter7,#chapter8A,#chapter9A,#chapter10A,#chapter8B,#chapter9B,#chapter10B,#chapterEX");
$('#chapter1').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"title.ks",target:"gamestart"})});
$('#chapter2').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene2.ks",target:"chapter"})});
$('#chapter3').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene3.ks",target:"chapter"})});
$('#chapter4').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene4.ks",target:"chapter"})});
$('#chapter5').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene5.ks",target:"chapter"})});
$('#chapter6').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene6.ks",target:"chapter"})});
$('#chapter7').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene7.ks",target:"chapter"})});
$('#chapter8A').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene8A.ks",target:"chapter"})});
$('#chapter9A').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene9A.ks",target:"chapter"})});
$('#chapter10A').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene10A.ks",target:"chapter"})});
$('#chapter8B').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene8B.ks",target:"chapter"})});
$('#chapter9B').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene9B.ks",target:"chapter"})});
$('#chapter10B').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"scene10B.ks",target:"chapter"})});
$('#chapterEX').click(function(){tyrano.plugin.kag.ftag.startTag("jump",{storage:"sceneex.ks",target:"chapter"})});

