// const title = document.querySelector(".hello h1");
const title = document.querySelector("div.hello:first-child h1");

console.log(title);

// title.style.color = "blue";

//title 클릭
function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color="blue";
}

function handleMouseEnter(){
    // console.log("mouse is here!");
    title.innerText = "Mouse is here!"
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

//event를 듣는 것
title.addEventListener("click",handleTitleClick);
//mouse를 가져다 대면 Mouse is here!이라는 문자로 바꿈
title.addEventListener("mouseenter",handleMouseEnter);
//mouse를 가져다 대면 Mouse is gone!이라는 문자로 바꿈 
title.addEventListener("mouseleave",handleMouseLeave);

handleTitleClick()
