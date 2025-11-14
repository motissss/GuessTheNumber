const numberInput = document.getElementById("guess");
const button = document.getElementById("enter");
const output = document.getElementById("output");
let min = 1;
let max = 100;
const secretNumber = Math.floor(Math.random() * (max - min + 1));

button.addEventListener("click", guessingTheNumber,);
function guessingTheNumber() {
    const guess = Number(numberInput.value);
    guess.count
    if (guess < secretNumber) {
        output.innerHTML = "Number too low. Try again";
    } else if (guess > secretNumber) {
        output.innerHTML = "Number too high. Try again";
    } else {
        console.log(guess)
        output.innerHTML = "Congratulations, you guessed the number! You took: ???? Guesses";
    }
}
