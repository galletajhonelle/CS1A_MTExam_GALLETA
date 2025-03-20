//Coding Problem 4: Favorite Number Calculation:
const theFavNumber = 7; 

let userGuess = null;

while (userGuess != theFavNumber) {
    userGuess = Number(prompt("Guess the favorite number:"));
    if (userGuess < theFavNumber) {
        console.log("Your guess is too low.");
    } else if (userGuess > theFavNumber) {
        console.log("Your guess is too high.");
    } else {
        console.log("Correct! You guessed the favorite number.");
    }
}