//vars
// can not start with numbers
//can start with  _ , capitals , $
// var x = 10;
// document.getElementById("x").innerHTML=x;

// concatiation
// var x = "fady" + 10 + 4 ;            //fady104
// var x = 10 + 5 + "fady" + 10 + 4;      //15fady104
// var x = 10 + 5 + "fady" +  (10 + 4) ;     //15fady14
// var x = "<span style=\"color:red\">"+  "fady"  +"</span>";
// document.getElementById("x").innerHTML=x;

// Output
// var myname = "fady"
// alert("hello , MY name is" + myname)
// document.write("hello , MY name is " + myname)    //for testing
// document.getElementById("x").innerHTML="hello , MY name is " + myname
// console.log("hello , MY name is" + myname)

// operators
// var x = 10 , y = 5;
// document.write(x+y)
// document.write(x-y)
// document.write(x*y)
// document.write(x/y)
// document.write(x%y)
// document.write(x**y)
// document.write(++x + "<br>")    //increment & decrement
// document.write(--y)     //prefix and postfix

// if .... else
// var age = prompt("what is your age ? ");
// if (age < 18) {
//   document.getElementById("x").innerHTML =
//     "your age is " + age + " sorry you are not allowed here , young";
// } else if (age == 18) {
//   document.getElementById("x").innerHTML =
//     "your age is " + age + " you are allowed here , 18";
// } else if (age > 18) {
//   document.getElementById("x").innerHTML =
//     "your age is " + age + " you are allowed here , old";
// } else {
//   document.getElementById("x").innerHTML = "please , enter valid age ";
// }
//var x = 50 ;
// ( = ) ==> assignment operator   ....   var x = 50;
// ( == ) ==> comparison operator  ....    (x == 50) true   , (x=="50") true     ..... checks the value
// ( === ) ==> identical operator  ....    (x === 50) true   , (x === "50") False ..... checks the value and data type

// logical operators
// ( != ) not equal
// ( !== ) not identical
// ( && ) And
// ( || ) Or

//functions #1
// function sayhi(){
//         "use strict";
//         alert("hi from sayhi function")
// }
// var testing_func = sayhi();
// document.getElementById("x").innerHTML(testing_func)

//function #2 passing parameters
// function sayhi(name,middle,last){
//     "use strict";
//     return "hi , " +  "my name is " + name +middle +last;
// }
// document.getElementById("x").innerHTML=(sayhi("fady"," ehab"," amer"))

//function #3
// using dynamic parameters  ......  Console.ReadLine(); in c#
// function calc_age(age){
//     return  age*365;
// }
// document.getElementById("x").innerHTML=calc_age(prompt("what is your age ?"))

// function #4 self-invoke
// (function sayhi(){
//     document.getElementById("x").innerHTML=("say hi")
// })();

// function using input field
// function convertodollar(){
//     var dolar=document.getElementById("dolar").value;
//     var values =dolar*3.75;
//    document.getElementById("message").innerHTML= dolar + " (s) is worth  " + values ;
//    if (dolar == "") {
//     document.getElementById("message").innerHTML= "Field can not be empty";
//    }
//    else if(isNaN(dolar)){
//     document.getElementById("message").innerHTML= "Field accept only numbers"
//    }
//    else if(dolar<0 ){
//     document.getElementById("message").innerHTML= "Field accept only positive number"
//    }
//    else {
//     document.getElementById("message").innerHTML= dolar + " (s) is worth  " + values ;
//    }
// }

// Events

// // 1
// window.onload=function(){
//     document.getElementById("test").innerHTML="hello from onload java script"
// }
// // window.onclick=function(){
// //     document.getElementById("test").innerHTML="hello from onclick java script"
// // }
// window.ondblclick=function(){
//     document.getElementById("test").innerHTML="hello from  ondoubleclick java script"
// }

//     function changeme(){document.getElementById("test").innerHTML="hello from  onclick  java script button"}

// 2
// var input = document.getElementById("input");
// var result=document.getElementById("div");
// var mybutton= document.getElementById("button");

// // element.event=function
// mybutton.onclick = function (){
//     result.innerHTML = input.value * 3.75
// };
// input.onkeyup=function (){
//     result.innerHTML = input.value * 3.75;

// };

// 3
// var mydiv = document.getElementById("div")
// mouseenter mouseout
// mydiv.onmouseenter=function(){
//     mydiv.innerHTML = "you hovered me"
// }

//onchange
// var myinput =document.getElementById("input");
// var myselect = document.getElementById("currency")
// var mydiv = document.getElementById("div")

// myselect.onchange=function(){
//  mydiv.innerHTML="worth" + myinput.value*myselect.value;
// }

// arrays

//  construcyor way
// var friends = new Array();  // var friends = new Array("fady");
// friends[0]="fady";

//literal  way
// var friends=[];   var friends=["fady "]
//friends[0]="fady"
//console.log(friends[0]) // fady

// array checker...
// var arrs
// var arr= [];
// if (Array.isArray(arrs)){
//     console.log("this is array")
// }else{
//     console.log("not array")
// }

//array length
// var friends = ["a","b","c"]
// console.log(friends.length) //  --> 3
// friends.length= 1;
// console.log(friends) // --> "a"

//convert to string
// var friends = ["a","b","c"]
// friends=friends.toString(); // convert to string
// console.log(friends)

// var mydate =new Date();
// console.log(mydate);
// console.log(mydate.toString); // convert to string
// console.log(mydate.tolocalestring); // convert to your local settings for string

// var friends = ["a","b","c"]
//friends=friends.join();   // convert to string with "," as default separator
// friends=friends.join("%");   // convert to string with "&" as customizable separator
// console.log(friends);


// add elements 
// friends=new Array(10); // 10 elements , 9 index

// // loop (will be mentioned later)
// for (let index = 0; index < friends.length; index++) {
//     friends[index]=index+1;
// }

//add elements
//Active lines nom 190 to 196
// console.log(friends);
// friends[10]=11        //using index
// console.log(friends);
// friends.push(12)      // using method "push" to put at the end of an array   
// console.log(friends);
// friends.unshift(0);  // using method "unshift" to put at the begining of an array   
// console.log(friends);

//splice 
//syntax --> arrayname.splice( index ,number of items to be deleted , items to be added )
//Active lines nom 190 to 196
// friends.splice(0,0,-1) // -->[-1,0,1,2,3,4,5,6,7,8,9,10,11,12]
// console.log(friends);
// friends.splice(2,0,-2) // --> [0,1,-2,2,3,4,5,6,7,8,9,10,11,12]
// console.log(friends);

// removing items from array
//  1- using splice!!

// 2 - pop  --> removes last item in an array
//Active lines nom 190 to 196
// console.log(friends); // --> 1,2,3,4,5,6,7,8,9,10 
// console.log(friends.pop()); //-->10
// console.log(friends) // --> 1,2,3,4,5,6,7,8,9

// 3- using shift --> removes first element
//Active lines nom 190 to 196
// console.log(friends); // --> 1,2,3,4,5,6,7,8,9,10 
// friends.shift();
// console.log(friends); // --> 2,3,4,5,6,7,8,9,10 

// sorting and reverse
// console.log(friends); // --> 1,2,3,4,5,6,7,8,9,10 
// friends.sort(); // --> 1,2,3,4,5,6,7,8,9,10
// console.log(friends); // --> 1,10,2,3,4,5,6,7,8,9 
// friends.reverse(); 
// console.log(friends); // --> 9,8,7,6,5,4,3,2,10,1

// searching in an array
// 1- indexOf  --> to search from the begining of an array
// friends = ["ahmed","sara","aya","mohamed","ibrahim","sayed","fady","hossam"]
// // arrayname.indexOf("what are you searching for" , "starting index for searching" )
// friends.indexOf("fady");
// console.log(friends);
// console.log(friends.indexOf("fady"))  //--> will return index of "fady"
// console.log(friends[friends.indexOf("fady")])

// 2 - lastIndexOf  -->  to search from the end of an array
// friends = ["ahmed","sara","aya","mohamed","ibrahim","sayed","fady","hossam"]
// // arrayname.indexOf("what are you searching for" , "starting index for searching" )
// friends.lastIndexOf("fady");
// console.log(friends);
// console.log(friends.lastIndexOf("fady"))  //--> will return index of "fady"
// console.log(friends[friends.lastIndexOf("fady")])

// if you add searching point :
// at indexOf -->   friends.indexOf("fady" ,3); --> will return 6 --> it will search from index 3 to the end
// at lastIndexOf -->   friends.lastIndexOf("fady" ,3); --> will return -1  --> it will search from index 3 to the beginning

// both searching schemes searching start from 0

//string methods
// var mystring="I Love Javascript"         //   "\" to skip special characters
// var mystring="\"I Love Javascript\""    //  "I Love Javascript" 
// var mystring="\\I Love Javascript\\"   //   --> \I Love Javascript\
// console.log(mystring)

//Convert number to string
// var number=100;    //number
// var newnumber =number.toString(); 
// console.log(newnumber);   // 100
// console.log(typeof(newnumber)); // string

// searching in string

// using indexOf (searching element , start position of searching)
// var mystring="I Love Javascript" ;
// var myword=mystring.indexOf("Love"); 
// console.log(myword); // --> 2

// using lastIndexOf (searching element , start position of searching)
// var mystring="I Love Javascript and I Love Php";   // 32 charachter
// console.log(mystring.length);
// var myword=mystring.lastIndexOf("Love",32); //it will search backwardly (from the end to the beginning)
// console.log(myword); // --> 24

//using search ("searching element") // it will return the first word to be found
// var mystring="I Love Javascript and I Love Php";   // 32 charachter
// var myword=mystring.search("Love"); 
// console.log(myword); // --> 2
// var mystring2="Javascript and I Love Php";   // 32 charachter
// var myword2=mystring2.search("Love"); 
// console.log(myword2); // --> 17

// searching for charachters is case sensitive 
// to avoid (case sensitive) -->  ( /charchter/i )
// var word = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
// var search=word.search("k")   // Not found k samll
// console.log(search) // --> -1
// search=word.search(/k/i)
// console.log(search) // --> 10

// Loops
// 1 - for loop  --> syntax
// for ( initialization ; condition; final expression) {
//     statment to be excuted
// }

// var i;
// for(i=1;i<=10;i++)
// {
//     console.log(i);
// }

// friends = ["fady" , "ehab" , "amer" ,"kareem" , "ali" , "ahmed" ]
// var i ;
// for (i=0; i<friends.length ; i++){
//     console.log("my friend is " + friends[i])
// }

//advanced example on for loop
function createyears(start,end){
    var years;
    document.write("<select>")

    for(years=start ; years <=end  ; years++){
       document.write("<Option value=\""   +years+  "\">"+     years   +"</Option>")
    }
    document.write("</select>");
}
createyears(1900,2020);

// 2 - For / in --> to be used in object
// //syntax
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }

// var mycar= {
//     model : "BMW" ,
//     date  : "2020" ,
//     color :  "black",
//     price :  "100"
// }
// // model , date , color , price  -->  properties for my car
// var prop;
// for ( prop in mycar) {
//     if (mycar.hasOwnProperty(prop)) {
//         console.log(prop + " : " + mycar[prop]);
        
//     }
// }


