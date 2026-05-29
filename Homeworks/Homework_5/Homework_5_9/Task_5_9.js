function list_of_users(users)
{
    document.write(`<ul>`);
    for (const user of users) {
        document.write(`<li>${user.id} ${user.name} ${user.age}</li>`);
    }
    document.write(`</ul>`);
}
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
list_of_users(arr);