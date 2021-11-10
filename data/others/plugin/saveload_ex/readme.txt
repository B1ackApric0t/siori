【セーブ・ロード機能拡張プラグイン】


■できること
セーブ・ロード画面に以下の機能を追加します。
・ページ表示
・セーブデータに任意の変数を表示
・セーブデータ消去
・セーブデータ保護
・セーブデータ上書き時確認表示
・最新のセーブデータに任意の画像を表示
・セーブ日付をゼロ埋め表示
・コメント入力欄を表示
・最後に表示したページを記憶
・セーブ実行後セーブ画面を閉じない
・デザインカスタマイズ


■使い方
このテキストが入っているフォルダごと「data/others/plugin」フォルダに置きます。
それからfirst.ksとかに以下のように記述してください。

[plugin name=saveload_ex]
指定可能属性
slot        ：1ページあたりに表示するセーブスロット数を数値で指定（0の場合、全セーブスロットを1ページに表示）
exvar       ：セーブデータに追加で表示したい変数名を指定、半角カンマ区切りで複数指定可能（例："f.chapter,sf.day"）
exvar_join  ：セーブデータに追加で表示したい変数が複数ある場合、セーブ画面に表示時に間に挿入する文字列を指定
delete      ：セーブデータ消去ボタンを表示する場合はtrueを指定
lock        ：セーブデータ保護ボタンを表示する場合はtrueを指定
dialog      ：セーブデータ上書き時確認表示する場合はtrueを指定
new         ：最新のセーブデータに任意画像を表示する場合はtrueを指定
comment     ：コメント入力欄を表示する場合はtrueを指定
fadetime    ：セーブ・ロード完了時に画面をフェードする時間を指定（単位：ミリ秒）
fademask    ：画面フェード時に暗転を挟む場合はtrueを指定
maskcolor   ：画面フェード時暗転画面の色を指定
maskimage   ：画面フェード時暗転画面の画像パスを指定（maskcolorより優先して適用されます）
memory      ：最後に表示したページを記憶する場合はtrueを指定
hold        ：セーブ実行後にセーブ画面を閉じない場合はtrueを指定
saveload    ：プラグイン読み込み時に指定可能な属性をプロパティに持つオブジェクトを指定。長々と属性指定したくない人向け

※以下、デザインカスタマイズ用のパラメータです。
  基本的に長さの単位はpx、文字揃えはleft,center,right、画像はimageフォルダに配置します。
・セーブリスト全体
bg_save                 ：セーブ画面背景画像
bg_load                 ：ロード画面背景画像
area_x                  ：左端位置
area_y                  ：上端位置
・スクロールバー
scroll_width            ：幅
scroll_thumb_radius     ：つまみ角丸
scroll_thumb_color      ：つまみ色
scroll_base_radius      ：ベースの角丸
scroll_base_color       ：ベース色
・戻るボタン
back_width              ：幅
back_height             ：高さ
back_x                  ：左端位置
back_y                  ：上端位置
back_img                ：ボタン画像
・ページ表示
page_img                ：ページ画像、「{page}」部分がページ番号に置き換わります（例：「page/page_{page}.png」の場合、「page/page_1.png」）
page_x                  ：左端位置
page_y                  ：上端位置
page_vertical           ：ページ画像の並び方向を縦向きにする場合はtrueを指定
page_margin             ：ページ画像間の間隔を指定
・各セーブスロット　位置指定はスロットごとの左上基点の位置です。
slot_width              ：幅
slot_height             ：高さ
slot_marginx            ：各スロット間の左右間隔
slot_marginy            ：各スロット間の上下間隔
slot_column             ：１行に表示するスロット数
slot_bg                 ：背景画像
slot_vertical           ：セーブスロットが複数列かつ複数行あるとき、並び方向を縦向きにする場合はtrueを指定
  ※trueの場合の並び順
    １３
    ２４
  ※falseの場合の並び順
    １２
    ３４
・セーブデータ番号
num_width               ：幅
num_height              ：高さ
num_x                   ：左端位置
num_y                   ：上端位置
num_color               ：文字色
num_align               ：文字揃え
num_size                ：文字サイズ
・サムネイル
thumb_width             ：幅
thumb_height            ：高さ
thumb_x                 ：左端位置
thumb_y                 ：上端位置
thumb_noimage           ：セーブデータがないスロットのサムネイル画像
・セーブ日付
date_width              ：幅
date_height             ：高さ  
date_x                  ：左端位置
date_y                  ：上端位置
date_color              ：文字色
date_align              ：文字揃え
date_size               ：文字サイズ
・テキスト
text_width              ：幅    
text_height             ：高さ
text_x                  ：左端位置
text_y                  ：上端位置
text_color              ：文字色
text_align              ：文字色
text_size               ：文字サイズ
・追加表示変数
var_width               ：幅
var_height              ：高さ
var_x                   ：左端位置
var_y                   ：上端位置
var_color               ：文字色
var_align               ：文字揃え
var_size                ：文字サイズ
・セーブデータ保護ボタン
lock_width              ：幅
lock_height             ：高さ
lock_x                  ：左端位置
lock_y                  ：上端位置
lock_img_lock           ：保護状態のボタン画像
lock_img_unlock         ：保護解除状態のボタン画像
・セーブデータ削除ボタン
delete_width            ：幅
delete_height           ：高さ
delete_x                ：左端位置
delete_y                ：上端位置
delete_img_delete       ：削除可能状態のボタン画像
delete_img_undelete     ：削除不可状態のボタン画像
・最新のセーブデータ表示
new_width               ：幅    
new_height              ：高さ
new_x                   ：左端位置
new_y                   ：上端位置
new_img                 ：画像
・コメント入力欄
comment_width           ：幅
comment_height          ：高さ
comment_x               ：左端位置
comment_y               ：上端位置
comment_size            ：文字サイズ
comment_button_img      ：コメント更新ボタン画像
comment_button_width    ：ボタン画像幅
comment_button_height   ：ボタン画像高さ
comment_button_x        ：ボタン画像左端位置
comment_button_y        ：ボタン画像上端位置
comment_placeholder     ：コメント未入力時初期表示する文字列


■ボタン画像について
「通常画像ファイル名 + _h.png」がホバー時の画像となります。（例：back.png、back_h.png）
「通常画像ファイル名 + _a.png」がページ表示のページ選択時画像となります。（例：page1.png、page1_h.png、page1_a.png）


■exvar_joinに空白文字を指定する
一旦変数に文字列を格納し、その変数をexvar_joinに指定してください。
例）
[eval exp="tf.join = '　'"]
[plugin name="saveload_ex" slot=5 data="f.chapter,sf.day" exvar_join="&tf.join"]


■saveload属性の使い方
真偽値、数値はダブルクォーテーションで囲わず、そのまま記述してください。
画像指定はimageフォルダがルートとなります。
例）
[iscript]
tf.saveload = {
    "delete": true,
    "lock": true,
    "dialog": true,
    "new": true,
    "comment": false,
    "fadetime": 300,
    "memory": true,
    "bg_save": "save_load/bg_save.png",
    "bg_load": "save_load/bg_load.png",
（略）
}
[endscript]
[plugin name=saveload_ex saveload="&tf.saveload"]


■注意事項
このプラグインを使用したことで生じたあらゆる問題について、製作者は責任を負いません。
不具合報告等は歓迎しております。製作者Twitterまでどうぞ。


■製作者
さくた（@skt_order）
https：//skt-pnt.netlify.app


■更新履歴
2021/10/02　ver.1.5公開
・holdパラメータを追加
・バグ修正

2021/09/30　ver.1.4公開
・他画面との競合を解決
・page_margin、slot_verticalパラメータを追加
・バグ修正

2021/09/21　ver.1.3公開
・サムネイル表示周りのバグを修正

2021/08/25　ver.1.2公開
・menu.htmlと併用した際の表示不具合を修正

2021/08/15　ver1.1公開
・バグ修正

2021/08/15　ver1.0公開
・画面暗転時に画像を指定できるように

2021/08/12　ver0.7α公開
・save引数にfalseを指定しても最新セーブデータ画像が表示される不具合を修正

2021/07/02　ver0.6α公開
・セーブ／ロード画面をフェード表示時、一部条件で設定値が反映されない不具合を修正
・追加変数が表示されない不具合を修正

2021/03/20　ver.0.5α公開
・デザインカスタマイズ系パラメータ追加

2021/03/14　ver.0.1α公開
