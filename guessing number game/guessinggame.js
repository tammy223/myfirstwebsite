//generates a random numbeer between 1 and 100
randomNumber = Math.floor(Math.random() * 101);

var guessedNum = prompt('Please guess a number between 1 and 100!');
var guessedNumInt = parseInt(guessedNum);

var numOfGuesses = 0;

document.getElementById('submitGuess').onclick = function(){

var numOfGuesses = document.getElementById('guess').value;
if (guessedNumInt=== randomNumber){
    console.log(`You guessed correctly in ${numOfGuesses} guesses!`);
} else if (guessedNumInt < randomNumber) {
    numOfGuesses++;
    console.log('Higher!');
} else {
    numOfGuesses++
    console.log('Lower!');
}
}