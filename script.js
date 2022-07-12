const markers = document.querySelectorAll('.marker');
console.log(markers);
markers.forEach(marker => {marker.addEventListener('click', ()=>{
    if (marker.firstElementChild.classList.contains('left')){
        marker.firstElementChild.classList.remove('left');
    } else {
        marker.firstElementChild.classList.add('left');
    }
   
})})

const stroke = document.getElementById('stroke')

/* change color of stroke based on marker color */

for (let i = 0; i < markers.length; i++){
    markers[i].addEventListener('click', ()=> {
        if (markers[i].firstElementChild.classList.contains('left')) {
            if (markers[i].classList.contains('red')){
                ctx.strokeStyle = 'red';
                stroke.style.backgroundColor = 'red'; 
            } else if (markers[i].classList.contains('green')){
                ctx.strokeStyle = 'green';
                stroke.style.backgroundColor = 'green';
            } else if (markers[i].classList.contains('blue')) {
                ctx.strokeStyle = 'blue';
                stroke.style.backgroundColor = 'blue';
            } else {
                ctx.strokeStyle = 'black';
                stroke.style.backgroundColor = 'black'
            }
        }
        
    })
}

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
