# 공부 내용 정리
EVENT.JS   
console.log에서 body에 매우 쉽게 접근 할 수 있다.  
body는 특별해서 콘솔창에서 document.body로 호출이 가능하다

EVENTS.js에서 창을 줄이면 색이 변한다 (12/16)

---
CSS IN JAVASCRIPT.JS
const는 상수 변하지 않는 값
let은 변수 값이 변하는 값

h1에 active class를 javascript에 전달하는 방법과
className을 변경하고 제거하고 추가하는지 배웠다
클릭했을때 class를 css를 이용하여 다르게 하여 색을 바꾸는 식의 공부를 하였다

classlist는 class들의 목록으로 작업할 수 있겠금 허용해준다
className은 그냥 모든 것을 교체해버린다 이전에 class들은 상관하지 않고

Classlist.js   
toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
만약 h1의 classList에 존재하지 않는다면,  불빛이 나오고 다시
한번 누르면 꺼진다   
(12/17)

---
(html)에서는 input과 button을 만드는 방법을 배웠고  
(js)에서는 preventDefault에 대한 사용법 login을 어떻게 하는 지에 대해 간단하게 배웠다  
(12/18)   

---
localStorage는 브라우저에 뭔가를 저장할 수 있게 해준다.  
그래서 나중에 가져다가 쓸 수 있게 도와준다.  
setitem을 활용하면 local storage에 정보를 저장할 수 있다. 
local storage가 비어 있으면 form부터 보여주면서 지금까지 해오던 걸 하면 되고 local storage에 유저정보가 있으면 form을 보여주면 안된다. 
h1요소 부터 보여줘야 한다.      
local storage는 F12 elements application에 위치해 있다.   
(12/20)

---

sayInterval은 두 개의 argument를 받아 첫번째 argument는 내가 실행하고자 하는 function이고   
두번째 argument는 호출되는 function 간격을 몇 ms(milliseconds)로 할 찌 쓰면 된다.   
시계 만드는 법에 대해 공부하였다
clock.js
(12/21)