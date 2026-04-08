let day=+prompt(`Введіть день (від 1 до 31):`);
if(day >= 1 && day <= 10)
{
    console.log(`1 декада`);
}
else if(day > 10 && day <= 20)
{
    console.log(`2 декада`);
}else if(day > 20 && day <= 31)
{
    console.log(`3 декада`);
} else
{
    console.log(`Помилка! Введено некоректний день.`);
}