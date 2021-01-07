"use strict";
//      2.1
//  1
function buildRowTable(valueHead, valueCell) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = valueHead;
    const td = document.createElement("td");
    td.innerText = valueCell;
    tr.appendChild(th);
    tr.appendChild(td);
    tr.setAttribute("class", valueHead);
    return tr;
}

class Product {
    constructor(id, name, stock, price, quantity = 0) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
    }
    display() {
        return `Id:${this.id}, name:${this.name}, stock:${this.stock}, price:${this.price}`;
    }
    getHtml() {
        const table = document.createElement("table");
        table.setAttribute("id", this.id.toString());
        for (const [key, value] of Object.entries(this)) {
            table.appendChild(buildRowTable(key, value));
        }
        return table;
    }
}
//  2
class Toy extends Product {
    constructor(id, name, stock, price, ageMin) {
        super(id, name, stock, price);
        this.ageMin = ageMin;
    }
    display() {
        return `${super.display()}, age min:${this.ageMin}`;
    }
    test() {
        return "Hello world";
    }
}
//      2.2
//  1
class Store {
    constructor(adress, productList = []) {
        this.adress = adress;
        this.productList = productList;
    }
    addProduct(product) {
        this.productList.push(product);
    }
    updateProductStock(idArg, quantity) {
        function findProductById(product) {
            return product.id === idArg;
        }
        this.productList.find(findProductById).stock += quantity;
    }
    currentStockValue() {
        return this.productList.reduce((acc, product) => acc + (product.price * product.stock), 0);
    }
    fillHtml() {
        for (let product of this.productList) {
            document.body.appendChild(product.getHtml());
        }
    }
    needReorder() {
        return this.productList.filter(product => product.stock <= 10);
    }
}
//      3 
//  1
const myStore = new Store("3rue de noel");
//  2
const product1 = new Product(1, "product1", 22, 1);
const product2 = new Product(2, "product2", 2, 42);
const toy1 = new Toy(3, "toy1", 2, 4, 100);
const toy2 = new Toy(4, "toy2", 10, 42, 100);
myStore.addProduct(product1);
myStore.addProduct(product2);
myStore.addProduct(toy1);
myStore.addProduct(toy2);
//  3
console.log(myStore.needReorder());
//  4
console.log(myStore.currentStockValue());
//  5
myStore.updateProductStock(1, 100);
//  6
console.log(myStore.currentStockValue());
//  7
myStore.fillHtml();
//      4
//  1
function setTotalPrice() {
    const listTableProductsDom = document.body.querySelectorAll("table");
    for (let Tableproduct of listTableProductsDom) {
        const StrPrice = Tableproduct.querySelector(".price > td").textContent;
        const StrStock = Tableproduct.querySelector(".stock > td").textContent;
        Tableproduct.appendChild(buildRowTable("Total du stock", (parseInt(StrPrice, 10) * parseInt(StrStock, 10)).toString()));
    }
}
document.body.innerHTML = "";
myStore.fillHtml();
setTotalPrice();
//  2
function setProductsInRed() {
    const listTableProductsDom = document.body.querySelectorAll("table");
    for (let product of myStore.needReorder()) {
        document.getElementById(`${product.id}`).style.color = "red";
    }
}
setProductsInRed();
//  3
function insertDomTotalValueStore() {
    const p = document.createElement("p");
    p.textContent = `Valeur total du magasin : ${myStore.currentStockValue()} $`;
    document.body.appendChild(p);
}
insertDomTotalValueStore();
