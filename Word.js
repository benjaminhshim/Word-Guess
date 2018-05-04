// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)


var Letter = require('./Letter');


function Word(word) {
	this.letterArray = [];

	this.wordGuess = [];

	this.underscores = '';

	this.wordString = function(word) {
		var wordSplit = word.split('');

		for(var key in wordSplit) {
			newLetter = new Letter();
			newLetter.character = wordSplit[key];
			this.letterArray.push(newLetter.character);
		};

		for (i = 0; i < this.letterArray.length; i++){
			this.letterArray[i] = new Letter (this.letterArray[i]);
			var underscore = this.letterArray[i].showCharacter();

			this.wordGuess.push(underscore);
			underscores = this.wordGuess.join(' ');
		}
		console.log(underscores);
	 };

	this.userGuess = function(letterGuess) {

		if (this.wordGuess.indexOf(letterGuess) >= 0) {
			newLetter.alreadyGuessed = true;
			newLetter.correctLetter(letterGuess);

		}
	}

	// this.reset = function() {
	// 	this.lettersArray = [];
	// }

}




module.exports = Word;