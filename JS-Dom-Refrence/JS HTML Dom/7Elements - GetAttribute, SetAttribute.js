/*global document*/
/*global console*/
/* eslint no-console: 0*/
/*jslint plusplus: true */
/*global alert*/
/*jslint evil: true */


/*
getAttribute('Attribute Name')
SetAttribute('Attribute Name', Attribute Value)

getAttribute: الي بدي اياه Attribute بجيب قيمة ال

SetAttribute: والقيمة الي بدي احطها طيب لو ال attribute بطلب مني اسم ال
مش موجود عادي هو بينشئه وبضيف عليه القيمة ولو موجود بغير القيمة Attribute

HasAttribute, RemoveAttribute

HasAttribute: كذا؟ attribute هل هذا العنصر يملك اسم
RemoveAttribute : تبعي element معين من ال Attribute اشيل 


*/

var myimg = document.querySelector('img');

//اثنيناتهم بحضرو القيمة myimg.alt + myimg.getAttribute('alt')
//لكن في بينهم اختلافات بتنشرح بدروس قادمة

//myimg.alt;
//اعطاني اياه فاضي
console.log(myimg.alt);

// attribute جيبلي ال
myimg.getAttribute('alt');
//برضو اعطاني القيمة فاضية
console.log(myimg.getAttribute('img'));

// تبعت الصفحة الي انا فيها html هون جابلي صفحة ال
console.log(myimg.src);

//هون اغطاني قيمة فاضية
console.log(myimg.getAttribute('src'));

console.log(myimg.setAttribute('src', 'http://placehold.it/100/green'));


console.log(myimg.setAttribute('alt', 'sorry'));

//هون رح ينشئ وتنضاافلو قيمة html العنوان مش موجود بال
console.log(myimg.setAttribute('title', 'green'));


//هون جاب القيمة ماطلعت فاضية لانو امتلئت
console.log(myimg.getAttribute('title'));
//green

/*
HasAttribute: معين ولا لأ attribute بستخدمو في الشروط هل العنصر هاد فيو
 boolean(T F) والنتيجة بتكون
*/


if (myimg.hasAttribute('title')) {

	console.log("yes, it foundit");

} else {

	console.log("no, not found");
}

//لكن هيك منطقي وافضل and بقدر احط الشرطين بيناتهم اشارة
if (myimg.hasAttribute('title')) {

	if (myimg.title !== '') {

		myimg.setAttribute('title', 'phosphorous');
		console.log(myimg.getAttribute('title'));

	} else {
		
		//ماشالو طبعا لانو معبا من الجافا سكريبت
		myimg.removeAttribute('title');
		console.log(myimg.title);
	}

} else {

	console.log("no, not found");
}





