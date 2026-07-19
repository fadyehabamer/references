/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
Next: التالي
Previous: السابق
sibling: الشقيق

*/

var main = document.getElementById('main');

console.log(main.childNodes[1].nextSibling);

//الي بعده element انا بدي اياه يتجاهل النصوص واجيب ال  

console.log(main.childNodes[1].nextElementSibling);

//هون للتذكير اني بقدر اغير واسوي كل اشي بالعنصر المهم مش هون المهم
// nextElementSibling اني اعرف كيف اوصل للعنصر
main.childNodes[1].nextElementSibling.textContent = "laith";


console.log(main.childNodes[3].previousSibling);
console.log(main.childNodes[3].previousElementSibling);




