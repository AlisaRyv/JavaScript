let A=+prompt("Enter the Height of Rectangle: ");
let B=+prompt("Enter the Width of Rectangle: ");
if(A>0&&B>0) {
    const square = (a, b) => a * b;
    console.log(square(A, B));
}
else
    throw new Error('Wrong Height/Width of Rectangle');