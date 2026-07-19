/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
DOM : Document Object Model

Document: الصفحة تبعتي تبعت الكروم web document يعني ال

Object : يعني كائن وهي الكائنات الموجودة في الصفحة مثل ال
الأوسمة تعتبر كائنات head,body,div,html...

Model: طراز الكائنات

whats is DOM?
........
programming interface for html, xml
html, xml هو واجهة برمجية تخص ال
بقدملي واجهة برمجة الجافا سكريبت بتقدر تدخل تعمل dom يعني ال 
للعناصر الي فيها modify و access  

object? طيب شو قصة
تبعت الصفحة كترتيب شجري structure برجعلي العناصر ال dom ال 
oop وهاد الترتيب الشجري بنظام ال

والطريقة الثالثة source صفحة الكروم بشوفها عادي وبشوفها كمان من ال
اقدر object بترجعلي الصفحة ك object الصفحة تيجيني عن طريق ال
اتعامل معاها 


شو امكانيات الجافا سكريبت بصفحتي؟
الموجودة في الصفحة elements من ال element الجافا بتقدر تعدلك
element السمات تبعت ال attribute بتقدر تعدلك ال 
وتقدر كمان تحذف ال contant وبتقدر تعدل ال
element, attribute, content
بتقدر كمان content أو attribute بتقدر كمان تضيف عنصر او 
css تعدل الشغلات الي بعملها في ال
event تعدل ال event لل react تعمل events ممكن كمان تتعامل مع ال
onclick, onload... مثل

dom بتتحكم في ال fully controll يعني الجافا سكريبت من الآخر

relationship التريتيب الشجري موجود ع تلفوني عني كل العناصر في بينها
كلهم مربوطين ببعض 
*/

// dom هاد مثل لتوضيح ال

var myP = document.createElement('p'),
	
	myPText = document.createTextNode("This paragraph Created With Javascript");

//myPText بدي احط طفل جواه الي هو
myP.appendChild(myPText);

//موقعه من الإعراب في الصفخة رح حط التالي p طيب وين مكان ال
// body جوا ال appendChild برضو اعملت
document.body.appendChild(myP);

//js إلي تكريت عن طريق ال p رح نلاقي كود source code لما نفتح ال







