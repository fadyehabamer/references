/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
window.location.href === location.href

location:  window عضو في ال
href:  location في ال properties

location href يقبل مايلي

-absolute url
-page within the current web page
-hash id within the page
-absolute url
-protocol [ftb, mail, file]

*/

console.log(window.location.href); //get url page

//window.location.href = "https://www.google.jo"; //set

console.log(window.location.href);


var a = document.querySelector("a"),
    d1 = document.querySelector(".d1");



d1.onclick = function () {
    "use strict";
    window.location.href = "laith";
};


//location href: mail ممكن يفتح link file ممكن يفتح بروتوكول ممكن

//location.href = "kanaanlaith55@gmail.com";






