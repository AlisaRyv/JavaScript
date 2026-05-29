let arr = [
    {id:1, name: `mouse`, age: 31},
    {id:2, name: `kroko`, age: 32},
    {id:3, name: `lion`, age: 33},
    {id:4, name: `deer`, age: 34},
    {id:5, name: `cat`, age: 35},
    {id:6, name: `dog`, age: 36},
    {id:7, name: `chinchilla`, age: 37},
    {id:8, name: `horse`, age: 38},
    {id:9, name: `click`, age: 39},
]
let list_of_users=arr=>(document.write(`<ul>`),arr.map(user=>document.write(`<li>${user.id} ${user.name} ${user.age}</li>`)),   document.write(`</ul>`));
list_of_users(arr);