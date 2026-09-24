/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


var msg = document.querySelector(".msg"),
    btn = document.querySelector("button"),
    sec = document.querySelector("section");



// string جابلي التاريخ
var d = new Date();

// an expires date in the past deletes the cookie straight away, so use one a month from now
d.setMonth(d.getMonth() + 1);

//path=/ يعني كل الدومين كل الصفحات يعني
document.cookie = "color=green; expires=" + d.toUTCString() + "; path=/";

//يعني modify عشان اعدل على الكوكيز اعمل 

//عدلت بس اللون
document.cookie = "color=red";

//هيك عدلت التاريخ لازم اكتب اللون الأول
document.cookie = "color=red; expires=" + d.toUTCString();

// رح يضيفها كا كوكيز جديدة لاني حطيت كوكيز مختلفة حتى لو path اذا عدلت على ال 
// بنفس الإسم الأولى بتتعامل مع الصفحة هاي والثانية الي غريت المسار تبعها بتتعامل مع
// صفحة ثانية تماماً


//بدي احذف كوكيز 
//لازم احط تاريخ قبل التاريخ الأصلي واذا ما كان للكويز مسار وماحطيت هون مسار بتنحذف
//بس لو للكوكيز مسار مطلوب مني احط مسار عشان تنحذف
//ماحطيت قيمة لأنو مافي داعي احط لمابدي احذف بنادي بس على color=
//value بدون ال name ال
// (the attribute must be spelled "expires"; a misspelled attribute is ignored and nothing is deleted)
document.cookie = "color=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";



btn.onclick = function () {
    "use strict";

//    document.cookie = "color=green; expires=Tue Feb 11 2020 21:45:20 GMT+0200; path=/";

    sec.innerHTML = document.cookie;
};


msg.onclick = function () {
    "use strict";

    document.cookie = "color=green; expires=" + d.toUTCString() + "; path=/";

    sec.innerHTML = document.cookie;

};


