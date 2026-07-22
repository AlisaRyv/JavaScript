function User (name, age, status, wife)
{
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = wife;
}
let user1 = new User(`salkad`,23,true,{name:`askd`,age:32,status:false});
console.log(user1);