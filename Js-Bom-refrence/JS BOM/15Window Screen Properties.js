/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */



//بتجيبلي معلومات عن الشاشة تبعت الشخص الداخل على موقعي مثل الطول والعرض Screen ال
//والبيكسل وعمق الألوان والملعلومات تبعت كرت الشاشة وبعتمد عليها بشغلي لو عمق الألوان كذا
//احطله شغلة معينة 


/*
الخواص

screen.width
screen.height

taskbar زي ال enterface الطول المتاح في الشاشة الان الطول الموجود في الشاشاة من غير ال
screen  ما بنحسبش من ضمن ال 
screen.availHeight
screen.availWidth

screen.colorDepth || screen.pixelDepth
*/

console.log("the screen width is:" + screen.width);
console.log("the screen height is:" + screen.height);
console.log("the screen availwidth is:" + screen.availWidth);
console.log("the screen availheight is:" + screen.availHeight);
console.log("the screen color Depth is:" + screen.colorDepth);


/*
الشاشة resolution هون
the screen width is:1024
the screen height is:768

the screen availwidth is:1024

taskbar هون الطول المتاح من غير ال
the screen availheight is:728

the screen color Depth is:24

*/




