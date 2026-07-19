/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


window.onload = function () {
	
	"use strict";
	
	document.getElementById('txt').focus();
};

document.querySelector('button').onclick = function () {
	
	"use strict";
	
	document.getElementById('txt').blur();
};


//عمل الأستاذ تجربة غير منطقية طبعا

document.getElementById('txt').onclick = function () {
	
	"use strict";
	
	this.blur();
};