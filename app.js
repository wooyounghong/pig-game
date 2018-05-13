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
var activePlayer = 0;

// calculate random dice number;
// var dice = Math.floor(Math.random() * 6) + 1;

// DOM Manipulation;
// .textContent = changes text on the html but .textContent is faster because no need to parse; similar to innerHTML;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// this is called setter because this sets the value;
// document.querySelector('#current-' + activePlayer).textContent = dice;

// storing into var x;
// this is called a 'getter' because it gets a value;
// var x = document.querySelector('#score-0').textContent;
// console.log(x);



// hide the dice when you first open up the game;
// .style.CSS_property = 'css prop';

document.querySelector('.dice').style.display = 'none';

// Setting all scores to 0 initalize;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// Event Handlers;
// event handlers are only run after the execution stacks are empty, when all the functions have returned;


document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. need random number;
  var dice = Math.floor(Math.random() * 6) + 1;
//   console.log(dice);
  // 2. display result;
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  // changing dice img based on what you roll; // use SRC;
  diceDOM.src = 'dice-' + dice + '.png';
  // 3. update roundScore;
  // 4. when dice rolls 1, change to next player, set roundScore to 0;
  if (dice > 1) {
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    // changing to next player when dice rolls 1, changing round score to 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // set the current scores to 0 when dice rolls 1;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // changing the red dot to another player from html&css;
    // removing 'active' from class player panel;
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }  
})






