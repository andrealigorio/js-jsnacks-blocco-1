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
console.log(word);

function reverseString(word) {
    var reverseWord = "";
    for ( var i = word.length-1; i >= 0; i--) {
        reverseWord += word.charAt(i)
    }
    return reverseWord
}

});

