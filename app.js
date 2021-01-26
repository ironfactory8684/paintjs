const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 700
canvas.height = 700

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5

let isPainting = false;
prevPos = [];
userStrokeStyle = '#EE92C2';    
line = [];

function onMouseMove(event){

    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    const x = event.offsetX;
    const y = event.offsetY;
    isPainting = true
    prevPos.push([x,y])
    console.log("processing..")
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;    
    if(!isPainting){
        ctx.beginPath();
        ctx.moveTo(x,y)
    }

}

function onMouseUp(event){
    const x = event.offsetX;
    const y = event.offsetY;       
    ctx.lineTo(x,y);
    ctx.stroke();        
}

function onMousedb(event){
    if(isPainting){
    const x = event.offsetX;
    const y = event.offsetY;   
    prevPos.push([x,y])    
    const pre_x = prevPos[0][0]
    const pre_y = prevPos[0][1]
    ctx.beginPath();
    ctx.moveTo(x,y)
    ctx.lineTo(pre_x,pre_y)
    ctx.stroke();      
    isPainting=false
    }
}



if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("dblclick", onMousedb)
}

// First path

