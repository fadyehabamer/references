/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
 object عن طريق ال element بدنا نجيب ال 
 html برجعلي العناصر الموجودة في ال object بيعتمد على ال dom ال
 وانا بقدر اتحكم فيهم واطلع الي بدي اياه object كلها ك
 
 وبعدين انا بطلع منو الي بدي اياه object بالجافا سكريبت في ثوابت بتجيبلي العنصر ك
 
 :الطرق هي
 
 1. document.title
 
 2.document.images: الصور الي عندي بالصفحة بقدر اجيبها
 
 3.document.forms
 
*/


var show1 = document.getElementById('show1');

//هاي من الشغلات الثابتة الي بجيب منها المعلومات الي بدي اياها عن طريق ال 
// find element وهاي ثوابت تبعت object
//كيف اجيب العنوان واعمل فيه شو ما بدي الجافا عبقرية 
show1.innerHTML = document.title;

var show2 = document.getElementById('show2');
var show3 = document.getElementById('show3');

//هون جبت كم صورة بالصفحة هي اول استخدام للفنكشن
show2.innerHTML = document.images.length;

//جبت سورس اول صورة عندي
show3.innerHTML = document.images[0].src;

//اذا بدي اجيب سورس كل الصور بعمل طريقتين 

//بكتبهن كلهن
//show3.innerHTML = document.images[0].src + document.images[1].src + document.images[2].src;

// loop الطريقة الثانية بعمل

var i;

for (i = 0; i < document.images.length; i++) {
	
	document.write(document.images[i].src + '<br>');
}

var show4 = document.getElementById('show4');

show4.innerText = document.forms.length;

//داخل الفورم والعنصر الي بدي اياه access هنا اعملت
//innerText: بتغير النص بس 
//innerHTML: لو في جواه تاغات للعنصر كلو بنشال وبنحط النص المطلوب
show4.innerText = document.forms[0].x1.value;

//هون جبت نوعو
show4.innerText = document.forms[0].x1.type;

show4.innerText = document.forms[1].z2.type;
show4.innerText = document.forms[1].z2.value;







