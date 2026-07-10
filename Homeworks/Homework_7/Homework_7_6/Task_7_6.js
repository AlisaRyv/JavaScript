function Car(mode,producer,year,maxSpeed,volumeEngine)
{
    this.mode=mode;
    this.producer=producer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.volumeEngine=volumeEngine;

    this.drive=function ()
    {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info=function ()
    {
        for (const key in this)
        {
            console.log(key,` - `,this[key]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed)
    {
        if(newSpeed > 0)
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue)
    {
        if(newValue > 1815)
        this.year = newValue;
    };
    this.addDriver = function (driver)
    {
        if(driver)
        this.driver = driver;
    };
}
let auto=new Car(`X17`,`Range Rover`,2024, 200, 189);
console.log(auto);
auto.drive();
auto.increaseMaxSpeed(90);
auto.changeYear(1990);
auto.addDriver({id:1,name:`Valera`,age:32});
auto.info();