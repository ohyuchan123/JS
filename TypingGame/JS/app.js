// const { set } = require("mongoose");

// 사용변수
const GAME_TIME = 6;
let score = 0;
let time = GAME_TIME;
// let time =9;
let isPlaying = false;
let timeInterval;
let words =[];
let checkInterval;

const wordinput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init(){
    buttonChange('게임 로딩중....');
    getWords();
    wordinput.addEventListener('input',checkMatch);
}

// 게임 실행
function run(){
    isPlaying =true;
    time=GAME_TIME;
    wordinput.focus();
    scoreDisplay.innerText=0;
    timeInterval = setInterval(countDown,1000);
    checkInterval = setInterval(checkStatus,50);
    buttonChange('게임 중');
}


function checkStatus(){
    if(!isPlaying && time ===0){
        buttonChange('게임 시작');
        clearInterval(checkInterval);
    }
}

//단어 불러오기
function getWords(){
    /*단어장 불러올 예정*/
    // Make a request for a user with a given ID
    axios.get('https://random-word-api.herokuapp.com/word?number=100')
    .then(function (response) {
        // handle success
        response.date.foreach((word)=>{
            if(word.length<10){
            words.push(word);
            console.log(word);
        }
    });
    buttonChange('게임 시작');
    console.log(words);
    // console.log(response.date);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
    // words = ['display','convince','consensus','affordable','price','purchase'];
    buttonChange('게임시작');
}

//단어일치 체크
function checkMatch(){
        if(wordinput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
            wordinput.value="";
            if(!isPlaying){
                return;
            }
            score++;
            scoreDisplay.innerText = score;
            time=GAME_TIME;
            const randomIndex = Math.floor(Math.random()*words.length);
            wordDisplay.innerText = words[randomIndex];
    }
}

buttonChange('게임 시작');

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