const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 500
canvas.height = 343

ctx.strokeStyle = "#FFFF00"
ctx.lineWidth = 2.5

let isPainting = false;
prevPos = [];
userStrokeStyle = '#EE92C2';
lastPos = [];

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!isPainting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    if (prevPos.length>2){
        var step;
        for(step=0; step<prevPos.length-1; step++){
        const [first_x1,first_y1] =prevPos[step]
        const [first_x2,first_y2] =prevPos[step+1]
        const [last_x,last_y] =prevPos[prevPos.length-1]
        if(intersects(first_x1,first_y1,first_x2,first_y2,last_x,last_y,x,y)){
            alert("선분이 서로 교차하고 있습니다.")
        }}}
}

function onMouseClick(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
    lastPos.push([x, y])
    isPainting = true
    prevPos.push([x, y])

}

function onRightClick(event) {
    if (isPainting) {
        var step;
        var state = 0;
        for(step=0; step<prevPos.length-1; step++){
        const [first_x,first_y] =prevPos[0]            
        const [first_x1,first_y1] =prevPos[step]
        const [first_x2,first_y2] =prevPos[step+1]
        const [last_x,last_y] =prevPos[prevPos.length-1]       
        if(intersects(first_x1,first_y1,first_x2,first_y2,last_x,last_y,first_x,first_y)){
            state = state+1
        }
        }
        if(state){
            alert("선이 교차하면 도형이 완성되지 않습니다.")
        }
        else{
        ctx.closePath();
        ctx.stroke();
        isPainting = false
        prevPos = [];
    }
        
    }
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//https://www.python2.net/questions-127770.htm
function intersects(a,b,c,d,p,q,r,s) {
    var det, gamma,lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
      return false;
    } else {
      lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
      gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
      return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
  };

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("click", onMouseClick)
    canvas.addEventListener("contextmenu", onRightClick)
}

// First path

