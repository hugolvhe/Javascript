const list: HTMLDataListElement|null = document.querySelector("#list");
const btnAddElem: HTMLButtonElement|null = document.querySelector("#button");
let i = 0;

btnAddElem!.addEventListener("click", (ev: Event) => {
    const newChild:HTMLElement = document.createElement("li");
    newChild.textContent = i.toString();
    list!.appendChild(newChild);
    i++;
});