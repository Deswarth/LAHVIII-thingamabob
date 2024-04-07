let words = ["DOVE", "KAREL", "ANOMALY", "DESTRUCTOR", "ILLOGICAL", "HANG MAN", "STACK", "OPERATOR", "OVERVIEW", "FAILURE", "DIVISION", "LOS ALTOS", "MAJOR LEAGUE HACKING"];
let correct = [];
let attempt = [];
let tries = 6;
let word = null;
let isCorrect = false;
let isAllCorrect = false;

function main() {
  printIntro();
  initGuessing();
  console.log();
  while (tries != 0) {
    console.log("Tries Left: " + tries);
    guessWord();
    checkWord();
    if (isAllCorrect) {
        break;
    }
    console.log(attempt.join(" "));
    console.log();
  }
  if (isAllCorrect) {
      console.log("You win!");
  } else {
      console.log("You lost!");
  }
  console.log("The word was: " + word);
}

function printIntro() {
  // Prints the intro text
  console.log("-------HANGMAN-------");
  console.log("Made By Deswarth");
  console.log(" ");
  console.log("Guess the word!");
}

function initGuessing() {
  // Initializes the arrays necessary
  word = words[Math.round(Math.random()*12)];
  correct = word.split("");
  for (let i = 0; i < word.length; i++) {
    if (correct[i] == " ") {
      attempt.push(" ");
    } else {
      attempt.push("_");
    }
  }
}

function guessWord() {
  // Allows the user to guess one letter (this may not work for everyone)
  let guess = prompt ("Input a letter: ");
    while (guess.length > 1) {
        console.log("Invalid input.");
        guess = prompt ("Input a letter: ");
    }
    checkGuess(guess);
  
}

function checkGuess(guess) {
  // Checks to see if the inputted guess was correct
  isCorrect = false;
  for (let i = 0; i < correct.length; i++) {
    if (guess.toUpperCase() == correct[i]) {
      attempt[i] = correct[i];
      isCorrect = true;
    }
  }
  if (!isCorrect) {
      console.log("Incorrect");
      tries -= 1;
  } else {
      console.log("Correct");
  }
}

function checkWord() {
    // Determines if the guessed letters match the final word
    if (attempt.join() == correct.join()) {
        isAllCorrect = true;
    }
}

main();
