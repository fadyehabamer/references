/*global document*/
/*global console*/
/*eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */



var frm = document.forms[0],
    txt = document.forms[0].txt,
    btn = document.forms[0].sub,
    msg = document.querySelector('div');

txt.onfocus = function () {
    "use strict";

    msg.textContent = "please insert name";

};

txt.onblur = function () {
    "use strict";
    if (txt.value.length > 6) {
        msg.textContent = "please insert word low";

    } else {

        msg.textContent = "";
    }
};

//واذا مازبط احد الشروط regular validation هاي بنحط هون
//submit بنجمد شغل ال
//preventDefault الحلو بالموضوع قيمة الباراميتر الي شغلت ال
//event في حدا بحكي انو يمكن تكون عائدة على ال
frm.onsubmit = function (w) {
    "use strict";

    if (txt.value === '') {

        w.preventDefault();
//        event.preventDefault();

    } else {
        msg.textContent = "hey";
        
        w.preventDefault();
//        event.preventDefault();
    }
};