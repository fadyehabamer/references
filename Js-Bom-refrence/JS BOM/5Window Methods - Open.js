/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
window open: الصفحات المزعجة الي بتفتح الي عند تحميل شغلة 

ممكن اكتبهم وممكن لأ optional بتقبل اربع شغلات window ال
بكلتا الحالتين رح تشتغل
window(url, Name or Attribute, specification, History Replace)

url: اللينك الي بدي افتحها
specification: مواصفات الصفحة 
*/

var btn = document.querySelector('button');

btn.onclick = function () {
    "use strict";
    
    /*
    
   فاضية يعني صفحة فاضية blank بيفتحلي url لو ما كتبت ال
   window.open();
   
   مارح يطلع بالصفحة هاد الإسم ماحدا بشوفو غيري عشان اعملو name ال
   مرجع الي او بحط attribute : _blank(default), _self
   _blank يعني لو ما حطيت اشي هي اساسا بتكون
   
   بتكون خاصة specific مشوارها طويل في specification ال
   width, height لكل نوع متصفح هي عبارة عن خواص الصفحة مثل ال
    أظهرو ولا لأ menu_bar ال left, top وين افتح مكان الصفحة ال
    لأنو الجافا سكريبت بتعرف px طبعا فش داعي اكتب
    
   true لو عملتها replace > boolean value (t\f) ال  
   history list الي انا فيها في ال document لل replace بيعمل
   صح برجعني back لقدام بس هو لما اعمل history طبعا رح ينشرح ال
   history للصفحة الي قبلها وهكذا هاد هو ال 
   
   history دي في ال document لل replace هل بدك الصفحة الجديدة تعمل
   ولا لأ
   */
    
    
//   window.open("http://www.placehold.it", "imgcolor");
    window.open("http://www.placehold.it", "_blank", "width=300, height=400, left=100, top=100, menubar=no, status=yes", "true");
};









