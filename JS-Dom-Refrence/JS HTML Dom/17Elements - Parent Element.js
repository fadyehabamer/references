/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
parentNode: جابلي الأب تبع العنصر 
parentElement: نفس الإشي

بدي اتحكم بالأب عن طريق الأطفال وكثير رح اواجه هيك 
*/

var main = document.querySelectorAll('div'),
	btn = main[0].firstElementChild;

btn.onclick = function () {
	
	"use strict";
	
	this.parentNode.style.display = 'none';
};


//مش داخل اي عنصر ثانيbody موجود داخل ال main بدي اتأكد انو ال


if (main[0].parentElement.tagName === 'BODY') {

	console.log('yes inside body');

}







