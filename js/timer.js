var myVar;
var timer = document.getElementById("userInput");
var countDownSeconds;
function startTime(){ 
  myVar = setInterval(start, 1000);
  document.getElementById("timerr").innerHTML = timer.value + "s";
  countDownSeconds = timer.value;
} 

function start(){
  countDownSeconds--;
  document.getElementById("timerr").innerHTML = countDownSeconds + "s";
  if (countDownSeconds == -1){
    stop();
    document.getElementById("timerr").innerHTML = "FINISHED :D";
    var audio = new Audio('audio/wakeup.mp3');
    audio.play();
  }
}

function stop(){
  clearInterval(myVar);
}

function convertToSeconds() {
    inputVal = document.getElementById("userInput1").value;
    document.getElementById("numberOfHours").innerHTML = inputVal * 3600;

}

function convertToSeconds2() {
    inputVal = document.getElementById("userInput2").value;
    document.getElementById("numberOfMinutes").innerHTML = inputVal * 60;

}

function add() {
    var num1, num2, sum;
    num1 = parseInt(document.getElementById("userInput3").value);
    num2 = parseInt(document.getElementById("userInput4").value);
    sum = num1 + num2;
    document.getElementById("totalSeconds").innerHTML = sum;
  }