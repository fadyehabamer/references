/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */



//عشان نشتغل عليه Selector بدنا نتعلم كيف نختار العناصر تبعتنا ال
/*
عشان اغير عنصر معين لازم اختارو رح نتعلم الطرق الي نختار فيها العناصر 
 html عشان اختار العناصر لازم نعمل عناصر في ال

1. document.getElementById();
هاي الطريقة شائعة اكثر لانو ما بتعمل مشاكل مع المتصفحات

2. document.getElementsByTagName();
 Element(s) هنا برجع كل العناصر
 رح نحتاج ننشء عدة عناصر لنفهم شغلها
 
 3. document.getElementsByClassName();
 
 4.document.querySelectorAll();
 
*/

var myDiv1 = document.getElementById('d1');

myDiv1.innerHTML = "Changed Text By Javascript";


//بالصفحة elements p بدي اطلع عدد ال
var myElement = document.getElementsByTagName('p');

console.log(myElement.length); //3


//طيب بدي أغير الكلام الي جوا
// كثيرة عناصر كثيرة objects مارح يتغير عشان رجعلي
myElement.innerHTML = "Changed Text By Javascript";

// index عشان اغير الفقرة كل وحدة الها رقم معين اله
myElement[0].innerHTML = "Changed p1";
myElement[1].innerHTML = "Changed p2";
myElement[2].innerHTML = "Changed p3";



//elements مكتوبة tag & class اما ال element مكتوبة id ليش ال
//لأنو الثنتين هذول بنفعن يتكررن بقدر اعمل اكثر من عنصر الو نفس الكلاس
// بنفعش يتكرر id بس ال


var myElement2 = document.getElementsByClassName('head');

//class مخلط مبلط المهم مشتركات بنفس ال div & h2 هنا ما بهتم بالأوسمة

myElement2[0].innerHTML = "change head1";
myElement2[1].innerHTML = "change head2";
myElement2[2].innerHTML = "change head3";

//بجيبلي كل العناصر الي بالصفحة querySelectorAll
//لازم نحط الدوت هون 
var myElement3 = document.querySelectorAll('.head');
myElement3[0].innerHTML = "change head1 agein";


var myElement4 = document.querySelectorAll('div.head');

//index كلهم وانا بختار عن طريق ال div هون بجيب ال 
var myElement4 = document.querySelectorAll('div');

//[2] 2div بناء على انو في قبلها
//index بنشوف كم واحد قبلها بالغسم هاد وبنحط ال class لو تنادت بإسم
myElement4[2].innerHTML = "change head div agein";


