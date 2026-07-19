/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */

/*
Change Element Attribute Value
بدي اغير القيمة الخاصة بالعنصر

Element.Attribut =  Direct Method

رح نشوفها attribute يعني في ميثود ثانية بغير فيها ال Direct Method معنى
بالدرس الجاي

*/


//index هون بجيب كل العناصر مثل ماحكينا قبل وانا بقلب بينهم عن طريق ال
//var mydiv = document.querySelectorAll('div');
//mydiv[0]

//خليتهن انا فاضيات هناك querySelector عن طريق div & class هون بدي أجيب ال
//index حطينا المتغير فورا من دون ارقام index هون ما في تعامل مع ال
//والمقصود بكون عنصر واحد ففط

var mydiv = document.querySelector('div');

//change id
mydiv.id = "div1";
mydiv.className = "post";

//id ملاحظة جربت العناصر الثانية هاي بس الي بتغير الكلاسات وال
var img = document.querySelector('img');

//الي انا فيه لانو السورس فاضي link index html لو نطبعت لوحدها هيك بعطيني
console.log(img.src);

//بنلاقي السورس صار مليان  element لما نطلع على ال
img.src = 'http://placehold.it/200/red';

//هون جاب السورس الجديد
console.log(img.src);

img.alt = "sorry";

//هون رح ينشئ هاد الوسم وينحطلو قيمة title هناك ما كتبت وسم ال

img.title = "blue pic"; //Set
console.log(img.title); //Get

/*
بكتب attribute value المهم من كل الدرس اني اعرف عشان اغير ال
Element.Attribut
*/


//بدي أنشء عنصر من لاشيء
//واجب














