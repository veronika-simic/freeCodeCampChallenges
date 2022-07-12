const caps = document.querySelectorAll('.cap');
console.log(caps);

caps.forEach(cap => {cap.addEventListener('click', ()=>{
    if (cap.classList.contains('left')){
        cap.classList.remove('left');
    } else {
        cap.classList.add('left');
    }
   
})})


/* canvas */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const canvasOffsetX = canvas.offsetLeft; /* distance from the left */
const canvasOffsetY = canvas.offsetTop;  /* distance from top */
canvas.width = window.innerWidth - canvasOffsetX; /* width of canvas */
canvas.height = window.innerHeight - canvasOffsetY; /* height of canvas */

let isDrawing = false /* is user drawing */
let lineWidth = 5; /* line width 5px */
let startX;
let startY;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', (e)=> {
    isDrawing = false;
    ctx.stroke(); /* draws the path */
    ctx.beginPath();
})

canvas.addEventListener('mousemove', draw);
const draw = (e) => {
    if (!isDrawing){
        return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}