/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


var main = document.getElementById('main'),
	btn = main.lastElementChild;

//console.log(btn); للتشييك

btn.onclick = function () {
	
	"use strict";
	
	this.parentElement.style.display = 'none';
};


window.onload = function () {
	
	"use strict";
	
//	btn.click();
};


// للصفحة استنى ثانيتين ودوس على الزر load في شغلة حلوة بعد ما تعمل

window.onload = function () {
	
	'use strict';
	
	
	setTimeout(function () {
        
        btn.click();
        
    }, 4000);
};

/*
OR
لإنو مالو داعي أساسا onload نخليها برا الفنكشن

setTimeout(function () {
        
        btn.click();
        
    }, 4000);
    
*/









