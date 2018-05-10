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

