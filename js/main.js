$(document).ready(function() {

/* 1)
Crea un array di 10 oggetti che rappresentano una
zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

var zucchine = [
    {
        "varietà": "a",
        "peso": 180,
        "lunghezza": 15
    },
    {
        "varietà": "b",
        "peso": 171,
        "lunghezza": 13
    },
    {
        "varietà": "c",
        "peso": 170,
        "lunghezza": 13
    },
    {
        "varietà": "d",
        "peso": 183,
        "lunghezza": 17
    },
    {
        "varietà": "e",
        "peso": 177,
        "lunghezza": 14
    },
    {
        "varietà": "f",
        "peso": 179,
        "lunghezza": 15
    },
    {
        "varietà": "g",
        "peso": 181,
        "lunghezza": 15
    },
    {
        "varietà": "h",
        "peso": 183,
        "lunghezza": 16
    },
    {
        "varietà": "i",
        "peso": 185,
        "lunghezza": 17
    },
    {
        "varietà": "l",
        "peso": 175,
        "lunghezza": 14
    }
];

var pesoTot = 0;

for (var i = 0; i < zucchine.length; i++) {
    pesoTot += zucchine[i]["peso"];
}
console.warn("ESERCIZIO 1");
console.log("Peso totale: " + pesoTot + " grammi");

/* 2)
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm (:sorrisetto:).
Infine stampa separatamente quanto pesano i due gruppi
di zucchine */

var zucchineUnder15 = [];
var zucchineOver15 = [];

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i]["lunghezza"] < 15) {
        zucchineUnder15.push(zucchine[i]);
    } else {
        zucchineOver15.push(zucchine[i]);
    }
}

console.warn("ESERCIZIO 2");
console.log(zucchineUnder15);
console.log(zucchineOver15);

var pesoZucchineUnder15 = 0;
for (var i = 0; i < zucchineUnder15.length; i++) {
    pesoZucchineUnder15 += zucchineUnder15[i]["peso"];
}

console.log("Le zucchine under15 pesano: " + pesoZucchineUnder15 + " grammi");

var pesoZucchineOver15 = 0;
for (var i = 0; i < zucchineOver15.length; i++) {
    pesoZucchineOver15 += zucchineOver15[i]["peso"];
}

console.log("Le zucchine Over15 pesano: " + pesoZucchineOver15 + " grammi");

/* 3)
Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC) */

var word = reverseString("Ciao");
console.warn("ESERCIZIO 3");
console.log(word);

function reverseString(word) {
    var reverseWord = "";
    for ( var i = word.length-1; i >= 0; i--) {
        reverseWord += word.charAt(i)
    }
    return reverseWord
}


/* 4)
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati. */

var nameList = ["Marco", "Luca", "Andrea", "Paolo", "Matteo", "Giorgio"];
var surnameList = ["Rossi", "Verdi", "Marrone", "Bianchi", "Neri", "Viola"];

var fakeListName = [];          //Ho dovuto creare 2 variabili d'appoggio perchè il metodo includes non funzionava nel momento
var fakeListSurname = [];       //che controllavo se un nome era già stato utilizzato (es. "Marco Neri" includes non rilevava "Marco")
var fakeList = [];

while (fakeList.length < 3) {
    var fakeName = nameGenerator(nameList);
    var fakeSurname = nameGenerator(surnameList);
    if (!fakeListName.includes(fakeName) && !fakeListSurname.includes(fakeSurname)) {
        fakeListName.push(fakeName);
        fakeListSurname.push(fakeSurname);
        fakeList.push(fakeName + " " + fakeSurname);
    }
}

console.warn("ESERCIZIO 4");
console.log(fakeList);

function nameGenerator(nameList) {
    var i = Math.floor(Math.random() * nameList.length);
    return nameList[i];
}

/* 5)
Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari */

var numbersArray = [2,3,5,7,13,16,23,8,12,9,15];
var sum = 0;

for (var i = 0; i < numbersArray.length; i++) {
    if(i % 2 != 0) {
        sum += numbersArray[i];
    }
}

console.warn("ESERCIZIO 5");
console.log(sum);
/* 6)
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

var oddNumber = [1,3,5,7,9,11,13,15,17,19];
var evenNumber = [2,4,6,8,10,12];

while (evenNumber.length < oddNumber.length) {
    evenNumber.push(randomEvenNumber(14, 100));
}

console.warn("ESERCIZIO 6");
console.log(oddNumber);
console.log(evenNumber);

function randomEvenNumber(min, max) {
    var flag = false;
    while (flag == false){
        var evenNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (evenNumber % 2 == 0) {
            return evenNumber;
        }
    }  
}
/* 7)
Scrivi una funzione che fonda due array(aventi lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro
es. [a, b, c], [1, 2, 3]→[a, 1, b, 2, c, 3]. */

var letters = ["a", "b", "c", "d", "e"];
var numbers = [1,2,3,4,5];
var lettersNumbers = [];

for (var i = 0; i < letters.length; i++) {
    lettersNumbers.push(letters[i]);
    lettersNumbers.push(numbers[i]);
}

console.warn("ESERCIZIO 7");
console.log(lettersNumbers);

/* 8)
Scrivi una funzione che accetti tre argomenti:
un array e due numeri(“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */

var myArray = [1,2,3,4,5,6,7,8];

console.warn("ESERCIZIO 8");
console.log(myArray);
console.log(newArray(myArray, 2, 5));

function newArray(array, a, b) {
    var newArray = [];
    if ((a < b) && (b < array.length)) {
        for (var i = a; i <= b; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    } else {
        return 0;
    }
}
});