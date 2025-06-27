let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptText = document.getElementById("attempts");

  attempts++;

  if (userGuess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    attemptText.textContent = `You guessed it in ${attempts} tries.`;
  } else if (userGuess > secretNumber) {
    message.textContent = "📉 Too high! Try again.";
  } else if (userGuess < secretNumber) {
    message.textContent = "📈 Too low! Try again.";
  } else {
    message.textContent = "Please enter a valid number.";
  }
}
