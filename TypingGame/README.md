# 공부 내용 정리

```js
const GAME_TIME = 6;
let score = 0;
let time = GAME_TIME;
// let time =9;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words =[];

const wordinput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');
```
GAME_TIME -> 제한 시간   
score -> 점수   
isPlaying -> 버튼을 누르기전 상태를 false로 지정   
timeInterval-> 시간에 간격을 줌   
words -> 배열을 만들어줌   

```js
init();

function init(){
    buttonChange('게임 로딩중....');
    getWords();
    wordinput.addEventListener('input',checkMatch);
}

// 게임 실행
function run(){
    if(isPlaying){
        return;
    }
    isPlaying =true;
    time=GAME_TIME;
    wordinput.focus();
    scoreDisplay.innerText=0;
    timeInterval = setInterval(countDown,1000);
    checkInterval = setInterval(checkStatus,50);
    buttonChange('게임 중');
}
```
function run() -> 게임을 실행 시키는 함수   
buttonChange -> 버튼을 클릭했을 때 게임 로딩중이라고 뜨도록 버튼을 체인지   
getWords -> 함수를 불러옴   
addEventListener -> addEventListener는 document의 특정요소(Id,class,tag 등등..) event(ex - click하면 함수를 실행하라, 마우스를 올리면 함수를 실행하라 등등.. )를 등록할 때 사용합니다.   
if(isPlaying) -> isPlaying이면 값을 반환   
isPlaying -> isPlaying을 true로 바꿔줌으로서 게임을 실행
scoreDisplay.innerText=0; -> 점수의 초기 값을 0으로 지정   
timeInterval = setInterval(countDown,1000); -> 시간이 줄어드는 간격을 1000으로 지정   

```js
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
    axios.get('https://random-word-api.herokuapp.com/word?number=10000')
    .then(function (response) {
        // handle success
        response.date.forEach((word)=>{
            if(word.length<10){
                words.push(word);
            }
        })
        console.log(words)
        buttonChange('게임 시작');
        // console.log(response.date);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    // words = ['display','convince','consensus','affordable','price','purchase'];
    buttonChange('게임시작')
}
```
funtion getWords() -> 단어를 불러오는 함수
axios.get('~~') -> 랜덤으로 단어장을 만들어준 사이트를 불러와줌

```js
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
```