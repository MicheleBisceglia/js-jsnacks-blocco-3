//3. Creare un array di oggetti di squadre di calcio. 
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const superlegaTeam = [
    {
    nome:"juventus",
    punti :"",
    falliSubiti : ""
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
];

//scorro l'array di oggetti
superlegaTeam.forEach( team => {
//calcolo punti e falli con una funzione
  const randomPunti = getRndInteger(0,100);
  const randomFalli = getRndInteger(0,100);

//inserisco i punti e i falli calcolati con la funzione nell'array
  team.puntiFatti = randomPunti;
  team.falliSubiti = randomFalli;
});

console.log(superlegaTeam);

//Functions (calcolo numeri random per falli e punti)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  