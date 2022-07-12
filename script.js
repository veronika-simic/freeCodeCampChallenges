const caps = document.querySelectorAll('.cap');
console.log(caps);

caps.forEach(cap => {cap.addEventListener('click', ()=>{
    if (cap.classList.contains('left')){
        cap.classList.remove('left');
    } else {
        cap.classList.add('left');
    }
   
})})

caps.forEach(cap => {cap.addEventListener('click', ()=> {
    if (cap.classList.contains('cap-red') && cap.classList.contains('left')){
        ctx.strokeStyle = 'red';
    } else if (cap.classList.contains('cap-green') && cap.classList.contains('left')){
        ctx.strokeStyle = 'green';
    } else if (cap.classList.contains('cap-blue') && cap.classList.contains('left'))  {
        ctx.strokeStyle = 'blue';
    } else {
        ctx.strokeStyle = 'black';
    }
})})


/* canvas */
const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');
const canvasOffsetX = canvas.offsetLeft; /* distance from the left */
const canvasOffsetY = canvas.offsetTop;  /* distance from top */
canvas.width = window.innerWidth - canvasOffsetX; /* width of canvas */
canvas.height = window.innerHeight - canvasOffsetY; /* height of canvas */

let isDrawing = false /* is user drawing */
let lineWidth = 5; /* line width 5px */
let startX;
let startY;
/* toolbar */


/* when user clicks clear button */
toolbar.addEventListener('click', (e) => {
    if(e.target.id === 'clear'){
        ctx.clearRect(0,0, canvas.width, canvas.height)
    }
})



/* change color of input */
toolbar.addEventListener('change', (e) => {
    /* change width of line */
    if (e.target.id === 'lineWidth'){
        lineWidth = e.target.value;
    }
})

const draw = (e) => {
    if (!isDrawing){
        return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', (e) => {
    isDrawing = false;
    ctx.stroke(); /* draws the path */
    ctx.beginPath();
})

canvas.addEventListener('mousemove', draw);
