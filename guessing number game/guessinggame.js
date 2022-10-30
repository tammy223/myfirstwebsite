//generates a random numbeer between 1 and 100
randomNumber = Math.floor(Math.random() * 101);

var guessedNumInt = (numbers);

var numOfGuesses = 0;

document.getElementById('submitGuess').onclick = function(){

var guessedNumInt = document.getElementById('guess').value;
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