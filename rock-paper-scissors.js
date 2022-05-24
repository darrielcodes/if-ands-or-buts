const prompt = require('prompt-sync')({sigint: true}); 

let player1 = prompt("Player 1, enter rock, paper or scissors: ");
let player2 = prompt("Player 2, enter rock, paper or scissors: ");

let a = "rock";
let b = "paper";
let c = "scissors";

if ((player1 === a && player2 === a)
    || (player1 === b && player2 === b )||
    (player1 === c && player2 === c)
){
    console.log("Draw!")
}
else if ((player1 === a && player2 === c) ||
        (player1 === c && player2 === b) ||
        (player1 === b && player2 == a)
){
    console.log("Player 1 wins!")
}
else {console.log("Player 2 wins!")}