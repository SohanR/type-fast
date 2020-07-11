const word = document.getElementById('word')
const text = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const endgameEl = document.getElementById('end-game-container')
const settingBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficulty = document.getElementById('difficulty')


// word list
const words = [
    'developer',
    'javascript',
    'firefox',
    'pink floyd',
    'comfortable',
    'moon',
    'dark',
    'money',
    'react',
    'love',
    'nothing',
    'damage',
    'programming',
    'affiliate',
    'digital',
    'freelancing',
    'marketplace',
    'atom',
    'time'
];

let randomword;

let score = 0;

let time = 0;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}


function addWord() {
    randomword = getRandomWord()
    word.innerHTML = randomword;
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}






text.addEventListener('input', e => {

    const insertedText = e.target.value;

    if (insertedText == randomword) {
        addWord();
        updateScore();
        e.target.value = '';
    }
})



addWord();