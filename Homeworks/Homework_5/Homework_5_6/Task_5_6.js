let t=prompt("Enter a text: ");
let list = text => (document.write(`<ul>`), document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`), document.write(`</ul>`));
console.log(list(t));