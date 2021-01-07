function sansE(input) {
    let str = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== "e") {
            str += input[i];
        }
        return str;
    }
}
sansE("hzello");

// #################################################

function countA(input) {
    let count = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== "a") {
            count++;
        }
        return count;
    }
}
sansE("hzello");

// #################################################


function inverse(input) {
    let str = "";
    for (let i = 0; i < input.length; i++) {
        str += input[input.length - (i + 1)];
        console.log(str);
    }
    return str;
}
inverse("hzello");

// #################################################

function countMaj(input) {
    let count = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) {
            count++;
        }
    }
    return count;
}
countMaj("HzeLlo");

// #################################################

function supprimeVoyelle(input) {
    let str = "";
    for (var i = 0; i < input.length; i++) {
        lettre = input[i].toLowerCase();
        if (
            lettre !== "a" &&
            lettre !== "e" &&
            lettre !== "i" &&
            lettre !== "o" &&
            lettre !== "u" &&
            lettre !== "y"
        ) {
            str += lettre;
        }
    }
    console.log(str);
    return str;
}
supprimeVoyelle("HzeLlo");

// #################################################

function plusGrand(input) {
    let maxChar = "";
    for (let i = 0; i < input.length; i++) {
        lettre = input[i].toLowerCase();
        if (lettre > maxChar) {
            maxChar = lettre;
        }
    }
    console.log(maxChar);
    return maxChar;
}
supprimeVoyelle("HzeLlo");

// #################################################

function deleteSpace(input) {
    let str = "";
    let findChar = false;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
            findChar = true;
        }
        if (findChar) {
            str += input[i];
        }
    }
    console.log(str);
    return str;
}
deleteSpace("    HzeL  lo");

// #################################################

function deleteSpace2(input) {
    let str = "";
    for (let i = 0; i < input.length; i++) {
        if ((i === 0 && input[i] !== " ") ||
            (i === input.length - 1 && input[i] !== " ") ||
            (i > 0 && i < input.length - 1)) {
            str += input[i];
        }
    }
    console.log(str);
    return str;
}
deleteSpace2(" HzeLl o ");
deleteSpace2(" HzeLl o ");

// #################################################


function palindrome(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {

        if (input[i] === input[input.length - (i + 1)]) {
            count++;
        }

    }
    console.log(count === input.length);
    return count === input.length
}

palindrome("lngngol");

// #################################################

function checkPassword(input) {
    let condLength = false;
    let condMaj = false;
    let condMin = false;
    let condChiffre = false;
    if (input.length >= 8) {
        condLength = true;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === input[i].toLowerCase) {
                condLength = true;
            }
            if (input[i] === input[i].toUpperCase) {
                condMin = true;
            }
            if (input[i].charCodeAt(i) >= 48 && input[i].charCodeAt(i) <= 48) {
                condChiffre = true;
            }
        }
    }
    console.log(condLength && condMaj && codeMin && condChiffre);
    return count(condLength && condMaj && codeMin && condChiffre);
}
checkPassword("12dfefePP");


