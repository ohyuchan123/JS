const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseEnter(event){
    const x= event.offsetX;
    const y =event.offsety;
}
function onmousedown(event){
    painting = true;
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseEnter);
    canvas.addEventListener("mosedown",onmousedown);
}