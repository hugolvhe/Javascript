function tableMultiplication(nbr, limit) {
    let node = document.createElement("p");

    for (let i = 0; i <= limit; i++) {
        let text = document.createTextNode(" A " + "x" + i + " = " + nbr * i);
        let p = document.createElement("p");
        p.appendChild(text);
        console.log(p);
        node.appendChild(p);
    }
    return node;
}

let nbr = 1;
let interval = 10;
let total_div = 10;
let max_column = 3;
let row = 1;
const container = document.querySelector("#container");
container.style.display = "grid";
container.style.textAlign = "center";
container.style.overflow = "wrap";

for (let i = 1; i <= total_div; i++) {
    let child_div = document.createElement("div");
    child_div.style.display = "flex";
    child_div.style.flexDirection = "column";
    child_div.style.margin = "0.9em"
    child_div.style.border = "black solid 0.2em";
    child_div.style.padding = "0.8em";

    if (nbr < i * interval) {
        child_div.appendChild(tableMultiplication(nbr++, interval));
        child_div.style.gridColumn = i;
        child_div.style.gridRow = row;
    }
    if (nbr % max_column === 0) {
        row++;
    }
    container.appendChild(child_div);
}


function multplication(mult, limit) {
    for (let i = 0; i > limit; i++) {
        console.log((mult + "x" + i + " = " + mult * i));
    }
    return "Fin";
}

function multplication2(mult, limit) {
    while (i < limit) {
        console.log((mult + "x" + i + " = " + mult * i));
        i++;
    }
    return "Fin";
}

function multplication3(mult, limit) {
    do {
        console.log((mult + "x" + i + " = " + mult * i));
        i++;
    } while (i < limit)
    return "Fin";
}



function multiplication4(mult, limit, i) {
    if (i <= limit) {
        i++;
        multiplication4(mult, limit, i);
    }
}



