// 사용변수
let score = 0;
let time = 0;
let isPlaying = false;

const wordinput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');

wordinput.addEventListener('input',()=>{
    if(wordinput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        score++;
        scoreDisplay.innerText = score;
        wordinput.value="";
    }
})

setInterval(countDown,1000);

function countDown(){
    time > 0 ? time-- : isPlaying = false;
    timeDisplay.innerText = time;
}

function buttonChange(text){
    button.innerText = text;
}