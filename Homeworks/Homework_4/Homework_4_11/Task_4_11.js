function swap(array, index_1, index_2)
{
    let number = array[index_1];
    array[index_1] = array[index_2];
    array[index_2] = number;
    return array;
}
let arr=[1,2,3,4,5,6,7,8,9,10];
let i_1=+prompt("Enter the First index: " );
let i_2=+prompt("Enter the Second index: " );
console.log(swap(arr, i_1, i_2));