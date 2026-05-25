let R=+prompt("Enter the Radius of Circle: ");
if(R>0) {
    let square_circle = r => r*r*Math.PI;
    console.log(square_circle(R));
}
else
    throw new Error('Wrong Radius of Circle');