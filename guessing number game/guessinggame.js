var maxNumber = 100

var numOfGuesses
var randomNumber

function setGuesses(guessCount) {
    numOfGuesses = guessCount
    document.getElementById('guess_count').innerText = numOfGuesses
}

function resetGame() {
    document.getElementById('max_number').innerText = maxNumber
    setGuesses(0)
    // generates a random number between 1 and max number
    randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    document.getElementById('answer_higher').className = 'hidden'
    document.getElementById('answer_lower').className = 'hidden'
    document.getElementById('answer_invalid').className = 'hidden'
    document.getElementById('answer_correct').className = 'hidden'
    document.getElementById('guess').value = ''
    console.log('Game has been reset and is ready to go!', randomNumber)
}

function submitGuess() {
    setGuesses(numOfGuesses + 1)

    var guessedString = document.getElementById('guess').value;
    var guessedNum = parseInt(guessedString)

    console.log(`DEBUG: You guessed: ${guessedNum}!`, randomNumber);

    if (guessedNum < 1 || guessedNum > 100) {
        // You fucking idiot
        document.getElementById('answer_higher').className = 'hidden'
        document.getElementById('answer_lower').className = 'hidden'
        document.getElementById('answer_invalid').className = ''
        document.getElementById('answer_correct').className = 'hidden'
    } else if (guessedNum === randomNumber) {
        // You're right!
        document.getElementById('answer_higher').className = 'hidden'
        document.getElementById('answer_lower').className = 'hidden'
        document.getElementById('answer_invalid').className = 'hidden'
        document.getElementById('answer_correct').className = ''
        document.getElementById('answer_correct').innerText = `Yay! You got the answer right in ${numOfGuesses} guesses! 😃👌`
    } else if (guessedNum < randomNumber) {
        // Higher!
        document.getElementById('answer_higher').className = ''
        document.getElementById('answer_lower').className = 'hidden'
        document.getElementById('answer_invalid').className = 'hidden'
        document.getElementById('answer_correct').className = 'hidden'
    } else if (guessedNum > randomNumber) {
        // Lower!
        document.getElementById('answer_higher').className = 'hidden'
        document.getElementById('answer_lower').className = ''
        document.getElementById('answer_invalid').className = 'hidden'
        document.getElementById('answer_correct').className = 'hidden'
    } else {
        // You absolute fucking idiot
        document.getElementById('answer_higher').className = 'hidden'
        document.getElementById('answer_lower').className = 'hidden'
        document.getElementById('answer_invalid').className = ''
        document.getElementById('answer_correct').className = 'hidden'
    }
}
