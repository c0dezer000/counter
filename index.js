const counts = document.getElementById("counts")
const decreaseBtn = document.getElementById("decrease")
const resetBtn = document.getElementById("resets")
const increaseBtn = document.getElementById("increase")
const countColor = document.querySelector("counts")


let count = 0 
function increase(){
    count ++
    counts.textContent = count
    colorChecker()
}
function decrease(){
   count--
   counts.textContent = count
   colorChecker()
}
function resets(){
    count = 0
    counts.textContent = "0"
    colorChecker()
}
function colorChecker(){
    if(count > 0){
        counts.style.color = "green"
    }
    else if(count < 0){
        counts.style.color = "red"
    }
    else{
        counts.style.color = "black"
    }
}