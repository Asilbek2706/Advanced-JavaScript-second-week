const element = document.getElementById("element");
console.log(element.parentNode);

const parent = document.getElementById("parent");
console.log(parent.childNodes);

const grandparent = document.getElementById("grandparent");
console.log(grandparent.firstChild);
console.log(grandparent.lastChild);

const parents = document.getElementById("parent");
console.log(parents.previousSibling);
console.log(parents.nextSibling);


//Closest method
const closestDiv = document.getElementById("element").closest('div');
console.log(closestDiv);