//document는 Javascript에서 HTML에 접근할 수 있는 방법
//getElementById란 함수를 통해서 id로 element를 가져 올 수 있다
const title = document.getElementById("title");
// (결과) : <h1 id="title">Grab me!</h1>

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);