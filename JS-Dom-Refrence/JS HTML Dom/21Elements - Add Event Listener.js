/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
Add Event Listener

add: اضافة
event : حدث
listener : مستمع

يعني انا بحط شغلة تستمع الي

بالعنصر الي انا اخترته event hangar بحط Add Event Listener ال
option موجودة بالعنصر وانا اجي احطها مرة ثانية عشان اعمل Event يمكن تكون ال
وانا بالصفحة on the fly ثاني, طيب شو الحكمة؟ ليش ما احطهاش بالأول لانو بتحصل 
تبع العنصر event ما بتأثر على ال Add Event Listener ميزة ال
مختلف option لكن ب event ممكن احط نفس ال event ممكن احط اكثر من
*/


var power = document.getElementById('power'),
    eat = document.getElementById('eat');

eat.onclick = function () {

    "use strict";

    document.getElementById('m1').style.display = 'none';
};

function make() {

    "use strict";

    document.getElementById('m2').style.display = 'none';
}

power.onclick = function () {

    "use strict";

    //تنكتب هيك بخليها برا عادي function طبعا مش شرط ال
    //    eat.addEventListener('click', function () {
    //        
    //        document.getElementById('m2').style.display = 'none';
    //    });

    //بتنحذف power بس اكبس make() لو ناديتها هيك
    //بدون أقواس function لازم ينحط اسم ال
    eat.addEventListener('click', make);
};


/*

function r() {

    "use strict";

    msg.style.color = "green";

}

    
btn.addEventListener('click', r);


btn.onclick = function () {
    "use strict";

    txt.value = "job #1";

};

*/




