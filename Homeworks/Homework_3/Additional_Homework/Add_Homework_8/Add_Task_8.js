let array=[];

// for (let i = 0; i < 50; i++)
// {
//     array.push(i*2);
// }

// for (let i = 0; i < 50; i++)
// {
//     array.push(i * 2 - 1);
// }

// for (let i = 0; i < 20; i++)
// {
//     array.push(Math.floor(Math.random() * 100));
// }

for (let i = 0; i < 20; i++)
{
    array.push(Math.floor(Math.random() * 724)+8);
}
console.log(array);

// for (let i = 2; i < array.length; i+=3)
// {
//     console.log(array[i]);
// }

// for (let i = 2; i < array.length; i+=3)
// {
//     if(array[i]%2===0)
//     console.log(array[i]);
// }

// let new_array=[];
// for (let i = 2; i < array.length; i+=3)
// {
//     if(array[i]%2===0)
//     {
//         console.log(array[i]);
//         new_array.push(array[i]);
//     }
// }
// console.log(new_array);

for (let i = 0; i < array.length; i++)
{
    if(array[i+1]%2===0)
        console.log(array[i]);
}
