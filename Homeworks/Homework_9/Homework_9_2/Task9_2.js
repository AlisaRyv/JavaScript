let arr = [`Main`,`Products`,`About us`,`Contacts`];

let ul = document.createElement('ul');
for (const element of arr) {
    let li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
}
document.body.appendChild(ul);