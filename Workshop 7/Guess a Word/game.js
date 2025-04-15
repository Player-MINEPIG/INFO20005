function showElement(elementId) {
    document.getElementById(elementId).style.display = "block";
}

function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none";
}

var guessLeft = 10;
function difficultylEasy() {
    guessLeft = 10;
    hideElement("chooseDifficulty");
    showElement("startButton");
}

function difficultyMedium() {
    guessLeft = 5;
    hideElement("chooseDifficulty");
    showElement("startButton");
}

function difficultyHard() {
    guessLeft = 3;
    hideElement("chooseDifficulty");
    showElement("startButton");
}

var wordToGuess;
function startGame() {
    document.getElementById("guessesLeft").innerHTML = "guesses left: " + guessLeft;
    hideElement("startButton");
    showElement("mainGame");
    showElement("RRguess");
    wordToGuess = getRandomWord();
}

function getRandomWord() {
    var randomWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "holiday", "glorious", "weigh", "brake", "pretty", "grin", "capricious", "bite-sized", "misty", "ignore", "certain", "sloppy", "dress", "true", "zonked", "observation", "action", "various", "want", "direful", "suck", "dress", "scarecrow", "judge", "madly", "quizzical", "consist", "fierce", "love", "arrest", "serve", "fit", "hug", "tan", "curve", "eatable", "tub", "race", "innocent", "open", "preach", "steady", "acoustics", "lock", "field", "arrange", "rifle", "learned", "toe", "flow", "competition", "ill-fated", "oatmeal", "match", "male", "measure", "loaf", "smile", "wrestle", "dull", "food", "locket", "bell", "beg", "strengthen", "responsible", "enchanting", "loutish", "switch", "idea", "nine", "squeamish", "pig", "bat", "dear", "trains", "owe", "frogs", "assorted", "lonely", "hurry", "natural", "sun", "snow", "obnoxious", "broken", "friend", "bright", "cake", "sour", "permit", "economic", "lovely", "quick", "van", "tempt", "apparel", "decay", "business", "adjustment", "blushing", "makeshift", "slippery", "load", "winter", "exist", "tongue", "country", "roll", "fast", "moor", "possess", "pat", "pass", "books", "impartial", "hospitable", "dust", "naughty", "extra-large", "tacky", "produce", "committee", "fuzzy", "judicious", "nebulous", "stick", "ear", "copy", "friendly", "press", "distinct", "vegetable", "upset", "venomous", "statement", "sulky", "spell", "x-ray", "square", "taste", "great", "thumb", "adjoining", "chilly", "test", "ancient", "green", "badge", "work", "repeat", "free", "elderly", "doctor", "difficult", "grubby", "approval", "turn", "vivacious", "thundering", "cherries", "rest", "plan", "crime", "sticks", "wealthy", "phone", "suspend", "gullible", "fence", "note", "wall", "interest", "coil", "jump", "enchanted", "funny", "racial", "greasy", "polish", "elbow", "smart", "bore", "crowd", "glistening", "oval", "eggs", "nauseating", "detailed", "veil", "coal"];
    return randomWords[Math.floor(Math.random() * randomWords.length)];
}

var rightGuess = [];
var wrongGuess = [];
function enterGuess() {
    var guess = document.getElementById("guess").value;
    if (guess === wordToGuess) {
        rightGuess.push(guess);
        getRandomWord();
    } else {
        guessLeft--;
        wrongGuess.push(guess);
    }
    if (guessLeft === 0) {
        if (rightGuess.length === 0) {
            hideElement("mainGame");
            hideElement("RRguess");
            showElement("youLose");
        } else {
            hideElement("mainGame");
            hideElement("RRguess");
            showElement("youWin");
        }
    }
    document.getElementById("rightGuess").innerHTML = "right guesses: " + rightGuess.join(", ");
    document.getElementById("wrongGuess").innerHTML = "wrong guesses: " + wrongGuess.join(", ");
    document.getElementById("guessesLeft").innerHTML = "guesses left: " + guessLeft;
}

function restart() {
    rightGuess = [];
    wrongGuess = [];
    guessLeft = 10;
    hideElement("mainGame");
    hideElement("RRguess");
    hideElement("youLose");
    hideElement("youWin");
    showElement("chooseDifficulty");
}