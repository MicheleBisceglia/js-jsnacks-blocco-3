//3. Creare un array di oggetti di squadre di calcio. 
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const superlegaTeam = [
    {
    nome:"juventus",
    punti :"0",
    falliSubiti : "0"
    }, 
    {
    nome:"Real Madrid",
    punti :"0",
    falliSubiti : "0" 
    }, 
    {
    nome:"Manchester United",
    punti :"0",
    falliSubiti : "0"
    }, 
    {
    nome:"Bayern Monaco",
    punti :"0",
    falliSubiti : "0"
    }, 
    {
        nome:"Paris Saint Germain",
        punti :"0",
        falliSubiti : "0"
    }
]
console.log(superlegaTeam);

//Genero il numero di punti
const randomPoints = createRndNumber(1, 100)
console.log("punti",randomPoints);

//Genero il numero di falli subiti
const randomFouls = createRndNumber(1,20)
console.log("falli",randomFouls);

function createRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
  }