// 사용변수
const GAME_TIME = 3;
let score = 0;
let time = GAME_TIME;
// let time =9;
let isPlaying = false;
let timeInterval;

const wordinput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('button');

wordinput.addEventListener('input',()=>{
    if(wordinput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        score++;
        scoreDisplay.innerText = score;
        wordinput.value="";
    }
})

buttonChange('게임 시작')

function run(){
    isPlaying =true;
    timeInterval = setInterval(countDown,1000);
}

function countDown(){
    time > 0 ? time-- : isPlaying = false;
    if(!isPlaying){
        clearInterval(timeInterval);
    }
    timeDisplay.innerText = time;
}


function buttonChange(text){
    button.innerText = text;
    text === '게임 시작' ? button.classList.remove('loading') : button.classList.add('loading');
}