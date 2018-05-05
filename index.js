var inquirer = require('inquirer');
var Word = require('./Word');


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
            console.log('\n==================\nAVENGER TIME!\n==================');
            newGame();
        }
    })
};

startGame();

function newGame() {
    answer = wordList[Math.floor(Math.random() * wordList.length)];
    console.log('\nANSWER: ' + answer + '\n');

    newWord = new Word();

    newWord.wordString(answer);

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
            console.log('\nYOU GUESSED: ' + letterGuess);
    
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

            console.log('\n' + nextGuessArray + '\n');

    
            userLetter();
            
        });
    } else {
        ifWin();
    }
       



       

};

function ifWin() {
    console.log('YOU WIN!\n');
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

