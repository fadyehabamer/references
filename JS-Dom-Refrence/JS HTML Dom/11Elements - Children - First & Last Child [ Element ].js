/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


var msg = document.getElementById('main');

//comment جابلي اول عنصر شو مايكون بس المهم جاب اول شيء طلع
console.log(msg.firstChild);

//h1 element node هون جابلي اول
console.log(msg.firstElementChild);

//طبعا هون جاب كل الأطفال
console.log(msg.childNodes);

//نفس فوق comment هون جاب ال
console.log(msg.childNodes[0]);

//اذا بدي اشيل السطر الفارغ p سطر فارغ من تبعات ال text هون جابلي
// p ملزق بال </div> بخلي وسم ال
console.log(msg.lastChild);

//element node جابلي اخر عنصر من نوع
console.log(msg.lastElementChild);






