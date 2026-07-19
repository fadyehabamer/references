
let myObj = {
    "One": 1,
    "Two!": 2
};

console.log(myObj.One);
// console.log(myObj."One"); // Syntax Error
// console.log(myObj.Two!); // Syntax Error

console.log(myObj["One"]); // 1
console.log(myObj["Two!"]); // 2

let myObj2 = {
    1: "One",
    2: "Two"
};

// console.log(myObj2.1); // Syntax Error

console.log(myObj2["1"]);
console.log(myObj2["2"]);

let myVariable = "name";

let myLastObj = {
    name: "FADY"
};

console.log(myLastObj.myVariable); // Undefined
//* You can access a variable like a property of an object with []notation
console.log(myLastObj[myVariable]); // FADY
console.log(myLastObj["name"]); // FADY