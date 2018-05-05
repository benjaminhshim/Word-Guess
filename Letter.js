// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly



var Letter = function (character) {
    this.character = character;

    this.alreadyGuessed = false;

    this.showCharacter = function () {

        if (this.character == ' ') {
            console.log(' ');
            this.alreadyGuessed = true;
        };

        if (this.alreadyGuessed === false) {
            return '_';

        } else {
            return this.character;

        };

    };

    this.correctLetter = function(char) {

        if (this.character === char) {
            this.alreadyGuessed = true;
        }
        this.showCharacter();


    };

}

// var newLetter = new Letter('a');
// console.log(newLetter.character);
// newLetter.correctLetter('b');
// console.log(newLetter.alreadyGuessed);


module.exports = Letter;

