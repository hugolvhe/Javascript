"use strict";
//3.1
;
const userlist = [
    { id: 1, prenom: "Damien", age: 40, role: "utilisateur" },
    { id: 2, prenom: "Camille", age: 29, role: "administrateur" },
    { id: 3, prenom: "Marie", age: 35, role: "utilisateur" },
    { id: 4, prenom: "Roger", age: 60, role: "utilisateur" },
];
let localUserlist = localStorage.getItem("userList") === null ? userlist : JSON.parse(localStorage.getItem("userList"));
const divUserlist = document.querySelector("#userList");
// 3.1
/******************************************
 *  Insère les utilisateurs dans le DOM
 *  @param void
 * @return void
 * *************************************** */
function setUserList(userlist) {
    userlist.forEach((elem) => {
        const p = document.createElement("p");
        p.textContent = `ID: ${elem.id};Prenom: ${elem.prenom};Age: ${elem.age};Role: ${elem.role}`;
        divUserlist.appendChild(p);
    });
}
//3.2
/******************************************
 *  Colore chaque utilisateur dans le DOM suivant son role
 *  @param void
 *  @return void
 * *************************************** */
function setColorByRole() {
    const listPofUsers = divUserlist.querySelectorAll("p");
    let i = 0;
    listPofUsers.forEach((p) => {
        p.style.color = localUserlist[i].role === "administrateur" ? "red" : "blue";
        i++;
    });
}
//   3.3
/******************************************
 *  Ajoute des couleurs de fond au passage de la souris (entrée ert sortie)
 *  @param void
 *  @return void
 * *************************************** */
function addMouseEvent() {
    const listPofUsers = divUserlist === null || divUserlist === void 0 ? void 0 : divUserlist.querySelectorAll("p");
    listPofUsers.forEach((elem) => {
        elem.addEventListener("mouseenter", (evnt) => {
            elem.style.backgroundColor = "grey";
            elem.addEventListener("click", (evntChild) => {
                evntChild.stopImmediatePropagation();
                const domUserId = parseInt(elem.getAttribute("id"), 10);
                modifyUser(domUserId);
                setColorByRole();
            });
        });
        elem.addEventListener("mouseleave", (evnt) => {
            elem.style.backgroundColor = "white";
        });
    });
}
/******************************************
 *  Modifie un utilisateur dans le DOM et le localStorage
 *  @param void
 *  @return void
 * *************************************** */
function modifyUser(domUserId) {
    const user = {
        id: domUserId,
        prenom: `${document.querySelector("form > input[name='name']").value}`,
        age: `${document.querySelector("form > input[name='age']").value}`,
        role: `${document.querySelector("form > select[name='role']").value}`
    };
    localUserlist[domUserId - 1] = user;
    localStorage.setItem("userList", JSON.stringify(localUserlist));
    const p = document.querySelector(`div > p[id='${domUserId}'`);
    p.textContent = `ID: ${user.id};Prenom: ${user.prenom};Age:${user.age};Role: ${user.role}`;
}
//  3.4
/******************************************
 *  Crée un bouton
 * @param value: string|number
 *      Valeur du bouton
 * @param width: number
 *      Width du bouton
 * @param height: number
 *      Height du bouton
 * @return
 *      Le bouton crée
 * *************************************** */
function createButtonChild(value, width, height) {
    const btn = document.createElement("button");
    btn.textContent = value.toString();
    btn.style.height = `${height.toString()}px`;
    btn.style.width = `${width.toString()}px`;
    return btn;
}
/******************************************
 * Insert des elements dans le DOM
 * @param elements: array<HTMLElement>
 *      Tableau des elements a inserer
 * @param container : HTMLElement
 *      Containeur HTML pour inserer les elements
 * @return :void
 * *************************************** */
function myAppendChild(elements, container) {
    elements.forEach((element) => {
        container.appendChild(element);
    });
}
/******************************************
 * Ajoute le button dans le DOM
 * @return :void
 * *************************************** */
function addButtons() {
    const listPofUsers = divUserlist.querySelectorAll("p");
    let id = 1;
    listPofUsers.forEach((elem) => {
        elem.setAttribute("id", id.toString());
        const divContainer = document.createElement("div");
        const btn = createButtonChild(id, 150, 50);
        myAppendChild([elem, btn], divContainer);
        btn.addEventListener("click", (evnt) => {
            divContainer.removeChild(elem);
        });
        myAppendChild([divContainer], divUserlist);
        divContainer.style.display = "flex";
        id++;
    });
}
;
//  3.5
/******************************************
 *  ajoute un nouvel utilisateur
 * @return: void
 * *************************************** */
function addNewUser() {
    const user = {
        id: divUserlist.querySelectorAll("p").length + 1,
        prenom: `${document.querySelector("form > input[name='name']").value}`,
        age: `${document.querySelector("form > input[name='age']").value}`,
        role: `${document.querySelector("form > select[name='role']").value}`
    };
    localUserlist.push(user);
    localStorage.setItem("userList", JSON.stringify(localUserlist));
    const p = document.createElement("p");
    p.textContent = `ID: ${user.id};Prenom: ${user.prenom};Age: ${user.age};Role: ${user.role}`;
    myAppendChild([p], divUserlist);
}
const inputCreateUser = document.querySelector("form > #createUser");
inputCreateUser.addEventListener("click", (evnt) => {
    evnt.preventDefault();
    divUserlist.innerHTML = "";
    setUserList(localUserlist);
    addNewUser();
    setColorByRole();
    addMouseEvent();
    addButtons();
});
//  3.6
const btnSortById = document.querySelector("#sortById");
let countSortById = 0;
/******************************************
 *  ajoute un nouvel utilisateur
 * @return: void
 * *************************************** */
btnSortById.addEventListener("click", (evnt) => {
    evnt.preventDefault();
    if (countSortById % 2 === 0) {
        localUserlist.sort((a, b) => a.id - b.id);
    }
    else {
        localUserlist.sort((a, b) => b.id - a.id);
    }
    countSortById++;
    divUserlist.innerHTML = "";
    setUserList(localUserlist);
    localStorage.setItem("userList", JSON.stringify(localUserlist));
    setColorByRole();
    addMouseEvent();
    addButtons();
});
const btnSortByName = document.querySelector("#sortByName");
let countSortByName = 0;
/******************************************
 *  Tri par name
 * @return: void
 * *************************************** */
btnSortByName.addEventListener("click", (evnt) => {
    evnt.preventDefault();
    if (countSortByName % 2 === 0) {
        localUserlist.sort((a, b) => a.prenom.localeCompare(b.prenom));
    }
    else {
        localUserlist.sort((a, b) => b.prenom.localeCompare(a.prenom));
    }
    countSortByName++;
    divUserlist.innerHTML = "";
    setUserList(localUserlist);
    localStorage.setItem("userList", JSON.stringify(localUserlist));
    setColorByRole();
    addMouseEvent();
    addButtons();
});
const btnSortByAge = document.querySelector("#sortByAge");
let countSortByAge = 0;
/******************************************
 * Tri par age
 * @return: void
 * *************************************** */
btnSortByAge.addEventListener("click", (evnt) => {
    evnt.preventDefault();
    if (countSortByAge % 2 === 0) {
        localUserlist.sort((a, b) => a.age - b.age);
    }
    else {
        localUserlist.sort((a, b) => b.age - a.age);
    }
    countSortByAge++;
    divUserlist.innerHTML = "";
    setUserList(localUserlist);
    localStorage.setItem("userList", JSON.stringify(localUserlist));
    setColorByRole();
    addMouseEvent();
    addButtons();
});
//  3.7
const inputSearch = document.querySelector("#search");
/******************************************
 *  Recherche des utilisateurs par prenom,id,role,age
 * @return: Array<UserList>
 *      Liste des utilisateurs trouvées
 * *************************************** */
function searchUser() {
    const searchValue = inputSearch.value;
    return userlist.filter(user => user.id == parseInt(searchValue, 10)
        || user.age === parseInt(searchValue, 10)
        || user.role.toUpperCase().includes(searchValue.toUpperCase())
        || user.prenom.toUpperCase().includes(searchValue.toUpperCase()));
}
inputSearch.addEventListener("keyup", (evnt) => {
    divUserlist.innerHTML = "";
    const searchUserList = searchUser();
    setUserList(searchUserList);
    addButtons();
    setColorByRole();
    addMouseEvent();
});
setUserList(localUserlist);
addButtons();
setColorByRole();
addMouseEvent();
//  3.8
/******************************************
 *  Recherche des utilisateurs par prenom,id,role,age
 * @return: Array<UserList>
 *      Liste des utilisateurs trouvées
 * *************************************** */
// function addMouseEvent() {
//     const listPofUsers: NodeListOf<HTMLParagraphElement> | undefined = divUserlist?.querySelectorAll("p");
//     listPofUsers!.forEach((elem: HTMLParagraphElement) => {
//         elem.addEventListener("mouseenter", (evnt: Event) => {
//             elem.style.backgroundColor = "grey";
//             elem.addEventListener("click", (evntChild: Event) => {
//                 evntChild!.stopImmediatePropagation();
//                 const domUserId = parseInt(elem.getAttribute("id")!, 10);
//                 modifyUser(domUserId);
//                 setColorByRole();
//             })
//         })
//         elem.addEventListener("mouseleave", (evnt: Event) => {
//             elem.style.backgroundColor = "white";
//         })
//     })
// }
// function modifyUser(domUserId:number) {
//     const user: UserList = {
//         id: domUserId,
//         prenom: `${(<HTMLInputElement>document.querySelector("form > input[name='name']")).value}`,
//         age: `${(<HTMLInputElement>document.querySelector("form > input[name='age']")).value}`,
//         role: `${(<HTMLInputElement>document.querySelector("form > select[name='role']")).value}`
//     };
//    localUserlist[domUserId-1] = user;
//    localStorage.setItem("userList", JSON.stringify(localUserlist));
//    const p:HTMLParagraphElement|null = document.querySelector(`div > p[id='${domUserId}'`);
//    p!.textContent = `ID: ${user.id};Prenom: ${user.prenom};Age:${user.age};Role: ${user.role}`;
// }
