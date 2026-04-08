let x=+prompt(`Enter first number:`);
let y=+prompt(`Enter second number:`);
if(x>y)
{
    console.log(`Max number: x = `+x);
} else if(y<x)
{
    console.log(`Max number: y = `+y);
} else if(y===x)
{
    console.log(`It's the same numbers: x = y = `+x);
} else{
    console.log(`ERROR! Enter the correct numbers.`);
}