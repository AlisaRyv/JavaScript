// class User
// {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greeting()
//     {
//         return `Hello my name is ${this.name}!`;
//     }
// }
//
// class Customer extends User{
//
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
// }
// let user1 = new User('petya', 123123);
// console.log(user1, user1.greeting());
function User(name, age) {
    this.name = name;
    this.age = age;
}


function Customer(name, age, password) {
    User.apply(this, arguments);
    this.password = password;
}

let customer = new Customer('vasya', 31, '1111');
console.log(customer);
