let t=prompt("Enter a text: ");
let n=+prompt("Enter a number");
function cycle(txt, num)
{
    for(let i=0;i<num;i++)
    {
        document.write(`<li>${txt}</li>`);
    }
}
let list = (text,number) => (document.write(`<ul>`), cycle(text,number), document.write(`</ul>`));
console.log(list(t,n));