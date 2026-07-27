let div = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.style.blockSize = '50px';
div.style.marginBottom = '50px';
div.style.backgroundColor = '#5c0202';
div.style.color = 'white';
div.style.fontSize = '22px';

document.body.appendChild(div);

let clone=div.cloneNode(true);
document.body.appendChild(clone);