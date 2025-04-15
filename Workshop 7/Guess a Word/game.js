function showElement() {
    document.getElementById("bottonToHide").style.display = "block";
}

function hideElement() {
    document.getElementById("bottonToHide").style.display = "none";
}

var wordToGuess = "";

function GetRandomWord() {
  var randomWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "perfect"]

    /* Write code here to generate a random number and asign to wordToGuess the corresponding word */
    wordToGuess = randomWords[Math.floor(Math.random() * randomWords.length)];
  
  document.getElementById("randomWordLable").innerHTML = wordToGuess;
  
}

var guessLives = 0;

function startEasy() {
  
    /* Assign the number of guesses to guessLives */
    guessLives = 10;
  
  document.getElementById("livesLabel").innerHTML = guessLives;
}

function startNormal() {
  
    /* Assign the number of guesses to guessLives */
    guessLives = 5;
  
  document.getElementById("livesLabel").innerHTML = guessLives;
}

function startHard() {
  
    /* Assign the number of guesses to guessLives */
    guessLives = 3;
  
  document.getElementById("livesLabel").innerHTML = guessLives;
}

function submitGuess() {
    var guessChar = document.getElementById("guessInput").value;
    checkGuess(guessChar);
}

var correctGuess = [];
var wrongGuess = [];

function checkGuess(guessChar) {
    if (wordToGuess === guessChar) {
        correctGuess.push(guessChar);
        document.getElementById("correctGuessLabel").innerHTML = correctGuess.join(", ");
    } else {
        wrongGuess.push(guessChar);
        guessLives--;
        document.getElementById("livesLabel").innerHTML = guessLives;
    }
    document.getElementById("wrongGuessLabel").innerHTML = wrongGuess.join(", ");
}

function restart() {
    correctGuess = [];
    wrongGuess = [];
    document.getElementById("correctGuessLabel").innerHTML = "";
    document.getElementById("wrongGuessLabel").innerHTML = "";
    wordToGuess = "";
    document.getElementById("randomWordLable").innerHTML = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("livesLabel").innerHTML = "";
}