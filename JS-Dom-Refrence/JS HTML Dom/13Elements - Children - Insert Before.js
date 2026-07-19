/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
ينضافوا اول الأب appendChild بدي اخلي ال
*/

var main = document.getElementById('main'),
	
	div = document.createElement('div'),
	divtxt = document.createTextNode('laith kanan'),
	
	div2 = document.createElement('div'),
	divtxt2 = document.createTextNode('laith kanan2');

div.appendChild(divtxt);
div2.appendChild(divtxt2);

main.insertBefore(div, main.firstElementChild);

//childNodes.length بدل الفقرة الرابعة ننتبه للأسطر الفاضية ونستخدم
main.insertBefore(div2, main.childNodes[4]);
	
