"use strict";
// Exercice 1
const btnImg = document.querySelector("#button");
const img = document.querySelector("#myImg");
btnImg.addEventListener("click", (ev) => {
    img.style.visibility = img.style.visibility === "visible" ? "hidden" : "visible";
});
