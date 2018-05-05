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
    // CHOOSE A RANDOM WORD FROM THE LIST OF AVENGERS
    answer = wordList[Math.floor(Math.random() * wordList.length)];
    console.log('\nAnswer: ' + answer + '\n');

    // CREATE A NEW OBJECT FOR EACH WORD
    newWord = new Word();

    // CREATE A STRING FOR THE WORD
    newWord.wordString(answer);

    // TAKE USER INPUT
    userLetter();
}



function userLetter() {


        inquirer.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: 'Guess a letter'
            }
        ]).then(function(data) {
    
    
            var letterGuess = data.userInput.toUpperCase();
            console.log('\nYou guessed: ' + letterGuess);
    
            if (answer.indexOf(letterGuess) >= 0) {
                newWord.userGuess(letterGuess);
            }
    
            for (var i = 0; i < answer.length; i++) {
                if (letterGuess === answer[i]) {
                    newWord.underscoreArray[i] = newWord.wordGuess[i];
                }
            }
    
            nextGuessArray = newWord.underscoreArray.join(' ');
            console.log('\n' + nextGuessArray + '\n');

    
            userLetter();
    
        });


};



// function resetGame() {
//     newWord.reset();
// }

