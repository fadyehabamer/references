/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
host:  localhost هو المستضيف تبع موقعي ال

location.host او ال location.href بقدر اغير ال
بقدر استفيد من هالميزة لو حبيت اغير اسم موقعي لو مثلا بتنقل شخص من موقع
ثاني لما يجي الشخص ع الصفحة domain لموقع ثاني وبدك تحول كل الروابط على 
تبع اللينك structure الثاني بنفس ال domain يحولو ع ال
بس الي بتغير host اللينك بضل نفس ما هو وال
*/

console.log(location.href);
console.log(location.host); //127.0.0.1:63883


var d1 = document.querySelector(".d1");

d1.onclick = function () {
    "use strict";
    //    window.location.href = "#laith";
    console.log(window.location.hash);
};

//set بقدر اعمل url طبعا بقدر احط قيمة للهاش مش شرط اكتبها في ال

window.location.hash = "abed";

//لو في اشخاص اجو عن طريق هاش معين وبدي اعرف كم


if (location.hash.indexOf('abed') > -1) {

    console.log("welcome");

    //كانت بالأول ليث وتغيرت الهاش
    console.log(window.location.hash); //abed

}

if (location.hash.slice(1) === "abed") {

    console.log("i found it");
}

//للتأكد من وجود هاش بلأصل
if (location.hash.indexOf("#") > -1) {

    console.log("i found it");
}

//Remove Hash

// history.pushState("", document.title, window.location.pathname);



var w  = location.hash,
    patt = /[a-z]{1,}/;
    
if (patt.test(w)) {
    
    console.log("yes");
} else {
    
    console.log("no");
}