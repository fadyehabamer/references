/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
 element || text ممكن يكون child ال
*/

var main = document.querySelector('div'),
	
	h1 = document.createElement('h1'),
	txth = document.createTextNode('heading'),
	
	p = document.createElement('p'),
	txtp = document.createTextNode('laith kanan');


//طبعا الأطفال بينضافو بآخر الأب
h1.appendChild(txth);
p.appendChild(txtp);

main.appendChild(h1);
main.appendChild(p);

