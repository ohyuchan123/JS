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