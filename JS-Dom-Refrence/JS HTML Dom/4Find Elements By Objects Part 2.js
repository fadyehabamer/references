/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
 1. document.title
 
 2.document.images: الصور الي عندي بالصفحة بقدر اجيبها
 
 3.document.forms
 
 4.document.body
 
 //نفس الاإشي بس بيناتهم اختلافات
 5.document.anchors
 6.document.links
 
 
*/


var show1 = document.getElementById('show1');
var show2 = document.getElementById('show2');
var show3 = document.getElementById('show3');
var show4 = document.getElementById('show4');

// body بنجيب العناصر الي داخل ال

show1.innerText = document.body.innerText;
show2.innerText = document.body.innerHTML;

// body داخل ال text على check عملت

//المهم ما اطلع عن اطار الصياغ sh, show1, ow1 طبعا في
if (document.body.innerText.indexOf("ow") > -1) {
	
	console.log("yes, this is found");
} else {
	console.log("no, not found");
}

// links & anchors في فرق بين ال
// anchors: a هو تاغ ال
// links: href="#" هو ال

// وفي مكانها مثلا href="#" هون أعطاني صفر لو مافي
//هون رح يعد ويعطيني عددهم name="google
show3.innerText = document.anchors.length; //0

show4.innerText = document.links.length; //3













