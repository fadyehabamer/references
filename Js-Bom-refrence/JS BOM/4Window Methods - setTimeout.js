/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */

/*
setTimeout(Function, Millisecound, Param1, Param2, Param3)
clearTimeout(Id or Number Of SetInterval )

setInterval(Function, Millisecound, Param1, Param2, Param3)
clearInterval(Id or Number Of SetInterval )
*/

var txt = document.querySelector('div'),
    btn = document.querySelector('button'),
    w,
    d,
    count = 5;

function color() {
    "use strict";

    var c = ["red", "green", "blue", "gold", "pink", "orange"],
        v,
        r;

    if (count <= 0) {

        txt.textContent = "Done";
        clearTimeout(d);

    } else {

        r = Math.floor(Math.random() * c.length);
        txt.style.color = c[r];
        console.log(c[r]);

        count--;

    }

}

function start() {
    "use strict";

    //هون كل ثانية نفذلي الفنكشن
    w = setInterval(color, 1000);
}

//كما نلاحظ هون بعد ما استنا ثانيتين نفذلي الفنكشن
//حطيتها بمتغير عشان القيمة تبعتو تساوي واحد تخزنت جوا المتغير باخذها 
//عشان يوقف clearTimeout وبحطها جوا ال

//طيب شو فايدته setTimeout الي بيرجعلي من فنكشن ال return او ال id ال 
// setTimeout عشان اعتمد عليه بحال بدي اوقف ال

d = setTimeout(start, 2000);


btn.onclick = function () {
    "use strict";

    //nummber أو ال setTimeout تبع ال id بيطلب مني ال clearTimeout ال 
    //setTimeout تبع ال  
    //d = 1;  setTimeout الخاص ب id هاد الرقم يسمى    
    clearTimeout(d);

    // w = 1;a
    clearInterval(w);

};

/*

#ff0099   //pink
#f3f315   //yellow
#83f52c   //green
#ff6600   //orange
#6e0dd0   //purple
*/
