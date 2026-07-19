/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */

var msg = document.getElementById('main');

//ماعد النصوص الحفرتلية بلا اوسمة element جابلي عدد ال
console.log(msg.childElementCount);

//هاي نفس الإشي بتجيب عدد العناصر
console.log(msg.children.length);

//object جبت الأطفال عن طريق ال
console.log(msg.children); // [h1, p]

//index تعاملت مع ال
console.log(msg.children[1]);

console.log(msg.children[1].textContent); //phargraph

console.log(msg.children[1].className); //phargraph

//textNode السطر الفاضي بحسبو elementNode + textNode هون بحسب ال
//بتترك سطر فاضي فوق وتحت هذول بنعدن كمان p ملاحظة هسا صح ال 
console.log(msg.childNodes.length);

// node هون بورجيني العناصر الخاصة بال
console.log(msg.childNodes);


/*

console.log(msg.childElementCount);
console.log(msg.children.length);

console.log(msg.children);
console.log(msg.children[2]);

msg.children[1].classNmae = "node";
console.log(msg.children[1].classNmae);

console.log(msg.childNodes.length);

console.log(msg.childNodes);

msg.childNodes[1].textContent = "laith kanan";
console.log(msg.childNodes[1].textContent);

*/





