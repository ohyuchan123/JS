const container =  document.querySelector(".image-container")
const startButton =  document.querySelector(".start-button")
const gameText =  document.querySelector(".game-text")
const playTime =  document.querySelector(".play-time")

const tileCount =16;

let tiles=[];
const dragged={
    el:null,
    class:null,
    index:null,
}
let isPlaying = false;
let timeInterval = null;
let time = 0;

//functions
function checkStatus(){
    const currenList=[...container.children];
    const unMatchedList =  currenList.filter((li,index)=>Number(child.getAttribute("data-index")) !== index)
    if(unMatchedList.length === 0)
    {
        //game finish
        gameText.style.display = "block";
        isPlaying = false;
        clearInterval(timeInterval);
    }
}

function setGame(){
    isPlaying = true;
    time =0;
    container.innerHTML = "";
    gameText.style.display = 'none';
    clearInterval(timeInterval);
    timeInterval = setInterval(()=>{
        playTime.innerText = time;
        time++;
    },1000)

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
        li.setAttribute('draggable','true')
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
container.addEventListener('dragstart',e=>{
    if(isPlaying===false){
        return;
    }
    // console.log(e);
    const obj = e.target;
    dragged.el = obj;
    dragged.class = obj.className;
    console.log(typeof obj.parentNode.children);
    dragged.index = [...obj.parentNode.children].indexOf(obj);
})
container.addEventListener('dragover',e=>{
    /*이벤트가 발생하지 않도록*/
    e.preventDefault()
    console.log('over');
})
container.addEventListener('drop',e=>{
    // console.log('dropped');
    const obj = e.target;


    if(obj.className !== dragged.class){
        let originPlace;
        let isLast = false;
    
        if(dragged.el.nextSibling){
            originPlace = dragged.el.nextSibling;
        }else{
            originPlace = dragged.el.previousSibling;
            isLast = true;
        }

        const droppedIndex = [...obj.parentNode.children].indexOf(obj);
        dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el)
        isLast ? originPlace.after(obj) : originPlace.before(obj)
    }
    checkStatus();
})

startButton.addEventListener('click',()=>{
    setGame();
})