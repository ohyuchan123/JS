const title = document.querySelector(".hello h1");

console.log(title);

// title.style.color = "blue";

//title 클릭
function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color="blue";
}

//event를 듣는 것
title.addEventListener("click",handleTitleClick);

handleTitleClick()
