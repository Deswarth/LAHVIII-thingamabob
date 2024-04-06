let words = ["DOVE", "KAREL", "ANOMALY", "DESTRUCTOR", "ILLOGICAL", "TEAM FORTRESS TWO"];
let guess = [];
let tries = 5;
let word;

function main() {
  printIntro();
  word = words[Randomizer.nextInt(0, 5)];
}

function printIntro() {
  // Prints the intro text.
  console.log("-------HANGMAN-------");
  console.log("Made By Deswarth");
  console.log(" ");
  console.log("Guess the word!");
}

function guessWord() {
  // Guesses
  let guess = readLine("Input a guess: ");
  checkGuess(guess);
}

function checkGuess(guess) {
  // aa
  for (let i = 0; i < word.length; i++) {
    if 
  }
}

main();
