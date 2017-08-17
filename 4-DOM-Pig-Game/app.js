/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, previousScore1, previousScore2;
var gamePlaying;
var winningPoint = 40;
var dice1, dice2;

init();

// winningPoint = prompt('What should be the wining score?');

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //Random number
        var dice1 = Math.ceil(Math.random() * 6);
        var dice2 = Math.ceil(Math.random() * 6);

        //Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';


        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        //Update the round score IF the dice score is not 1
        if(dice1 === 1 || dice2 === 1) {
            switchPlayer();
        } else if((dice1 === 6 && previousScore1 === 6) || (dice2 === 6 && previousScore2 === 6)) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            switchPlayer();
        } else {
            //add score
            roundScore += (dice1 + dice2);
            document.getElementById ('current-' + activePlayer).textContent = roundScore;
        }

        previousScore1 = dice1;
        previousScore2 = dice2;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //Add current score to global score
        scores[activePlayer] += roundScore;
        roundScore = 0;

        //Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        roundScore = 0;

        var input = document.querySelector('.final-score').value;
        if(input)
            winningPoint = Number(input);

        //Check if player won the game
        if(scores[activePlayer] >= winningPoint) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            dice1.style.display = 'none';
            dice2.style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        } else {
            switchPlayer(); 
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function switchPlayer() {
        //next player
        roundScore = 0;
        previousScore1 = 0;
        previousScore2 = 0;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

        dice1.style.display = 'none';
        dice2.style.display = 'none';
}

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    previousScore = 0;

    gamePlaying = true;

    dice1 = document.getElementById('dice-1');
    dice2 = document.getElementById('dice-2');

    dice1.style.display = 'none';
    dice2.style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/