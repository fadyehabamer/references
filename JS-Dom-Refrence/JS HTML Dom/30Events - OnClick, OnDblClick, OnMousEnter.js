/*global document*/
/*global console*/
/*eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


var msg = document.querySelector('div'),
    msgv = msg.textContent;

window.oncontextmenu = function (z) {
    'use strict';
    
    z.preventDefault();
};

/*
onmouseover / onmouseout
onmouseenter / onmouseleave

الفرق بينهم انو الأولانيات بس احط المؤشر سواء على الأب أو الأبناء
بيستجيب معي أما الثانيات بس احط على الأب بستجيب من غير الأبناء
يعني بس ع العنصر المحدد
*/

//msg.onmouseenter = function () {
//    'use strict';
//    
//    msg.style.color = 'red';
//};
//
//
//msg.onmouseleave = function () {
//    'use strict';
//    
//    Default
//    msg.style.color = '';
//};



msg.onmouseover = function () {
    'use strict';
    
    msg.style.color = 'red';
};


msg.onmouseout = function () {
    'use strict';
    
    msg.style.color = 'blue';
};









