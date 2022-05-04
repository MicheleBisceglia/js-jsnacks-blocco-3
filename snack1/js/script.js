//1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi 
//all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

//Creo due Array
const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const secondArray = [2, 4, 3]
console.log("Array 1",firstArray);
console.log("Array 2",secondArray);


//aggiungo elementi al secondo array fino ad arrivare allo stesso numero di elementi del primo
while (secondArray.length < 9) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
   
   
   secondArray.push(randomNumber)
   
}
console.log("array 2 fine",secondArray);