var timer = document.getElementById("timer")
var startButton = document.getElementById("start")
// specify where the timer starts at
var timeLeft = 75;
// declare a function to add logic to "start" button
function startTest() {
var timeInterval = setInterval(function () {
    timeLeft--;

    timer.textContent = timeLeft + "seconds remaining";
// when the time reaches 0, stop the timer
    if (timeLeft === 0) {
    clearInterval(timeInterval);
    }
    }, 1000);
}
// start the timer once the start button is clicked
    startButton.addEventListener("click", startTest);