function helloWorld(eee) {
    return "Hello ADRAR world!";
}

function quiEstLeMeilleurProf() {
    return "Le prof de programmation JS!";
}

function jeRetourneMonArgument(string) {
    if (typeof (string) !== "string") {
        return "Pb type argument";
    }
    return string;
}

function concatenation(string1, string2) {
    if (typeof (string1) !== "string" || typeof (string2) !== "string") {
        return "Pb type argument";
    }
    return string1 + string2;
}

function monAge() {
    let age = 24;
    return age;
}

function somme(int1, int2) {
    if (typeof (int1) !== "number" || typeof (int2) !== "number") {
        return "Pb type argument";
    }
    return int1 + int2;
}

function afficher(a) {
    console.log(a);
}

function soustraction(int1, int2) {
    if (typeof (int1) !== "number" || typeof (int2) !== "number") {
        return "Pb type argument";
    }
    return int1 - int2;
}

function multiplication(int1, int2) {
    return int1 * int2;
}

function calculTTC(prixHT) {
    if (typeof (prixHT) !== "number") {
        return "Pb type argument";
    }
    // return Math.round((prixHT*1.055) * 100) / 100;
    return prixHT * 1.055;
}

function monAge(age) {
    if (typeof (age) !== "number") {
        return "Pb type argument";
    }
    return "Vote age actuel " + age;
}

function afficherPlatsDuJour(nomEntree, nomPlat, nomDessert, prixEntree, prixPlat, prixDessert) {
    if (typeof (nomEntree) !== "string" && typeof (nomPlat) !== "string" && typeof (nomEntreeDessert) !== "string" && typeof (prixEntree) !== "number" && typeof (prixPlat) !== "number" && typeof (prixDessert) !== "number") {
        console.log("Pb type argument");
        return 1;
    }
    document.write("Le chef vous propose aujourd'hui: </br>");
    document.write("Entree : " + nomEntree + " (" + prixEntree + "€)</br>");
    document.write("Plat : " + nomPlat + " (" + prixPlat + "€)</br>");
    document.write("Dessert : " + nomDessert + " (" + prixDessert + "euros€)</br>");
    document.write("Nous remercions votre aimable clientèle par avance de vouloir régler en bitcoin ₿₿₿");
    // console.log("Le chef vous propose aujourd'hui:")
    // console.log("Entree : " + nomEntree + " (" + prixEntree + "€)");
    // console.log("Plat : " + nomPlat + " (" + prixPlat + "€)");
    // console.log("Dessert : " + nomDessert + " (" + prixDessert + "euros€)");
    // console.log("Nous remercions votre aimable clientèle par avance de vouloir régler en bitcoin ₿₿₿");
    return 0;
}

console.log("function helloWorld() : " + helloWorld());
console.log("function quiEstLeMeilleurProf() : " + quiEstLeMeilleurProf());

console.log("function jeRetourneMonArgument() : " + jeRetourneMonArgument("42"));
console.log("function jeRetourneMonArgument() : " + jeRetourneMonArgument(42));

console.log("function concatenation() : " + concatenation(1, 2));
console.log("function concatenation() : " + concatenation("1", "2"));

console.log("function monAge() : " + monAge(24));
console.log("function monAge() : " + monAge("hh"));

console.log("function somme() : " + somme("1", "2"));
console.log("function somme() : " + somme(1, 2));

console.log("function soustraction() : " + soustraction("1", "2"));
console.log("function soustraction() : " + soustraction(1, 2));

console.log("function calculTTC() : " + calculTTC(true));
console.log("function calculTTC() : " + calculTTC(5));

console.log("function afficherPlatDuJour() : ");
afficherPlatsDuJour("Oeufs mimose", "entrecotes frites", "Banofee", calculTTC(3), calculTTC(10.5555), calculTTC(5));

console.log("function afficherPlatDuJour() : ");
afficherPlatsDuJour(5);



