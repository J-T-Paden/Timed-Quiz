var questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'Hyper Text Markup Language', correct: true},
            {text: 'Hyper Technical Markup Language', correct: false }
        ]
    }
]

var randomQuestions
var currentQuestion
var timer = document.getElementById("timer")
var startButton = document.getElementById("start")
var questionContainerEl = document.getElementById("question-container");
function setNextQuestion() {

}

function selectAnswer() {


}
// specify where the timer starts at
var timeLeft = 75;
// add function for start button
function startTest() {
// stop hiding questions once test has started
    questionContainerEl.classList.remove("hide");
    startButton.classList.add("hide");
// begin decreasing timer as test starts
var timeInterval = setInterval(function () {
    timeLeft--;
// display the time left on the timer element
    timer.textContent = timeLeft + " seconds remaining";
// when the time reaches 0, stop the timer
    if (timeLeft === 0) {
    clearInterval(timeInterval);
    window.alert("Time is up! Your test is complete")
    }
    }, 1000);
}
// start the timer once the start button is clicked
    startButton.addEventListener("click", startTest);