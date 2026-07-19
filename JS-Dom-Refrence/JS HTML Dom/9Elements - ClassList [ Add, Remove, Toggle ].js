/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */



/*
add:  Class بضيف
remove:  Class بحذف
toggle: ببدل بينهم لو موجود بشيلو لو مش موجود يحطو

*/

var mydiv = document.getElementById('one'),
	btn1 = document.getElementById('btn_add'),
	btn2 = document.getElementById('btn_del'),
	btn3 = document.getElementById('btn_tog'),
	
	btn4 = document.getElementById('btn_tog2'),
	mydiv2 = document.getElementById('tow');
	//OR بس لو كالن عندي زر واحد
//	btn = document.querySelector('button');

//والثانية انو حذف querySelector نلاحظ هنا شغلتين الأول مش شطر يكون في
//كل الكلاسات وحط اسم جديد وانا بدي ينضاف معاهام مش يحذفهم
//mydiv.className = "test";

//هاي الطريقة التقليدية لنشوف الثانية
mydiv.className += ' test';

btn1.onclick = function () {
	"use strict";
	
	mydiv.classList.add('post');
	//وبنقدر نضيف اكثر من واحد
//	mydiv.classList.add('one', "tow", "three");
};

btn2.onclick = function () {
	"use strict";
	
	mydiv.classList.remove('post');
	//وبنقدر نحذف اكثر من واحد
//	mydiv.classList.remove('one', "tow", "three");
};



btn3.onclick = function () {
	"use strict";
	
	//لقاها موجودة شالها والعكس عمل
	mydiv.classList.toggle('msg');

};


// toggle طيب في شغلة حلوة بقدر اساويها بال


btn4.onclick = function () {
	"use strict";
	
	//visibility بطل مفعول ال class لما شلنا ال
	mydiv2.classList.toggle('tow');

};






