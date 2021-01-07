function estMajeur(age) {
    return age >= 18;
}

console.log(estMajeur(18));
console.log(estMajeur(10));

// #############################

function quelPermis(age) {
    if (typeof (age) !== "number") {
        return "Pb type argument";
    }
    if (age < 16) {
        return "Passager d'un vehicule";
    }
    else if (age >= 16 && age < 18) {
        return "Eligible conduite accompagne";
    }
    return "Eligible permis B";
}

function quelPermis(age) {
    return (age < 16) ? "Pb type argument" : (age >= 16 && age < 18) ? "Eligible conduite accompagne" : "Eligible permis B";
}

function testQuelPermis(tabArguments) {
    for (let i = 0; i < tabArguments.length - 1; i++) {
        console.log("Valeur argument:" + tabArguments[i] + "\n Retour: " + quelPermis(tabArguments[i]));
    }
}
testQuelPermis([5, 10, 16, 17, 18, 19, 80]);

//#############################

function sign(reel) {
    if (typeof (reel) !== "number") {
        return "Pb type argument";
    }
    if (reel > 0) {
        return "Positif";
    }
    else if (reel < 0) {
        return "negatif";
    }
    return "null";
}

function sign(reel) {
    return (reel > 0) ? "Positif" : (reel < 0) ? "negatif" : "null";
}

function testSign(tabArguments) {
    for (let i = 0; i < tabArguments.length - 1; i++) {
        console.log("Valeur argument:" + tabArguments[i] + "\n Retour: " + sign(tabArguments[i]));
    }
}
testSign([5, -10, 16, 0, 18, -19, 80]);

//#############################

function plusGrand2(int1, int2) {
    if (typeof (int1) !== "number" || typeof (int2) !== "number") {
        return "Pb type argument";
    }
    if (int1 > int2) {
        return int1;
    }
    else {
        return int2;
    }
}

function plusGrand2(int1, int2) {
    return int1 > int2 ? int1 : int2;
}
console.log(plusGrand2(1, 1));

//#############################

function plusPetit2(int1, int2) {
    if (typeof (int1) !== "number" || typeof (int2) !== "number") {
        return "Pb type argument";
    }
    return int1 < int2 ? int1 : int2;
}

function plusPetit2(int1, int2) {
    return int1 < int2 ? int1 : int2;
}
console.log(plusPetit2(1, 5, 10));

//#############################

function plusPetit3(int1, int2, int3) {
    if (typeof (int1) !== "number" || typeof (int2) !== "number" || typeof (int3) !== "number") {
        return "Pb type argument";
    }
    if (int1 < int2 && int1 < int3) {
        return int1;
    }

    else if (int2 < int1 && int2 < int3) {
        return int2;
    }
    return int3;
}

function plusPetit3(int1, int2, int3) {
    return (int1 < int2 && int1 < int3) ? int1 : (int2 < int1 && int2 < int3) ? int2 : int3;
}
function plusPetit3(int1, int2, int3) {
    return plusPetit2(int1, plusPetit2(int2, int3));
}
console.log(plusPetit3(1, 5, 10));

//#############################

function plusGrand3(int1, int2, int3) {
    if (typeof (int1) !== "number" || typeof (int2) !== "number" || typeof (int3) !== "number") {
        return "Pb type argument";
    }
    if (int1 > int2 && int1 > int3) {
        return int1;
    }

    else if (int2 > int1 && int2 > int3) {
        return int2;
    }
    return int3;
}

function plusGrand3(int1, int2, int3) {
    return (int1 > int2 && int1 > int3) ? int1 : (int2 > int1 && int2 > int3) ? int2 : int3;
}

function plusGrand3(int1, int2, int3) {
    return plusGrand2(int1, plusGrand2(int2, int3));
}
console.log(plusGrand3(-1, 55, 10));

//#############################

function positifOuPas(int1, int2, int3) {
    if (typeof (int1) !== "number" || typeof (int2) !== "number" || typeof (int3) !== "number") {
        return "Pb type argument";
    }
    if (int1 > 0 && int2 > 0 && int3 > 0) {
        return true;
    }
    return false;
}

function positifOuPas(int1, int2, int3) {
    return (int1 > 0 && int2 > 0 && int3 > 0) ? true : false;
}
console.log(positifOuPas(1, -2, 3));
console.log(positifOuPas(1, 2, 3));

//#############################

function estMajeur(e) { return "number" != typeof e ? "Pb type argument" : 18 <= e } console.log(estMajeur(18))
function quelPermis(e) { return "number" != typeof e ? "Pb type argument" : e < 16 ? "Passager d'un vehicule" : 16 <= e && e < 18 ? "Eligible conduite accompagne" : "Eligible permis B" }
function sign(n) { return "number" != typeof n ? "Pb type argument" : 0 < n ? "Positif" : n < 0 ? "negatif" : "null" }
function plusGrand2(e, n) { return "number" != typeof e || "number" != typeof n ? "Pb type argument" : n < e ? e : n }
function plusPetit2(e, t) { return "number" != typeof e || "number" != typeof t ? "Pb type argument" : e < t ? e : t }
function plusPetit3(e, t, n) { return "number" != typeof e || "number" != typeof t || "number" != typeof n ? "Pb type argument" : e < t && e < n ? e : t < e && t < n ? t : n }
function plusGrand3(e, n, r) { return "number" != typeof e || "number" != typeof n || "number" != typeof r ? "Pb type argument" : n < e && r < e ? e : e < n && r < n ? n : r }
function positifOuPas(e, t, n) { return "number" != typeof e || "number" != typeof t || "number" != typeof n ? "Pb type argument" : 0 < e && 0 < t && 0 < n }

//#############################

function capitale(pays) {
    if (typeof (pays) !== "string") {
        return "Pb type argument";
    }
    switch (pays) {
        case ("France"):
            return "Paris";
        case ("Allemagne"):
            return "Berlin";
        case ("Italie"):
            return "Rome";
        case ("Espagne"):
            return "madrid";
        case ("Maroc"):
            return "Rabat";
        case ("Portugal"):
            return "Lisbonne";
        case ("Angleterre"):
            return "Londres";
        default:
            return "Inconnu";
    }
}

function testCapitale(tabArguments) {
    for (let i = 0; i < tabArguments.length; i++) {
        console.log("Valeur argument:" + tabArguments[i] + "\n Retour: " + capitale(tabArguments[i]));
    }
}
testSign(["France", "Maroc", "Espagne", "Portugal", "Rien", 22]);


function mentionBachelier(pourcentage) {
    if (typeof (pourcentage) !== "number" || pourcentage < 0 || pourcentage > 1) {
        return "Pb type argument";
    }
    if (pourcentage < 0.5) {
        return "N'a pas reussi";
    }
    else if (pourcentage < 0.6) {
        return "A reussi";
    }
    else if (pourcentage < 0.7) {
        return "Satisfaction";
    }
    else if (pourcentage < 0.8) {
        return "Discticiont";
    }
    else if (pourcentage < 0.9) {
        return "une grande disctinction";
    }
    return "la plus grande disctinction";
}

function testMention(tabArguments) {
    for (let i = 0; i < tabArguments.length; i++) {
        console.log("Valeur argument:" + tabArguments[i] + "\n Retour: " + mentionBachelier(tabArguments[i]));
    }
}
testMention([22, 0.54, 0.93, 0.54, 0.71, 11, 0.81, 1, 0.9]);


