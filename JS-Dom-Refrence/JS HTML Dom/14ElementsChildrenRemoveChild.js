/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
بدنا نحذف عناصر
*/

var mymain = document.getElementById('main');

//p1 نشالت
//mymain.removeChild(mymain.firstElementChild);

//هون شال الفراغ عشان اشيل العنصر لازم يكون هيك ملزق
//<div id="main"><p>p1</p>
mymain.removeChild(mymain.firstChild);

console.log(mymain.childNodes);
console.log(mymain.childNodes.length);

//h1
mymain.removeChild(mymain.childNodes[1]);


//Remove All Child

while (mymain.firstChild) {

    mymain.removeChild(mymain.firstChild);

}



