
var wordBreakfast = [
    "pancake",
    "french toast",
    "eggs",
    "waffles",
];

var randomWord = wordBreakfast[Math.floor(Math.random() * wordBreakfast.length)];
var wins = 0;


console.log(randomWord);
var guessed = [];
var dashes = [];
for (var i = 0; i < randomWord.length; i++) {
    dashes.push("-");
};

console.log(dashes);

document.onkeydown = function (event) {
    //console.log(event.key);

    for (var i = 0; i < randomWord.length; i++) {
        if (event.key === randomWord[i]) {
            console.log(randomWord[i]);
            dashes[i] = randomWord[i];
        }
    }

    document.getElementById('guessedLetters').append(event.key);
    document.getElementById('wins').append(event.key);

    console.log(dashes);
};





