let user = new Object();

user.firstName = "FADY";
user.lastName = "AMER";
user["age"] = 21;

user.getFullName = function () {
  return `Full Name Is ${user.firstName} ${user.lastName}`;
};

console.log(user);
console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.age);
console.log(user.getFullName());