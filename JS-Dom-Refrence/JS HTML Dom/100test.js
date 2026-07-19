/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */



var btn = document.querySelector('.btn'),
    txt1 = document.querySelector('.txt'),
    txt2 = document.querySelector('.txt2'),
    msg = document.querySelector('.msg'),
    main = document.querySelector('.main'),
    x;

btn.onclick = function (d) {
   "use strict";
    
    x = document.scrollingElement.scrollTop += 100;
    
    console.log(x);
    
    if (x >= 600) {
        
       d.preventDefault();
        console.log('stop');
        
    } 
};















