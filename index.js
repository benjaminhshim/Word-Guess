var inquirer = require('inquirer');
var Word = require('./Word');


// var command = process.argv[2];

// var wordList = ['IRON MAN', 'CAPTAIN AMERICA', 'THOR', 'HULK', 'HAWKEYE', 'BLACK WIDOW'];var letterArray = [];
// var answer;

// var wordSplit = wordList[0].split('');
// console.log(wordSplit);


// wordSplit.forEach(i => {
//     i = '_';
//     letterArray.push(i);
//     answer = letterArray.join(' ');
// })

// console.log(answer);

var command = process.argv[2];

var testWord = 'hello';

function newGame() {
    var newWord = new Word();
    newWord.wordString(testWord);
    userLetter(newWord);
}


newGame();


function userLetter (newWord) {
    if (testWord.indexOf(command) >= 0) {
        newWord.userGuess(command);
    }
};
