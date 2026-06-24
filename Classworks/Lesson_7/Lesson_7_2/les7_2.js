function User(name,age)
{
    this.name = name;
    this.age = age;
}

// let user1 = new User(`ivan`,23);
// user1.greeting=function()
// {
//     console.log(`hello`)
// }
// console.log(user1);
// user1.greeting();
// let user2 = new User(`iva`,3);
// console.log(user2);

// User.prototype.greeting=function ()
// {
//     return `Hello my name is ${this.name} !`;
// }
// let user = new User("John",32);
// console.log(user);

// let user1 = new User(`ivan`,23);
//
// user1.greeting=function()
// {
//     return (`hello ${this.name}`);
// }
// console.log(user1.greeting());
// let user2 = new User(`iva`,3);
// console.log(user1.greeting.apply(user2));

let user = new User('vasya', 31);
user.greeting = function (msg) {
    return `${msg} my name is ${this.name} `;
};
let user2 = new User('petya', 123123);
let greetingCopy = user.greeting.bind(user2);
console.log(greetingCopy('quwteyqwfe'));
