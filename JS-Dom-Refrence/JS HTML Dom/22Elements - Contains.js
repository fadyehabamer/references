/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */

/*
Elements - Client [ Height, Width ]

Client Height: بتجيبلي ال

1. المكان الي ينفع اشوفه viewable area 
2. تبع العنصر include padding وبتحسب ال
3. no border مابتحسبش ال
4.no margin
5.no scroll

*/

var main = document.getElementById('main'),
    sp = document.getElementById('sp');

if (main.contains(sp)) {
    
    console.log('yes');
}








