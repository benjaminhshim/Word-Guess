var inquirer = require('inquirer');
var Word = require('./Word');
var clc = require('cli-color');



var wordList = ['IRON MAN', 'CAPTAIN AMERICA', 'THOR', 'HULK', 'HAWKEYE', 'BLACK WIDOW', 'BLACK PANTHER', 'THANOS', 'DOCTOR STRANGE', 'WAR MACHINE', 'SPIDER MAN', 'SCARLET WITCH', 'FALCON', 'VISION'];
var answer;
var newWord;
var nextGuessArray = [];



function startGame() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'start',
            message: 'Start game?'
        }
    ]).then(function(data) {
        if (data.start) {
            console.log(clc.yellow('\n==================\n') + clc.magenta('   AVENGER TIME!') + clc.yellow('\n=================='));
            console.log(clc.cyan('*HINT: USE THE COLORS TO HELP YOU*'));
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

    if (answer == 'IRON MAN') {
        console.log('\n' + clc.red(nextGuessArray) + '\n');
    } else if (answer == 'CAPTAIN AMERICA') {
        console.log('\n' + clc.blue(nextGuessArray) + '\n');
    } else if (answer == 'THOR') {
        console.log('\n' + clc.yellow(nextGuessArray) + '\n');
    } else if (answer == 'HULK') {
        console.log('\n' + clc.green(nextGuessArray) + '\n');
    } else if (answer == 'HAWKEYE') {
        console.log('\n' + clc.magenta(nextGuessArray) + '\n');
    } else if (answer == 'BLACK WIDOW') {
        console.log('\n' + clc.white(nextGuessArray) + '\n');
    } else if (answer == 'BLACK PANTHER') {
        console.log('\n' + clc.magenta(nextGuessArray) + '\n');
    } else if (answer == 'THANOS') {
        console.log('\n' + clc.magenta(nextGuessArray) + '\n');
    } else if (answer == 'DOCTOR STRANGE') {
        console.log('\n' + clc.red(nextGuessArray) + '\n');
    } else if (answer == 'WAR MACHINE') {
        console.log('\n' + clc.white(nextGuessArray) + '\n');
    } else if (answer == 'SPIDER MAN') {
        console.log('\n' + clc.red(nextGuessArray) + '\n');
    } else if (answer == 'SCARLET WITCH') {
        console.log('\n' + clc.red(nextGuessArray) + '\n');
    } else if (answer == 'FALCON') {
        console.log('\n' + clc.red(nextGuessArray) + '\n');
    } else if (answer == 'VISION') {
        console.log('\n' + clc.magenta(nextGuessArray) + '\n');
    } 

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

            // console.log('\n' + clc.cyan(nextGuessArray) + '\n');

            if (answer == 'IRON MAN') {
                console.log('\n' + clc.red(nextGuessArray) + '\n');
            } else if (answer == 'CAPTAIN AMERICA') {
                console.log('\n' + clc.blue(nextGuessArray) + '\n');
            } else if (answer == 'THOR') {
                console.log('\n' + clc.yellow(nextGuessArray) + '\n');
            } else if (answer == 'HULK') {
                console.log('\n' + clc.green(nextGuessArray) + '\n');
            } else if (answer == 'HAWKEYE') {
                console.log('\n' + clc.magenta(nextGuessArray) + '\n');
            } else if (answer == 'BLACK WIDOW') {
                console.log('\n' + clc.white(nextGuessArray) + '\n');
            } else if (answer == 'BLACK PANTHER') {
                console.log('\n' + clc.magenta(nextGuessArray) + '\n');
            } else if (answer == 'THANOS') {
                console.log('\n' + clc.magenta(nextGuessArray) + '\n');
            } else if (answer == 'DOCTOR STRANGE') {
                console.log('\n' + clc.red(nextGuessArray) + '\n');
            } else if (answer == 'WAR MACHINE') {
                console.log('\n' + clc.white(nextGuessArray) + '\n');
            } else if (answer == 'SPIDER MAN') {
                console.log('\n' + clc.red(nextGuessArray) + '\n');
            } else if (answer == 'SCARLET WITCH') {
                console.log('\n' + clc.red(nextGuessArray) + '\n');
            } else if (answer == 'FALCON') {
                console.log('\n' + clc.red(nextGuessArray) + '\n');
            } else if (answer == 'VISION') {
                console.log('\n' + clc.magenta(nextGuessArray) + '\n');
            } 

    
            userLetter();
            
        });
    } else {
        ifWin();
    }
       
};

function ifWin() {
    console.log(clc.bgRed('YOU WIN!') + '\n');
    resetGame();
}


function resetGame() {

    inquirer.prompt([
        {
            type: 'confirm',
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

