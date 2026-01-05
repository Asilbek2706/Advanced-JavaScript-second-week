// Event Propagation

// const grandParent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// Bubbling
// document.body.addEventListener("click", () => {
//     alert("Body clicked");
// })
//
// grandParent.addEventListener("click", function (event) {
//     alert("Grand parent clicked");
// });
//
// parent.addEventListener("click", function (event) {
//     alert("Parent clicked");
// });
// child.addEventListener("click", function (event) {
//     alert("Children clicked");
// })


const grandParent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
//Capturing

grandParent.addEventListener("click", function (event) {
    alert("Grand parent clicked");
}, true);

parent.addEventListener("click", function (event) {
    alert("Parent clicked");
}, true);
child.addEventListener("click", function (event) {
    event.stopPropagation()
    alert("Children clicked");
}, true)