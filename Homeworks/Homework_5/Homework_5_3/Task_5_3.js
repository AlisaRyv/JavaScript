let R=+prompt("Введите Радиус Цилиндра: ");
let H=+prompt("Введите Высоту Цилиндра: ");
if(R>0&&H>0) {
    let square_cilindre = (r,h) => (2*r*r*Math.PI+h*2*r*Math.PI);
    console.log(square_cilindre(R,H));
}
else
    throw new Error('Wrong Radius/Height of Cilindre');