/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */

/*
بدل ما اعمل فنكشن كبيرة بقدر استعين فيهم 

stop :  loading بيعمل توقف لل
close : بتغلق الصفحات الي فتحتها بنفسي
focus : focus بترجع وبنعمل الها minimize اذا الصفحة معمول الها

*/

// html حطيت هاي الصورة في ال
//<img src="http://www.placehold.it/4000/333">

var s = document.querySelector('.btn'),
    btn2 = document.querySelector('.btn2'),
    btn3 = document.querySelector('.btn3'),
    msg = document.querySelector('.msg');


s.onclick = function () {
    "use strict";

    window.stop();
};

var x;

msg.onclick = function () {
    "use strict";
    x = window.open("http://www.placehold.it", "placehold", "width=300, height=400");
};

btn2.onclick = function () {
    "use strict";
    x.close();

};

btn3.onclick = function () {
    "use strict";
    x.focus();

};