/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */



/*
 history لأأنو فش back & forward جديدة بكون مش مفعل ال tab لما نفتح
 back & forwards الصفحات بمشي history لما ادخل كذا صفحة بيتخزن في ال
 بكون موجود الصفحات
*/

// history بجيبلي عدد اللينكات في ال
history.length

//هي بتمشي لقدام
history.forward();

//هي بترجع لورا
history.back();


// او رقم رقم ايجابي او رقم سلبيurl بتقبل منك go ال

//رجعت صفحتين لورا
history.go(-2);

//قدمت صفحتين لقدام
history.go(2);

// مباشرةً Browser الطريقة الي بستخدم فيها جافا سكريبت في ال
//الأوامر بقدر اتحكي فيها من هون console يعني بددل ما احط بال

//<a href="javascript:history.back()">back</a>

// واحط بعدين الأمر الي بدي اياه javascript: التالي url طبعا هي نفسها بس اضع بال