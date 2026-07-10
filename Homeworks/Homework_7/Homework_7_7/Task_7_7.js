class Car
{
    constructor(mode,producer,year,maxSpeed,volumeEngine)
    {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine;
    };
    drive()
    {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info()
    {
        for (const key in this)
        {
            console.log(key,` - `,this[key]);
        }
    };
    increaseMaxSpeed(newSpeed)
    {
    if(newSpeed > 0)
        this.maxSpeed += newSpeed;
    };

    changeYear(newValue) {
        if (newValue > 1815)
            this.year = newValue;
    };

    addDriver(driver) {
        if (driver)
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