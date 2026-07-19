/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */



var d = document.createElement('div'),
    td = document.createTextNode('new div'),
    cd = document.createComment('note div'),
    ed = document.createComment('note div');

document.body.appendChild(d);

d.appendChild(cd);
d.appendChild(td);
d.appendChild(ed);


//وبعدين id بال select واعملها id فاضية واعطيها ul مطلوب مني اعمل
// 20list عشان اكريت loop اعمل 
//سطر واحد بس loop جواها بكود واحد بس ال


var br = document.createElement('br'),
    ul = document.createElement('ul');

document.body.appendChild(br);
document.body.appendChild(ul);

function dd() {
    "use strict";

    var t,
        li,
        tli;
    for (t = 0; t < 20; t++) {

        li = document.createElement('li');
        ul.appendChild(li);
        
        tli = document.createTextNode(t);
        li.appendChild(tli);
        
        console.log(ul.childNodes.length);
        


    }
}


dd();