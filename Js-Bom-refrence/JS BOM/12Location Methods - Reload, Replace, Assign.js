/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
Assign : بتحولني على لينك معين

assign & replace :  history نفس الوظيفة بس في فرق بينهم يخص ال
*/


location.href = "https://www.youtube.com";


//هون رح يحولني ع موقع الزيرو
// history بتحولني على لينك وبتسيبلي اللينك الي كنت شغال عليه في ال assign ال
//ارجع يوتيوب  back بيفضل بتاريخ المتصفح ما بتشال يعني المفروض بس اعمل
//new tab والباك الثالثة يرجعني للصفة ال
//location.assign('http://www.google.jo');

//history للينك في ال replace بالضبط لكن بيعمل assign نفس ال
//يعن اللينك الي انا فيها الأن رح تنشال وينحط مكانها اللينك الجديدة الي رح احول عليها
// history هون مثلا انا بكون بصفحة معينة مثل جوجل وتحولت ع اللينك الجديد لما اشوف ال
// localhost جوجل مش موجود الباك بحولني ع ال
location.replace('https://egov.uscis.gov/casestatus/');


//للصفحة من الكاش تبع المتصفح الكاش الي متسجل كل صفحة بتحط ملفات في  reload بيعمل
// عشان تفتح منها بسرعة بدل ما كل مرة تجيب المحتوى من السيرفر browser ال
//مرات الكاش بيعمل مشاكل وبكون السيرفر في محتوى غير الكاشي الي عندي بالمتصفح فابضطر 
//للصفحة من الكاش  Reload بيعملي hard reload او fourth reload اعمل شغلة اسمها
//قوي Reload تبع السيرفر من السيرفر عموما مش من الكاش تبع المتصفح وقتها بكون ال
// fourth reload او ال hard reload طيب كيف بدي افعل ال
//T\F بيقبل forth get اسمها location.reload() في باراميتر واحد بيتمرر للفنكشن
//مش محتاج اكتبها  False(default value) من السيرفر وال reload بيعمل True
//من الكاش تبع المتصفح reload بتعمل
location.reload();









