"use strict";
const list = document.querySelector("#list");
const btnAddElem = document.querySelector("#button");
let i = 0;
btnAddElem.addEventListener("click", (ev) => {
    const newChild = document.createElement("li");
    newChild.textContent = i.toString();
    list.appendChild(newChild);
    i++;
});
