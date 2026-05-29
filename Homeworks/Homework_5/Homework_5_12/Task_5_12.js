let arr=[-13, 45, 0, -2, 87];
let index1=+prompt("Enter a first index");
let index2=+prompt("Enter a second index");
let num=0;
let swap = (arr, index1, index2) => (num = arr[index1], arr[index1] = arr[index2], arr[index2] = num);
if((index1>=0&&index1<arr.length)&&(index2>=0&&index2<arr.length))
{
    swap(arr,index1,index2);
    console.log(arr);
}
else
    console.log(`ERROR!`)