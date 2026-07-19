/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */



/*
كيف بدنا نجيب قائمة الكلاسات في عنصر معين

*/

var div1 = document.getElementById('id-div'),
	div2 = document.getElementById('msg');


//جابلي كل الكلاسات تبعت العنصر
div2.innerHTML = div1.classList;
console.log(div1.classList);


div2.innerHTML = div1.classList.length;


// كلاسو كذا غيرلي مثلن لونو او حجمو...الخ div هاي الخاصية بتفيدني اذا في
//هاي الخاصية true | false

if (div1.classList.contains('show')) {
	
	console.log('yes');

}

/*
item
items تسمى elemtnt الموجودة جو ال class ال 
 يبدأ من صفر index بتتعامل معاي معاملة ال items ال
*/

console.log(div1.classList[1]);

//OR
console.log(div1.classList.item(0)); //msg
console.log(div1.classList.item(1)); //show



console.log(div1.classList.length);
console.log(div1.classList);
console.log(div1.classList[1]);
console.log(div1.classList.item(0));
console.log(div1.classList.contains('show'));
