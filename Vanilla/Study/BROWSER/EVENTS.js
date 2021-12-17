// const h1 = document.querySelector(".hello h1");
// const title = document.querySelector("div.hello:first-child h1");
const h1 = document.querySelector("div.hello:first-child h1");

// console.log(h1);

// h1.style.color = "blue";

//h1 클릭
// function handleh1Click(){
//     // console.log("h1 was clicked!");
// }
function handleTitleClick(){
    h1.style.color="blue";
    // title.style.color="blue";
}

function handleMouseEnter(){
    // console.log("mouse is here!");
    h1.innerText = "Mouse is here!";
    // title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
    // title.innerText="Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}
function handleWindowCopy(){
    //ctrl+c 누를 시 경고창을 띄움
    alert("copier!");
}
function handleWindowOffline(){
    //인터넷이 끊켰을 때 경고창 생성
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOOD");
}


// h1.onclick("click",handleh1Click);
//event를 듣는 것
// title.addEventListener("click",handleh1Click);  
h1.addEventListener("click",handleTitleClick);   
// h1.onclick = handleh1Click;
//mouse를 가져다 대면 Mouse is here!이라는 문자로 바꿈
// title.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseenter",handleMouseEnter);
// h1.onmouseenter= handleMouseEnter;
//mouse를 가져다 대면 Mouse is gone!이라는 문자로 바꿈 
// title.addEventListener("mouseleave",handleMouseLeave);
h1.addEventListener("mouseleave",handleMouseLeave);

// handleh1Click();
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
