//(주석 해제 ctrl+k+u)
const loginForm = document.querySelector("#login-form");
const logininput= document.querySelector("#login-form input");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     //input에 대한 정보를 콘솔창에 출력
//     // console.dir(logininput);

//     const value = logininput.value;
//     if(value===""){
//         alert("Please write your name");
//     }else if(value.length>15){
//         alert("Your name is too long.");
//     }
// }

function onLoginSubmit(event){
    //어떤 이벤트를 명시적으로 처리하지 않은 경우 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 하지 않게 한다
    event.preventDefault(); 
    // console.log(event);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = logininput.value;
    localStorage.setItem("USERNAME_KEY",username);
    paintGreeting(username);
}

// function handleLinckClick(event){
//     event.preventDefault();
//     // console.log(event);
//     console.dir(event);
//     // alert("clicked");
// }

// loginButton.addEventListener("click",onLoginBtnClick);
loginForm.addEventListener("submit",onLoginSubmit);
// link.addEventListener("click",handleLinckClick);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// console.log(savedUsername);

if(savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

}else{
    //show the greetings
    paintGreeting(savedUsername);
}



