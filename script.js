const caps = document.querySelectorAll('.cap');
console.log(caps);

caps.forEach(cap => {cap.addEventListener('click', ()=>{
    if (cap.classList.contains('left')){
        cap.classList.remove('left');
    } else {
        cap.classList.add('left');
    }
   
})})



