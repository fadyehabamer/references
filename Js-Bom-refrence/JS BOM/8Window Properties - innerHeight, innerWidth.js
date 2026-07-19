/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */



/*
innerHeight :  scroll & bar tool طول الصفحة من دون ال
outerHeight :  scroll & bar tool طول الصفحة مع ال

innerWidth :  scroll & bar tool عرض الصفحة من دون ال
outerWidth :  scroll & bar tool عرض الصفحة مع ال

*/

//console.log(window.innerHeight);

/*
Window Properties - pageXOffset, pageYOffset

scrollBy, scrollTo مرتبطات بال pageXOffset, pageYOffset

pageXOffset, pageYOffset: الي بكون scroll بجيبولي القيم تبعت ال
 scrollBy, scrollTo محددها عن طريق ال
*/

var btn = document.querySelector('.btn');

btn.onclick = function () {
    "use strict";
    window.scrollBy(211, 103);
    
    console.log("X Is: " + window.pageXOffset);
    console.log("Y Is: " + window.pageYOffset);
    //OR
    console.log("X Is: " + window.scrollX);
    console.log("Y Is: " + window.scrollY);
};
























