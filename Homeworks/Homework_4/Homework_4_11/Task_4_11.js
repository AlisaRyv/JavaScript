function sum(array)
{
    let sum = 0;
    for (let j = 0; j < array.length; j++)
    {
        sum += array[j];
    }
    return sum;
}
let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(sum(arr));