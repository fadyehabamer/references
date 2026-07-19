/*
  Defining Object
  [1] Object Literal
*/

let user = {
  // Properties
  firstName: "FADY",
  lastName: "AMER",
  age: 21,
  addresses: {
    eg: "Giza",
    usa: "California",
    ksa: "Riyadh",

    getMainAddress: function () {
      return `Main Address Is In Egypt In City ${user.addresses.eg}`;
    },
  },

  // Methods
  // getFullName: function () {
  //   return `Full Name: ${user.firstName} ${user.lastName}`;
  // },
  getFullName: () => `Full Name: ${user.firstName} ${user.lastName}`,

  getAgeInDays: () => "Your Age In Days Is  " + user.age*356,
};

// Accessing Object Properties
console.log(user.firstName); // Dot Notation
console.log(user["firstName"]); // Bracket Notation

console.log(typeof user.firstName); // String

console.log(user.addresses.eg);
console.log(user["addresses"]["ksa"]);

// Accessing Object Methods
console.log(typeof user.getFullName); // Function
console.log(user.getFullName());
console.log(user.getAgeInDays());

console.log(user.addresses.getMainAddress());