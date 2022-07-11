const caps = document.querySelectorAll('.cap');
console.log(caps);

caps.forEach(cap => {cap.addEventListener('click', ()=>{
    cap.style.left = '-100px';
})})

