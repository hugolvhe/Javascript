let emptyTab = [];
const min = 0;
const max = 99;
const sizeTab = 10;

function getRandom(min, max) {
    let random_value = Math.floor(Math.random() * (max - min + 1) + min);
    return random_value;
}

// ########################################

function fillTab(min, max, sizeTab, emptyTab) {
    let copyTab = [];
    for (let i = 0; i < sizeTab; i++) {
        if (getRandom(min, max) > max || getRandom(min, max) < min) {
            return ("Erreur " + min + " " + max);
        }
        copyTab.push(getRandom(min, max));
    }
    return copyTab;
}
const tab = fillTab(min, max, sizeTab, emptyTab);

// ########################################

function printTab(tab) {
    let str = "";
    let strTab = [];
    for (let i = 0; i < 40; i++) {
        if (getRandom(min, max) > max || getRandom(min, max) < min) {
            return ("Erreur " + min + " " + max);
        }
        str += "Valeur" + i + ":" + getRandom(min, max) + " ";
    }
    strTab.push(str);
    console.log(strTab);
}
printTab(tab);

// ########################################

function getMax(tab) {
    let max = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
    }
    return max;
}
console.log(getMax(tab));

// ########################################

function permute(tab, i, j) {
    console.log(tab);
    let temp = 0;
    temp = tab[i];
    tab[i] = tab[j];
    tab[j] = temp;
    console.log(tab);
}
permute(tab, 3, 2);

// ########################################

function copy(tab) {
    let copy = [];

    for (let i = 0; i < tab.length; i++) {
        copy.push(tab[i]);
    }
    return copy;
}
copyTab = copy(tab);
copyTab[0] = "1111";
console.log(copyTab);
console.log(tab);

// ########################################

function sum(tab) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    return sum;
}
console.log(sum(tab));

// ########################################

function moyenne(tab) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    return sum / tab.length;
}
console.log(moyenne(tab));

// ########################################

function countMoyenne(tab, moyenne) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > moyenne) {
            //             console.log(tab[i]);
            sum++;
        }
    }
    console.log(sum);
}
countMoyenne(tab, moyenne(tab));

// ########################################

function countMax1(tab, max) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === max) {
            sum++;
        }
    }
    return sum;
}

console.log(countMax1(tab, getMax(tab)));

// ########################################

function getMax2(tab) {
    let max = 0;
    let sumMax = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
            sumMax = 0;
        }
        if (tab[i] === max) {
            sumMax++;
            console.log("fff" + tab[i], sumMax);
        }
    }
    return sumMax;
}
getMax2(tab);

// ########################################

function fusion(tab1, tab2) {
    let fTab = [];

    for (let i = 0; i < tab1.length; i++) {
        fTab.push(tab1[i]);
    }

    // for (let i = 0; i < tab2.length; i++) {
    //     fTab.push(tab2[i]);
    // }
    console.log(tab);
}
fusion(tab, tab);

function euclide(a, b, count) {
    if ((a <= 0 || b <= 0 || a < b) && count < 1) {
        return "erreur";
    }
    let r = a % b;
    if (r == 0) {
        return b;
    }
    else {
        return euclide(b, r, ++count);
    }
}
console.log(euclide(2, 2, 0));