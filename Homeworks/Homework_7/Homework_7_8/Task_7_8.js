class Cinderella
{
    constructor(name,age,footSize)
    {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }
}
class Prince
{
    constructor(name,age, shooseSize)
    {
        this.name = name;
        this.age=age;
        this.shooseSize=shooseSize;
    }
}
let arrOfCinderells = [
    new Cinderella("Anna", 23,37.5),
    new Cinderella("Barriba", 25,35),
    new Cinderella("British", 37,39),
    new Cinderella("Olga", 21,36),
    new Cinderella("Alexandra", 42,40),
    new Cinderella("Vixen", 25,42),
    new Cinderella("Alla", 23,33),
    new Cinderella("Britni", 67,37),
    new Cinderella("Sofia", 31,41),
    new Cinderella("Bri", 56,44),
];
let prince = new Prince(`Alex`,32, 37);

// for (const cinderella of arrOfCinderells)
// {
//     if(cinderella.footSize === prince.shooseSize)
//     {
//        prince.wife=cinderella;
//     }
// }

prince.wife=arrOfCinderells.find(value => value.footSize===prince.shooseSize);

console.log(prince);