function Client(id,name,surname,email,phone, ...products)
{
    this.id = id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order=products;
}
function Product(title,price)
{
    this.title=title;
    this.price=price;
}
let array=[
    new Client(10,`Abba`, `Trial`, `abba@gmail.com`,12345,new Product(`watch`,2500), new Product(`tea`,100)),
    new Client(23,`Lary`, `Troy`, `lary@gmail.com`,123456,new Product(`watch`,2500)),
    new Client(3,`John`, `Krak`, `john@gmail.com`,1234567,new Product(`watch`,2500), new Product(`tea`,100),new Product(`meat`,1500)),
    new Client(41,`Alan`, `Lin`, `alan@gmail.com`,12345678,new Product(`watch`,2500), new Product(`tea`,100),new Product(`meat`,1500)),
    new Client(5,`Ray`, `Rean`, `ray@gmail.com`,123456789,new Product(`watch`,2500), new Product(`tea`,100)),
    new Client(6,`Alex`, `Tulo`, `alex@gmail.com`,123450,new Product(`watch`,2500)),
    new Client(72,`Alexandra`, `Wefi`, `alexandra@gmail.com`,1234501,new Product(`watch`,2500), new Product(`tea`,100)),
    new Client(18,`Gray`, `Hiker`, `gray@gmail.com`,12345123,new Product(`watch`,2500), new Product(`tea`,100),new Product(`meat`,1500)),
    new Client(9,`Lui`, `Luy`, `lui@gmail.com`,12345012,new Product(`watch`,2500), new Product(`tea`,100)),
    new Client(100,`Mark`, `Quiet`, `mark@gmail.com`,12345345,new Product(`watch`,2500)),
];
console.log(array);

let filterArray=array.sort((a,b)=>a.order.length-b.order.length);
console.log(filterArray);
