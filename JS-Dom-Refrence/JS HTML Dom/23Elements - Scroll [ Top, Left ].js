/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */

//scrollLeft

var main = document.querySelector('div');


main.onclick = function () {

    "use strict";
    
    document.scrollingElement.scrollTop += 100;
    console.log(document.scrollingElement.scrollTop);

    if (document.scrollingElement.scrollTop >= 1000) {

        this.classList.add('active');

    }

};