//generates a random numbeer between 1 and 100
randomNumber = Math.floor(Math.random() * 101);

var numOfGuesses = 0;

document.getElementById('submitGuess').onclick = function(){

var guessedNum = document.getElementById('guess').value;
if (guessedNum=== randomNumber){
    console.log(`You guessed correctly in ${numOfGuesses} guesses!`);
} else if (guessedNum < randomNumber) {
    numOfGuesses++;
    console.log('Higher!');
} else {
    numOfGuesses++
    console.log('Lower!');
}
}