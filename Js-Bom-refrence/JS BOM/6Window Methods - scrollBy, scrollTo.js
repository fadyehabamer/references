/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*

scrollBy(x, y) // in px
scrollTo(x, y) // in px

scrollBy, scrollTo: للمكان الي بحدده window بتحرك ال

scrollBy: يعطيه عدد بيكسل معينة بتتحرك بناء عليه روح يمين شمال لفوق شوي
لتحت بزحزحو

scrollTo: بودبه مكان معين انا بحدده هون بشيله كله وبحطه بمكان معين

*/

var click = document.querySelector('.btn'),
    click2 = document.querySelector('.btn2'),
    click3 = document.querySelector('.btn3');

click.onclick = function () {
    "use strict";
    
    window.scrollBy(200, 300);
    console.log("x = " + window.scrollX);
    console.log("y = " + window.scrollY);
    
};


click2.onclick = function () {
    "use strict";
    
    window.scrollBy(-200, -100);
    console.log("x = " + window.scrollX);
    console.log("y = " + window.scrollY);
    
};


//لو اكبس الف مرة ما بتزيد القيمة لمكان واحد وبس بروح
click3.onclick = function () {
    "use strict";
    
    window.scrollTo(600, 400);
    console.log("x = " + window.scrollX);
    console.log("y = " + window.scrollY);
    
};



































