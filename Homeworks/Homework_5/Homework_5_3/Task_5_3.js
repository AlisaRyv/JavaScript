function square_circle(r,h)
{
    return 2*r*r*Math.PI+h*perimeter_circle(r);
}
function perimeter_circle(r)
{
    return 2*r*Math.PI;
}
let R=+prompt("Введите Радиус Цилиндра: ");
let H=+prompt("Введите Высоту Цилиндра: ");
console.log(square_circle(R,H));