function User(id,name,surname,email,phone)
{
    this.id = id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let array=[
    new User(1,`Abba`, `Trial`, `abba@gmail.com`,12345),
    new User(2,`Lary`, `Troy`, `lary@gmail.com`,123456),
    new User(3,`John`, `Krak`, `john@gmail.com`,1234567),
    new User(4,`Alan`, `Lin`, `alan@gmail.com`,12345678),
    new User(5,`Ray`, `Rean`, `ray@gmail.com`,123456789),
    new User(6,`Alex`, `Tulo`, `alex@gmail.com`,123450),
    new User(7,`Alexandra`, `Wefi`, `alexandra@gmail.com`,1234501),
    new User(8,`Gray`, `Hiker`, `gray@gmail.com`,12345123),
    new User(9,`Lui`, `Luy`, `lui@gmail.com`,12345012),
    new User(10,`Mark`, `Quiet`, `mark@gmail.com`,12345345),
];
console.log(array);
let filteredArray=array.filter(item=>item.id%2===0);
console.log(filteredArray);