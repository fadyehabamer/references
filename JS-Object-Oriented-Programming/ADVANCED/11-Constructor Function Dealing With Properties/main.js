function User(fName, lName, age, country) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.country = country;
    this.fullName = function () {
        return `Full Name: ${this.fName} ${this.lName}`;
    };
    this.ageInDays = function () {
        return `Age In Days: ${this.age * 365}`;
    };
}
// User.country = "Egypt"; Wrong

let user1 = new User("Fady", "Amer", 21, "Egypt");
let user2 = new User("AMR", "Ali", 22, "USA");

console.log(user1);
console.log(`Full Name: ${user1.fName} ${user1.lName}`);
console.log(user1.fullName());
console.log(user1.ageInDays());
console.log(user2);
console.log(user2.country);
console.log(user2.ageInDays());