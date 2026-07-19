/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
تبع العناصر شو الفايدة الفايدة اني اقارنو مثلا بمحتوى content بدي اجيب ال
واحط شروط معينة بالجملة if معين بجملة
 
يعني لاتحاول تشتغل فيهم ابداا
innerText  // Not Standerd
outerText  // Not Standerd

طيب بشو اشتغل؟

innerHTML : الداخلي html يعني محتوى ال 
outerHTML
textContent : هاي صح اشتغل فيها
*/


var mydiv = document.getElementById("show1");
var mydiv2 = document.getElementById("show2");

console.log(mydiv.innerHTML);  //Get
console.log(mydiv.textContent); //Get

/*

laith kanan <span data-brackets-id="1617">show1</span>

laith kanan show1 

 textContent كما نلاحظ جابلي النص في ال
 جابلي اياها بكل المحتويات والتاغات الي جواها innerHTML  اما ال  
*/


mydiv.innerHTML = "new text <span>text</span>"; //Set
console.log(mydiv.innerHTML);
//new text <span>text</span>

console.log(mydiv.textContent); //Set
//new text text

//طيب لو قلنا

mydiv.textContent = "husam kanan <span>Brother</span>"; //Set
console.log(mydiv.textContent);

// &lt;span&gt;Brother&lt;/span&gt; نلاحظ جابلي النص كأنو كاتب 
// html intity بطريقة ال
//husam kanan <span>Brother</span>


/*
textContent وال html بيتعامل مع ال innerHTML يعني بإختصار شديد ال 
لأأنو textContent الأفضل الي اشتغل بال text بيتعامل مع ال
 html انا فتحت بوابة اختراقات ممكن الشخص يكتب كود innerHTML لما اكتب عن طريق ال
 ويخترق صفحتي غير مرغوب في
أسرع بتتعامل بس مع نص  textContent ال 
 
*/


console.log(mydiv2.innerHTML);

//من الشغلات الغريبة انو طلعلي الكيان تبعها مش مثل ما هي معروضة بالمتصفح
///&lt;&amp;&gt;


console.log(mydiv2.textContent);

//هون طلعا كما هي معروضة في المتصفح
// <&>

/*


msg.innerHTML = "my name is <span>laith</span>";

console.log(msg.innerHTML);
console.log(msg.textContent);

msg2.textContent = "my name is <span>laith</span>";

console.log(msg2.textContent);
console.log(msg2.innerHTML);



CONSOLE
my name is <span>laith</span>
100test.js:18 my name is laith
100test.js:22 my name is <span>laith</span>
100test.js:23 my name is &lt;span&gt;laith&lt;/span&gt;

PAGE

my name is laith
my name is <span>laith</span>

*/




















