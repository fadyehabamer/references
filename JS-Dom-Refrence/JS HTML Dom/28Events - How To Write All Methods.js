/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


var m = document.querySelector('div'),
    btn = document.querySelector('button');

function changeColor() {
    "use strict";
    m.style.color = "blue";
}


//parameter هون بدون event كتبت هاد المثال عشان اشيل اللبس تبع ال
// parameter لا بكون في html بصفحة ال
btn.onclick = changeColor;



//Event
/*

*/

window.onload = function () {
    'use strict';
    m.style.color = 'red';
};


window.onscroll = function () {
    'use strict';
    m.style.color = 'green';
};


window.onresize = function () {
    'use strict';
    m.style.color = 'purple';
};





