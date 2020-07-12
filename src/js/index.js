const word = document.getElementById('word')
const text = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const endgameEl = document.getElementById('end-game-container')
const settingBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficultySelect = document.getElementById('difficulty')


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
scoreEl.innerHTML = score;

let time = 10;
timeEl.innerHTML = time + 's';

let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

difficultySelect.value = difficulty;

text.focus();

const timeInterval = setInterval(updateTime, 1000);

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

function updateTime() {
    time--;

    timeEl.innerHTML = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    endgameEl.innerHTML = `
        <h1>Time Ran Out</h1>
        <p>You Final Score is ${score} at ${difficulty} Level!</p>
        <button onclick="location.reload()">Reload</button>
    `;

    endgameEl.style.display = 'flex'
}



text.addEventListener('input', e => {

    const insertedText = e.target.value;

    if (insertedText == randomword) {
        addWord();
        updateScore();
        e.target.value = '';

        if (difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 3;
        } else {
            time += 5;
        }

        updateTime();
    }
})


settingBtn.addEventListener('click', () => {
    settings.classList.toggle('hide')
})

settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})



addWord();