let arr = [-2, 34, 5, 79, 0, 13, 26, 89, 67, 200];
let new_arr=[];
// Вывод только четных чисел
// for(let i = 0; i < arr.length; i++)
// {
//     if(arr[i]%2===0)
//         console.log(arr[i]);
// }

// Копирование массива в другой массив
for(let i=0;i<arr.length;i++)
{
    new_arr.push(arr[i]);
}
console.log(new_arr);