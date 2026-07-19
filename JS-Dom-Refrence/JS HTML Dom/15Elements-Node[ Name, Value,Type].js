/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


var main = document.querySelector('div');

console.log(main.childNodes);
//NodeList(7) [text, p, text, h1, text, p, text]

console.log(main.childNodes[0]);

console.log(main.childNodes[0].nodeName);  //#text

console.log(main.childNodes[1].nodeName);  //P

//مش للنصوص والكومنتات elements التاغ تستخدم لل
console.log(main.childNodes[1].tagName);  //P

//شوف شو اعطاني لاني استخدمتها لنص
console.log(main.childNodes[0].tagName);  //undefined


console.log(main.childNodes[0].nodeValue);  //first text

console.log(main.childNodes[1].nodeValue);  //null

//واحد وهو نص لذلك شو بنكتب node لما ندخل جواه في null ليش اعطاني 
console.log(main.childNodes[1].firstChild.nodeValue);  //p111

//OR
//childNodes[0] = firstChild
console.log(main.childNodes[1].childNodes[0].nodeValue);//p111


/*
comment : 8
element : 1
text :    3
atribute :2
*/
console.log(main.childNodes[1].childNodes[0].nodeType);//3

//element  لإنو جواها
console.log(main.childNodes[5].childNodes[0].tagName);//SPAN

//بقدر هون اجيب اسم الكلاس
console.log(main.childNodes[5].childNodes[0].className);//P22

//بقدر كمان اغير اسم الكلاس اقدرت اقتنص العنصر بطريقة سهلة
console.log(main.childNodes[5].childNodes[0].className = "new_p");



/*
nodeName
nodeValue
nodeType

tagName

*/



