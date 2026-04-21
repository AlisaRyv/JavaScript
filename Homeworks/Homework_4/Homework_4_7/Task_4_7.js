function list(text, number)
{
    document.write(`<ul>`);
    for (let i = 0; i < number; i++)
    {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
let t=prompt("Enter a text: ");
let n=+prompt("Enter a number: ");
list(t,n);