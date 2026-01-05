// DOM styling
const button = document.getElementById("button");
// button.style.backgroundColor = "black";
// button.style.color = "white";
// button.style.padding = "20px";

button.style.setProperty('background-color', '#1e1e1e')
button.style.setProperty('color', '#fff');
button.style.setProperty('padding', '14px')

// Attributes
const image = document.getElementById("image");

const source = image.getAttribute('src');
console.log(source);

image.setAttribute('alt', 'A sample attribute');
const alternativeText = image.getAttribute('alt');
console.log(alternativeText);

image.removeAttribute('alt');
const altText = image.getAttribute('alt');
console.log(altText);

const type = button.dataset.type;
console.log(type);

button.dataset.parent = '12345';
const parent = button.dataset.parent;
console.log(parent);

delete button.dataset.parent;
const p = button.dataset.parent;
console.log(p);

// Classes
const btn = document.getElementById("btn");
btn.classList.add('btn-success');
btn.classList.remove('btn-danger');
btn.classList.toggle('active')
const hasClass = btn.classList.contains('btn-success');
console.log(hasClass);
