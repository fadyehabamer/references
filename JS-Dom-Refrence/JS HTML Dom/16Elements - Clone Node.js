/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
clone : يعني استنساخ بنسخ عنصر من مكان لمكان
*/

var main = document.getElementById('main'),
	newd = document.getElementById('new'),
	
	//cloneNode(F) من دون الأطفال element + attribute هون نقل فقط ال 
	//false لو ماوضعنا اشي الوضع الطبيعي true عشان نخليه ياخذ كل اشي نضع
	//copy & paste وهيك بصير بال
	copy = main.firstElementChild.cloneNode(true);


newd.appendChild(copy);


//var msg = document.querySelector('.msg'),
//    msg2 = document.querySelector('.show'),
//    k;
//
//for (k = 0; k < msg.childNodes.length; k++) {
//    
//    var copy = msg.childNodes[k].cloneNode(true);
//    
//    msg2.appendChild(copy);
//    
//}






