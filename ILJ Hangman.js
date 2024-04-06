let words = ["DOVE", "KAREL", "ANOMALY", "DESTRUCTOR", "ILLOGICAL"];
let correct = [];
let attempt = [];
let tries = 6;
let word;
let isCorrect;
let shouldBreak = false;;

function main() {
  printIntro();
  initGuessing();
  console.log(word);
  //console.log(attempt);
  while (tries != 0) {
    console.log("Tries Left: " + tries);
    guessWord();
    checkWord();
    if (shouldBreak) {
        break;
    }
  }
  console.log("The word was: " + word);
  //console.log(attempt);
}

function printIntro() {
  // Prints the intro text.
  console.log("-------HANGMAN-------");
  console.log("Made By Deswarth");
  console.log(" ");
  console.log("Guess the word!");
}

function initGuessing() {
  word = words[Randomizer.nextInt(0, 4)];
  correct = word.split("");
  for (let i = 0; i < word.length; i++) {
    attempt.push("_");
  }
}

function guessWord() {
  // Guesses
  let guess = readLine ("Input a letter: ");
    while (guess.length > 1) {
        console.log("Invalid input.");
        guess = readLine ("Input a letter: ");
    }
    checkGuess(guess);
  
}

function checkGuess(guess) {
  // aa
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
    if (attempt.join() == correct.join()) {
        console.log("You win!");
        shouldBreak = true;
    }
}

main();
