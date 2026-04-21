function list(array)
{
    document.write(`<ul>`);
    for (let element of array)
    {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}
let arr=[`a`, 23, 90, true, `brak`, -35, false, 47, `b`, 5];
list(arr);