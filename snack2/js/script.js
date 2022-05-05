//2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a 
//quando a somma degli elementi è minore di 50.

//Creo un array vuoto
const array = []
console.log(array);
let sum = 0


while (sum < 50) {
    const userNumber = parseInt(prompt("Inserisci un numero da 1 a 10!")) 
    console.log(userNumber);
    array.push(userNumber) ;
    console.log(array);
    sum += userNumber;

}
console.log("somma",sum);


//Chiedo un numero all'utente

    
