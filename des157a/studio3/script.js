(function() {

'use strict';
console.log('reading js');

const startGame = document.getElementById('startgame');
const gameControl = document.getElementById('gamecontrol');
const game = document.getElementById('game');
const score = document.getElementById('score');
const actionArea = document.getElementById('actions');
const rollSound = new Audio('media/roll.m4a');
const winSound = new Audio('media/win.m4a');

const gameData = {
	dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 
		   'images/4die.png', 'images/5die.png', 'images/6die.png'],
	players: ['player 1', 'player 2'],
	score: [0, 0],
	roll1: 0,
	roll2: 0,
	rollSum: 0,
	index: 0,
	gameEnd: 29
};

    startGame.addEventListener("click", function(){
    gameData.index = Math.round(Math.random());
    console.log(gameData.index);
   
    document.getElementById('quit').addEventListener("click", function(){
        location.reload();
    })

    setUpTurn();
});

function setUpTurn(){
    game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
    actionArea.innerHTML = '<button id="roll"> Roll the Dice </button>';
    document.getElementById('roll').addEventListener('click', function(){
    throwDice();
    })
}

     function throwDice(){
    actionArea.innerHTML = '';

    gameData.roll1 = Math.floor(Math.random()* 6) + 1; 
    gameData.roll2 = Math.floor(Math.random() * 6) + 1;

    game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

    game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
    <img src="${gameData.dice[gameData.roll2-1]}">`;

    gameData.rollSum = gameData.roll1 + gameData.roll2;
    
    rollSound.play();

    if (gameData.rollSum === 2){
        game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
        gameData.score[gameData.index] = 0;
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        setTimeout(setUpTurn, 2000);
    }

    else if (gameData.roll1 ===1 || gameData.roll2 === 1){
       gameData.index ? (gameData.index = 0) : (gameData.index = 1);

       game.innerHTML += `<p>Sorry, one of your rolls was a 1, switiching to ${gameData.players[gameData.index]}</p>`;
       
       setTimeout(setUpTurn, 2000);
    }

    else{
        gameData.score[gameData.index] += gameData.rollSum;
        actionArea.innerHTML = '<button id="rollagain">Roll again</button> <break> <button id="pass">Pass</button>';

        document.getElementById('rollagain').addEventListener('click', function(){
           setUpTurn();
        })

        document.getElementById('pass').addEventListener('click', function(){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setUpTurn();
        })
        checkWinningCondition();
    }
}

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            rollSound.pause();
            winSound.play();

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else{
            score.innerHTML = `<p>The score is currently <strong> ${gameData.players[0]} : ${gameData.score[0]} </strong>  and  <strong> ${gameData.players[1]} : ${gameData.score[1]}</strong></p>`;
        }
    }
    
})();

    function on() {
    document.getElementById("overlay").style.display = "block";
    }

    function off() {
    document.getElementById("overlay").style.display = "none";
    }


