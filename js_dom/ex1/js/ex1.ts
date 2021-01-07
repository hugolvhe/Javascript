
// Exercice 1
const btnImg:HTMLInputElement|null = document.querySelector("#button");
const img:HTMLImageElement|null = document.querySelector("#myImg");

btnImg!.addEventListener("click",(ev:Event) => {
   img!.style.visibility = img!.style.visibility === "visible" ? "hidden" : "visible";
});


