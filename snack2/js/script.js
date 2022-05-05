//2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a 
//quando a somma degli elementi è minore di 50.

//Creo un array vuoto
const array = []
console.log(array);


while (sum < 50) {
    const numberRequest = parseInt(prompt("Inserisci un numero da 1 a 10!")) 
    console.log(numberRequest);
    array.push(numberRequest) ;
    console.log(array);
    const sum = 0;
    console.log(sum);
    for (let i = 0; i < array.length; i++) {
     sum += array[i];  
}
}


//Chiedo un numero all'utente

    
