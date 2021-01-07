function resetIfExist(myVar) {
    if(myVar !== null) {
        myVar = null;
    }
}


//Exercice1:
// 1a
let myVar = 253;
myVar *= 3;
myVar /= 2;
myVar++;
console.log(myVar);



// 1b
console.log(2 + 3 * 3);
console.log((2 + 3) * 3);
console.log(4 / 2 + 2 * 3);
console.log(4 / (2 + 2 * 3));
// Les prioritées des opérations sont les même qu'en math

// 1c
function submitValue() {
    number = document.getElementById("myInput").value;
    number %= 2;
    console.log('Vous avez saisi: ', number);
   }
// Le modulo indique si le nombre est pair/impaire : si pair pas de reste

// Exercice2:

const helloWorld = "Hello World";
console.log(helloWorld.length);
const helloBis = helloWorld + ",Hello Javascript";
console.log(helloBis);
console.log(helloBis.length);
console.log(helloBis[helloBis.length - 1]);

// Exercice3:
// 3a:
let myObj = {
    prenom: "Damien",
    age: 27
};
console.log(myObj.age);
myObj.age++;
console.log(myObj.age);
console.log(myObj.prenom[0]);

// 3b:
myObj.pere = { prenom: "Jean", age: 57 }
console.log(myObj);
myObj.pere.age += 3;
console.log(myObj);

//3c
const { age, prenom } = myObj;
console.log(age, prenom);

//3d
let enfant = {
    age: 15,
    prenom: "Enfant"
};
enfant.pere = { ...myObj.pere };
console.log(enfant);

//3e
delete enfant.pere;
console.log(enfant);

// Exercice4
// 4a
resetIfExist(myVar);
console.log(myVar);
console.log(myVar.length);
// undefined

//4b
resetIfExist(myVar);
console.log(myVar);
console.log(myVar.length);
//null

// Exercice 5
//5a
resetIfExist(myVar);
myVar = 40 + 2;
console.log(typeof (myVar));
// type number

//5b
resetIfExist(myVar);
myVar = {};
console.log(typeof (myVar));
// type object

//exercice 6
//6a
console.log("5" == 5);  // Egalité de valeur
console.log("5" === 5); // Egalité de valeur et type
console.log("5" != 5);  // Inegalité de valeur
console.log("5" !== 5); // Inegalité de valeur et type

//6b
const obj1 = { id: 1 };
const obj2 = { ...obj1 };
const obj3 = obj1;
console.log(obj1 === obj2);
console.log(obj1 === obj3);


//Exercice8
console.log("Exercice8");
console.log(true && true); // true
console.log(false && true); //false
console.log(true || true); // true
console.log(true || false);  //true
console.log(false || false); //fale
console.log(!true); // false
console.log(!false); //true
console.log(true || false && true); //
console.log(true && false || true && false);
console.log(5 <= 6 && 5 > 4);
console.log(5 <= 6 && 5 > 7);
console.log(5 <= 6 || 5 > 7);
console.log(5 <= 6 || 5 > 7 && 5 !== 3);
console.log(5 <= 7 && !(5 !== 3));

//Exercice9
//9a
const four = 4;
const five = 5;
if (four < five || five > four + 1) {
    console.log("Condition vraie");
} else {
    console.log("Raté !");
};

   function submitValue() {
    number = document.getElementById("myInput").value;
        if(number >= 0 && number <= 10) {
            console.log("Le nombre saisi est compris entre 0 et 10");
        }
        else if (number >= 11 && number <= 100) {
            console.log("Le nombre saisi est compris entre 11 et 100");
        }
        else {
            console.log("Le nombre saisi a une autre valeur");            
        }
    }

//Exercice 10:
//10a
function submitValue() {
    number = document.getElementById("myInput").value;
    let numberInt = parseInt(number,10);
    switch (numberInt) {
        case (1):
            numberInt += 3;
            break;
        case (2):
            numberInt *= 3;
            break;
        default:
            numberInt -= 2;
            break;
    }
    console.log(numberInt);
}

//Exercice 11
//11a

function submitValue() {
    number = document.getElementById("myInput").value;

    const ternary = number % 2 === 0 ? "paire " : "impair";     // === ? pas le meme type
    console.log(ternary);
}

//Exercice 12
resetIfExist(myVar);
for(let i =0;i<3;i++) {
    myVar *= 2;
}
console.log(myVar);

//Exercice 13
//13a
resetIfExist(myVar);
myVar = 0;
while(myVar<1000) {
    myVar += 2;
}
console.log(myVar); //1001

//13b
// resetIfExist(myVar);
// while(myVar!== 5) {
//     myVar += 2;
//     console.log(myVar);     // BOUCLE INFINIE
// }

//Exercice 14:
//14a
resetIfExist(myVar);
myVar = 1;
while(myVar<10) {
    myVar++;
    if(myVar === 5) {
        break;
    }
};
console.log(myVar); //5

//Exercice 15:
//15a

function multiply(a,b) {
    return a*b;
};
resetIfExist(myVar);
myVar = multiply(2,2);
console.log(myVar);

//15b
multiply = (a,b) => {
    return a*b;
};
console.log(multiply(2,2));

//Exercice 16
//16a
resetIfExist(myVar);
myVar = 16;
function func() {
    console.log(myVar);
}
func();

//16b
function func_a() {
    let y = 3;
    func_b();
    console.log("fonction a : "+y);
}

function func_b() {
    let y = 3+3;
    console.log("fonction b : "+y);
}
func_a();
//Le scope des variables est locale elle ne s'applique qu'a l'intérieur des fontions ou elles sont init

//16c
function a() {
    const b = 3;
}
a();
console.log(func_b)  // not defined

// Exercie 17
//17a
function factorielle(n) {
    return factorielle(n - 1) * n;
}

console.log(factorielle(3)); // Stackoverflow

////17b
function factorielle(n) {
    if (n === 1) {
        return 1;
    }
    return factorielle(n - 1) * n;
}
console.log(factorielle(3));    // result=6 : s'execute 1fois


//Exercice 18
try {
    console.log(e.att);
}
catch (exception) {
    console.log(exception);     //ReferenceError: e is not defined
}
console.log("Hello world");     // Permet de capturer l'erreur sans bloquer la suite du programme

//Exercice 19
let myArray = [9, 1, 3, 6, 2];
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
myArray.push(4);

for(let i = 0; i < myArray.length-1; i++) {
    myArray[i] += 2;
}

myArray[3] += 1;

console.log(myArray);
let sum = 0;
myArray.forEach(key => {
    sum += key;
});

console.log(myArray.sort());


//Exercice 20
//20a
let mySet = new Set();
mySet.add("Javascript").add("NodeJS").add("Java");
console.log(mySet);
mySet = Array.from(mySet);
console.log(mySet);

//Exercice 21
//21a
let myMap = new Map();
myMap
    .set(1, {
        nom: "Laurent",
        age: 51
    })
    .set(2, {
        nom: "Damien",
        age: 29
    });
console.log(myMap);


//Exercice 22
//22

const myArr = [
    {
        nom:"Premier",
        age:66
    },
    {
        nom:"Deuxieme",
        age:55
    }
]

myArr.forEach(key => {
    console.log(`Cette eleve s'appele ${key.nom} et a ${key.age} ans`)
})

//Exercice 23
//23
class Vehicule {
    constructor(nom,vitesseMax) {
        this.nom = nom;
        this.vitesseMax = vitesseMax;
    }

    affiche() {
        console.log(`Nom : ${this.nom}` );        
    }

    seDeplacer() {
        console.log("Je me deplace !");
    }
};

class Voiture extends Vehicule {
    constructor(nom,age,immatriculation) {
        super (nom,age),
        this.immatriculation = immatriculation;
    }

    affichage() {
        console.log(`Mon immatriculation ${this.immatriculation}` );
    }

    seDeplacer() {
        console.log(`roule`) ;
    }
};

myVehicule = new Vehicule("Jeep","600");
myVehicule.seDeplacer();

myCar = new Voiture("Jeep","600",55);
myCar.affichage();
myCar.seDeplacer();
myCar.affiche();

//Exercice 24
//24

class Personne {
    constructor(nom,age) {
        this.nom = nom;
        this.age = age;
    }

    vieillir() {
        this.age ++;
    }

    categorie() {
        if(this.age < 11) {
            return "enfant";
        }
        else if(this.age > 11 && this.age <= 17 ) {
            return "adolescent";
        }
        else if(this.age < 18 && this.age <= 29) {
            return "jeune";
        }
        else if(this.age < 30 && this.age <= 49) {
            return "Fleur de l'age";
        }
        return "Senior";
    }

    anneesAvantRetraite() {
        return 70 - this.age;
    }

    presentation() {
        return `Bonjour, je suis ${this.nom} et j'ai ${this.age}, plus que ${this.anneesAvantRetraite()} et je serai enfin peinard.`
    }
}

class Eleve extends Personne {
    constructor(nom,age,etablissement) {
        super (nom,age);
        this.etablissement = etablissement;
        this.notes = [];
    }

    recevoirNote(note) {
        this.notes.push(note);
    }

    moyenne() {
        let sum = 0;
        const length =this.notes.length;
        for(let i = 0; i<length;i++) {
            sum+=this.notes[i];
        }
        return (sum/length).toFixed(2);
    }

    presentation() {
        return `${super.presentation()} et j'étudie à ${this.etablissement}`;
    }
}

const eleve1 = new Eleve("Eleve",15,'School');

eleve1.recevoirNote(15);
eleve1.recevoirNote(145);
eleve1.recevoirNote(15);
console.log(eleve1);
console.log(eleve1.presentation());

//24 suite
const procheRetraite = new Personne("procheRetraite",69);
const enRetraite = new Personne("enRetraite",75);

let myEleve = new Eleve("Eleve",25,);

myEleve.recevoirNote(15);

console.log(myEleve.moyenne());
console.log(myEleve.presentation());

while(myEleve.anneesAvantRetraite() > 0) {
    myEleve.vieillir();
}

function comparer(person1,person2) {
    return person1.nom === person2.nom && person1.age === person2.age;
}

console.log(comparer(procheRetraite,enRetraite));