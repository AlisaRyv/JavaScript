let arr = [100,250,50,168,120,345,188];
let count=0;
let average;
for(let i=0; i<arr.length; i++)
{
    count+=arr[i];
}
average=count/arr.length;
console.log(average);