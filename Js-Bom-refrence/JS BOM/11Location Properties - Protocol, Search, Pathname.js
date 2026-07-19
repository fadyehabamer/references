/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
Protocol, Search, Pathname : get\set ثلاثتهم بعملو

البروتوكول يعني هي اتفاقية بيني وبين الكمبيوتر عشان نتفاهم مع بعض
Protocol: المسؤول عن نقل النصوص وهو اختصار ل http البروتوكول الي شغالين عليه
http: hypertext transfer protocol
https: hypertext transfer protocol secured
ومن اونواع البروتوكلات
http
https
file
mailto ارسل ايميل لحدا
ftp ارفع ملف على الويب
*/

console.log(location.protocol); //http:

//location.href = "https://www.google.jo";
console.log(location.protocol);

//file الصفحة الي انا فاتحها بقدر افتحها كمان كأنها file في بروتوكول ال
//open with chrome عادي من جهازي بروح ع مكانها وبفتحها كلك يمين و
// file:///E:/Html...
//بكتب console في ال
//location.prorocol// file:

// set بقدر اعمل البروتوكول

//طبعا هون رح يعطيني غلط ويقلي انو الموقع مش محمي بس المهم الفكرة اني بقدر اغير
//location.protocol = "https";
//console.log(location.protocol);

//وبرضو مش رح يفتح ftp وبقدر اغيرو لبروتوكول ال
//location.protocol = "ftp";
//console.log(location.protocol);

//location.protocol = "mailto";
//console.log(location.protocol);

// query String الي بيجي باللينك بعد علامة الإستفهام وبكون اسمو ال
//item وبقدر كمان اغيرها مثل اغير رقم ال 
console.log(location.search);

//بدون علامات  query string تبعي مفيش website الي بيجي بعد ال path هو ال
//اليساوي ي والقيم
location.pathname;


//الخلاصة
//لازم نحط شناتي لانهبر برا امر الطباعة
location.hostname; //localhost
location.pathname; //اللينك الي بعد الهوست لحتى قبل علامة الاستفهام
location.search; // من عند علامة الإستفهام للأخر

//هيك جبت الرابط كامل
location.hostname + location.pathname + location.search


