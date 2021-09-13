function guessingGame() {
    const randNum = Math.floor(Math.random() * 100);
    let count = 0;
    let over = false;
    return function game(guess){
        if(over) return "The game is over, you already won!"
        count++
        if(guess === randNum) {
            over = true;
            return `You win! You found ${randNum} in ${count} guesses.`
        }
        else if(guess < randNum) return `${guess} is too low!`
        else if(guess > randNum) return `${guess} is too high!`
    }
}

module.exports = { guessingGame };
