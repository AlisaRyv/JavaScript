let array = [`a`, `b`, `c`];
let word=``;

// for (let i = 0; i < array.length; i++) {
//     word+=array[i];
// }

// let i=0;
// while(i<array.length)
// {
//     word+=array[i];
//     i++
// }

for (const arrayElement of array)
{
    word+=arrayElement;
}
console.log(word);