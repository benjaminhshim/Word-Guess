var inquirer = require('inquirer');
var Word = require('./Word');
var clc = require('cli-color');



var wordList = ['IRON MAN', 'CAPTAIN AMERICA', 'THOR', 'HULK', 'HAWKEYE', 'BLACK WIDOW'];
var answer;
var newWord;
var nextGuessArray = [];

function startGame() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'start',
            message: 'Start game?'
        }
    ]).then(function(data) {
        if (data.start) {
            console.log(clc.yellow('\n==================\n') + clc.magenta('   AVENGER TIME!') + clc.yellow('\n=================='));
            newGame();
        }
    })
};

startGame();

function newGame() {
    answer = wordList[Math.floor(Math.random() * wordList.length)];
    // console.log('\nANSWER: ' + answer + '\n');

    newWord = new Word();

    newWord.wordString(answer);

    nextGuessArray = newWord.underscoreArray.join(' ');
    console.log('\n' + clc.cyan(nextGuessArray) + '\n');

    userLetter();
}



function userLetter() {

    // console.log(newWord.wordGuess);
    // console.log(newWord.underscoreArray);

    if (newWord.underscoreArray.indexOf('_') >= 0) {
        inquirer.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: 'GUESS A LETTER'
            }
        ]).then(function(data) {
    
            var letterGuess = data.userInput.toUpperCase();
            console.log('\nYOU GUESSED: ' + clc.yellow(letterGuess));
    
            if (answer.indexOf(letterGuess) >= 0) {
                newWord.userGuess(letterGuess);
            }
    
            for (var i = 0; i < answer.length; i++) {
                if (letterGuess === answer[i]) {
                    newWord.underscoreArray[i] = newWord.wordGuess[i];
                }
            }
    
            nextGuessArray = newWord.underscoreArray.join(' ');
            // nextGuessWordArray = newWord.wordGuess.join(' ');

            console.log('\n' + clc.cyan(nextGuessArray) + '\n');

    
            userLetter();
            
        });
    } else {
        ifWin();
    }
       



       

};

function ifWin() {
    console.log(clc.bgRed('YOU WIN!\n'));
    resetGame();
}


function resetGame() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'restart',
            message: 'PLAY AGAIN?'
        }
    ]).then(function(response) {
        if (response.restart) {

            newGame();
            newWord.reset();
    
        }
    })

}

