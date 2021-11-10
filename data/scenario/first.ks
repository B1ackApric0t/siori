[title name="いつかの栞に青い薔薇を"]

[stop_keyconfig]
[hidemenubutton]
[loadcss file="./data/others/css/message.css"]
[loadcss file="./data/others/css/next2.css"]
[loadcss file="./data/others/css/next1.css"]
[call storage="novecole.ks"]


[chara_new  name="haruya" storage="haruya/haruya1.png" width=900 jname="春也" color=fff ]
[chara_new  name="bucho" storage="bucho/bucho1.png" width=1000 jname="部長" color=fff ]
[chara_new  name="yukino" storage="yukino/tatie1.png" width=1000 jname="先輩" color=fff ]
[chara_new  name="uyo" storage="uyo.png" width=900 jname="雨妖" color=fff ]

@call storage="tyrano.ks"

@layopt layer="message" visible=false

;[mask time=1000]
;[image layer=0 page=fore visible=true storage=logo.png]
;[mask_off time=1000]
;[wait time=1000]
;[mask time=1000]
;[freeimage layer=0 time=100]
;[mask_off time=100]

[if exp="sf.Bclear==1"]
[eval exp="sf.Bclear=0"]
[endif]

@jump storage="title.ks"
[s]
