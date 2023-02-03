
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector("body")
//  console.log(btnStart)
//  console.log(btnStop)
// console.log(bodyColor)
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
let intervalId = null;

btnStart.addEventListener("click", startColorChange);
btnStop.addEventListener("click", stopColorChange);

function startColorChange (){
    intervalId = setInterval(onChangeColorButtonClick, 1000);
    btnStart.toggleAttribute('disabled');
}

function onChangeColorButtonClick () {
  bodyColor.style.backgroundColor = getRandomHexColor();
}

function stopColorChange (){
    clearInterval(intervalId);
    btnStart.removeAttribute('disabled');
}