const cap = document.querySelector('.cap');
console.log(cap)
function moveCap(){
    cap.style.backgroundColor = 'blue';
}

cap.addEventListener("click", moveCap)