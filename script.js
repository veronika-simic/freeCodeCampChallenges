const caps = document.querySelectorAll('.cap');
console.log(caps);

caps.forEach(cap => {cap.addEventListener('click', ()=>{
    if (cap.classList.contains('left')){
        cap.classList.remove('left');
    } else {
        cap.classList.add('left');
    }
   
})})



const canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');
let isDrawing = false /* is user drawing */
let lineWidth = 5; /* line width 5px */
let startX;
let startY;
