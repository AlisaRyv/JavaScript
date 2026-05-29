let arr=[`a`, 23, 90, true, `brak`, -35, false, 47, `b`, 5];
let list=arr=>(document.write(`<ul>`),arr.map(item=>document.write(`<li>${item}</li>`)),   document.write(`</ul>`));
list(arr);