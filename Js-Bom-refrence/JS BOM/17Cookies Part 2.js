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

//path=/ يعني كل الدومين كل الصفحات يعني
document.cookie = "color=green; expires=Sat Feb 01 2020 23:00:47; path=/";

//يعني modify عشان اعدل على الكوكيز اعمل 

//عدلت بس اللون
document.cookie = "color=red";

//هيك عدلت التاريخ لازم اكتب اللون الأول
document.cookie = "color=red; expirs=Sat Feb 05 2020 23:00:47";

// رح يضيفها كا كوكيز جديدة لاني حطيت كوكيز مختلفة حتى لو path اذا عدلت على ال 
// بنفس الإسم الأولى بتتعامل مع الصفحة هاي والثانية الي غريت المسار تبعها بتتعامل مع
// صفحة ثانية تماماً


//بدي احذف كوكيز 
//لازم احط تاريخ قبل التاريخ الأصلي واذا ما كان للكويز مسار وماحطيت هون مسار بتنحذف
//بس لو للكوكيز مسار مطلوب مني احط مسار عشان تنحذف
//ماحطيت قيمة لأنو مافي داعي احط لمابدي احذف بنادي بس على color=
//value بدون ال name ال
document.cookie = "color=; expirs=Sat Feb 01 2020 23:00:47; path=/";



btn.onclick = function () {
    "use strict";

//    document.cookie = "color=green; expires=Tue Feb 11 2020 21:45:20 GMT+0200; path=/";

    sec.innerHTML = document.cookie;
};


msg.onclick = function () {
    "use strict";

    document.cookie = "color=green; expires=Tue Feb 10 2020 21:45:20 GMT+0200; path=/";

    sec.innerHTML = document.cookie;

};


