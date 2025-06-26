var greaterThan = document.getElementById("greater-than");
var equalTo = document.getElementById("equal-to");
var lesserThan = document.getElementById("lesser-than");

var number1Box = document.getElementById("number1");
var number2Box = document.getElementById("number2");

var timer = document.getElementById("timer");

var score = 0;
var time = 30;

generateRandomNumbers();

greaterThan.onclick = () =>{
    if (number1 > number2) {
        score++;
        resetTimer(timerId);
    } else {
        location.href = "./gameover.html?score=" + score;
    }
    generateRandomNumbers();
}

equalTo.onclick = () =>{
    if (number1 == number2) {
        score++;
        resetTimer(timerId);
    } else {
        location.href = "./gameover.html?score=" + score;
    }
    generateRandomNumbers();
}

lesserThan.onclick = () =>{
    if (number1 < number2) {
        score++;
        resetTimer(timerId);
    } else {
        location.href = "./gameover.html?score=" + score;
    }
    generateRandomNumbers();
}

function generateRandomNumbers() {
    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);
    
    number1Box.innerHTML = number1;
    number2Box.innerHTML = number2;
}

var timerId;
function startTimer() {
    time=5;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time <= 0) {
            location.href = "./gameover.html";
        }
        timer.innerHTML = time;
    }, 1000);
}

function resetTimer(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();