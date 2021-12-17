const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    //현재 h1의 색을 나타냄
    // console.log(h1.style.color);
    //h1의 색을 설정
    // h1.style.color="blue";
    // console.log(h1.style.color); 

    // const currentColor = h1.style.color;
    // let newColor;

    // //===는 일치함을 확인하는 것
    // if(h1.style.color==="blue"){
    //     // h1.style.color="tomato";
    //     newColor="tomato";
    // }else{
    //     // h1.style.color="blue";
    //     newColor="blue";
    // }
    // h1.style.color=newColor;


    //h1에 ative class를 전달하는 방법
    // h1.className="active";
    //className이 active일때 참이면 className을 없애고 거짓이면 다시 className을 생성 
    if(h1.className==="active"){
        h1.className="";
    }else{
        h1.className="active";
    }
}
h1.addEventListener("click",handleTitleClick);