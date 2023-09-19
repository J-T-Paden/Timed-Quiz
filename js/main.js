    var questions = [
        {question: 'What is 1+1?',
        answers: ['2', '3', '4', '5'],
        correct: '2'
    },
        {question: 'What is 2+2?', 
        answers: [{text:'22', correct: false}, {text: '4', correct: true}, {text:'3', correct: false}, {text: '5', correct: false}]},
        {question: 'What is 3+3?',
        answers: [{text: '4', correct: false}, {text: '3', correct: false}, {text: '33', correct: false}, {text: '6', correct: true}]},
    ]
// var randomQuestions = questions[Math.floor(Math.random() * questions.length)].question;
var currentQuestion =0;
var timer = document.getElementById("timer")
var startButton = document.getElementById("start")
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtn1 = document.getElementById("choiceBtn1");
var answerBtn2 = document.getElementById("choiceBtn2");
var answerBtn3 = document.getElementById("choiceBtn3");
var answerBtn4 = document.getElementById("choiceBtn4");
function question2() {
    questionEl.textContent = questions[1].question
    answerBtn1.textContent = questions[1].answers[0].text
    answerBtn2.textContent = questions[1].answers[1].text
    answerBtn3.textContent = questions[1].answers[2].text
    answerBtn4.textContent = questions[1].answers[3].text
}
function question3() {
    questionEl.textContent = questions[2].question
    answerBtn2.textContent = questions[2].answers[0].text
    answerBtn2.textContent = questions[2].answers[1].text
    answerBtn2.textContent = questions[2].answers[2].text
    answerBtn2.textContent = questions[2].answers[3].text
}
// specify where the timer starts at
var timeLeft = 75;
// add function for start button


function startTest(event) {
// stop hiding questions once test has started, hide start button
    questionContainerEl.classList.remove("hide");
    startButton.classList.add("hide");
    // display question at random from pool of questions, under questions array
    questionEl.textContent = questions[0].question
    answerBtn1.textContent = questions[0].answers[0]
    answerBtn2.textContent = questions[0].answers[1]
    answerBtn3.textContent = questions[0].answers[2]
    answerBtn4.textContent = questions[0].answers[3]

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


function choiceClick1() {
    if (answerBtn1.textContent == questions[0].correct) {window.alert("Correct!"), question2()}
}
function choiceClick2() {
    if (answerBtn2.textContent == questions[0].answers[1]) {window.alert("Incorrect!"), timeLeft-=10}
}
function choiceClick3() {
    if (answerBtn3.textContent == questions[0].answers[2]) {window.alert("Incorrect!"), timeLeft-=10}
}
function choiceClick4() {
    if (answerBtn4.textContent == questions[0].answers[3]) {window.alert("Incorrect!"), timeLeft-=10}
}
// start the timer once the start button is clicked
    startButton.addEventListener("click", startTest);
    answerBtn1.addEventListener("click", choiceClick1);
    answerBtn2.addEventListener("click", choiceClick2);
    answerBtn3.addEventListener("click", choiceClick3);
    answerBtn4.addEventListener("click", choiceClick4);