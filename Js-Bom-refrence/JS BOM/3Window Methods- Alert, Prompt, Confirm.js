/*global document*/
/*global confirm*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
الي هم Window من ال three mehods رح نتكلم عن اول
Alert, Prompt, Confirm

-Alert: أفضل tools يعني تنبيه ومش من الشغلات المحبب استخدامها في
عليه فقط focus لأنو بجمد الصفحة وبعمل

-Confirm: boolean value(T\F) بيتعامل مع ال
OK = True / Cancel = False
بستخدمها لما بدي احذف شغلة او في شغلة فيها خطورة اذا حذفها
وبحطها للتأكد من او مصمم على حذفها

-Prompt: يعني حدا يسألن سؤال وانا اجاوب
prompt(text, default text)
text: confirm or alert النص الي بيطلعلي مثل ال
default text : الجواب الي انا حاطه بيقد يمسحه ويحط غيره
*/

// \n: بتعمل سطر جديد
//alert("laith\nblack");

//confirm('are you shure delete this person?');

/*
بما معناه بدو اياني احطها هيك Error أعطى confirm طبعا ال
global confirm
مثل الشغلات الماضية لكن اذا حطيت هيك
window.confirm('are you shure delete this person?');
error مابطلع window حط قبلهم console رح يروح الخطأ حتى مع ال

console or confirm طيب ليش من الأساس بطلع خطأ لأنو مابعرف ال
وبالتالي window هيك تعرفت انها لل window تبعت مين لما اجي احط
بروح الخطأ
*/

var ask = confirm('are you shure go to google?');

if (ask === true) {

    window.location.href = "http://www.google.jo/";

} else {

    console.log("your click cancel");
}

//null برجعلي قيمة فاضية cancel لوحطيت قيمة برجعلي اياها لو كبست
window.prompt("whats your name?", "example:laith");



