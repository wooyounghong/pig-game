/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// declare scores for player1 and player2; but keep it cleaner;
// var score1 = 0;
// var score2 = 0;

// var scores = [0, 0];
// var roundScore = 0;

// variable declarations;
var scores = [0, 0];
var roundScore = 0;
var activePlayer = 1;

// calculate random number;
var dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// DOM Manipulation;
// .textContent = changes text on the html but .textContent is faster because no need to parse; similar to innerHTML;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// this is called setter because this sets the value;
document.querySelector('#current-' + activePlayer).textContent = dice;

// storing into var x;
// this is called a 'getter' because it gets a value;
// var x = document.querySelector('#score-0').textContent;
// console.log(x);



// hide the dice when you first open up the game;
document.querySelector('.dice').style.display = 'none';
