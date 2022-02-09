const container =  document.querySelector(".image-container")
const startButton =  document.querySelector(".start-button")
const gameText =  document.querySelector(".game-text")
const playTime =  document.querySelector(".play-time")

const tileCount =16;
let tiles=[];

setGame();

function setGame(){
    container.innerHTML = "";
    tiles = createImageTiles();
    tiles.forEach(tile=>container.appendChild(tile))
    setTimeout(()=>{
        container.innerHTML = "";
        suffle(tiles).forEach(tile=>container.appendChild(tile))    
    },2000)
}

function createImageTiles(){
    const tempArray=[];
    Array(tileCount).fill().forEach((_,i)=>{
        const li = document.createElement("li");
        li.setAttribute('data-index',i)
        li.classList.add(`list${i}`);
        container.appendChild(li);
        /*tempArray에 하나씩 배열을 담아 준다*/
        tempArray.push(li)
    }) 
    /*담아지 배열을 return(되돌림)*/
    return tempArray;
}

function suffle(array){
    let index = array.length-1;
    while(index>0){
        /*소수점 삭제*/
        const randomIndex = Math.floor(Math.random()*(index+1));
        [array[index],array[randomIndex]] = [array[randomIndex],array[index]]
        index--;
    }
    return array;
}

//events