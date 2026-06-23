const quizData = [
  {
    question:
      "Which keyword is used to declare a variable whose value CANNOT be reassigned?",
    answers: ["var", "let", "const", "immutable"],
    correct: 2,
  },
  {
    question:
      "Which operator is used to check for both equal value and equal data type?",
    answers: ["=", "==", "===", "!="],
    correct: 2,
  },
  {
    question: "Which data type represents a logical true/false value?",
    answers: ["String", "Boolean", "Number", "Undefined"],
    correct: 1,
  },
  {
    question: "What is the correct way to print text to the browser console?",
    answers: ["console.print()", "log.console()", "print()", "console.log()"],
    correct: 3,
  },
  {
    question:
      "Which method is used to add a new element to the END of an array?",
    answers: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
  },
  {
    question: "What will be the result of executing: typeof '123'?",
    answers: ["number", "string", "boolean", "undefined"],
    correct: 1,
  },
  {
    question:
      "Which statement is used to execute a block of code based on a condition?",
    answers: ["for", "while", "if", "switch"],
    correct: 2,
  },
  {
    question: "How do you correctly write a single-line comment in JavaScript?",
    answers: ["// comment", "/* comment */", "# comment", "comment //"],
    correct: 0,
  },
  {
    question:
      "Which browser object represents the entire HTML document structure?",
    answers: ["window", "document", "screen", "location"],
    correct: 1,
  },
  {
    question: "What is a function that does not have its own name called?",
    answers: [
      "Hidden function",
      "Empty function",
      "Anonymous function",
      "Variable function",
    ],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let points = 0;
let maxQuestion = 10;
let currentTimeToEnd = 60;
let currentTime = 0;

const buttonNext = document.getElementById("next");
const questionNumber = document.getElementById("question-number");
const currentQuestion = document.getElementById("question");
const answersQuestion = document.querySelectorAll(".answer");
const quizDiv = document.getElementById("quiz-start");
const quizEnd = document.getElementById("quiz-end");
const again = document.getElementById("again");
const time = document.getElementById("time");
const endTime = document.getElementById("endTime");
let quizDataIndex = quizData[currentQuestionIndex];

function handleClick(e) {
  const classes = e.target.classList;

  answersQuestion.forEach((anyAnswer) => {
    anyAnswer.removeEventListener("click", handleClick);
  });

  if (classes.contains(quizDataIndex.correct + 1)) {
    e.target.classList.add("good-answer");
    points += 1;
  } else {
    e.target.classList.add("wrong-answer");
  }
}

function showQuestion() {
  quizDataIndex = quizData[currentQuestionIndex];
  currentQuestion.innerHTML = quizDataIndex.question;

  const answerNow = [];
  quizDataIndex.answers.forEach((answerr) => {
    answerNow.push(answerr);
  });

  answersQuestion.forEach((answer, index) => {
    answer.innerHTML = answerNow[index];
    answer.removeEventListener("click", handleClick);
    answer.addEventListener("click", handleClick);
  });
}
showQuestion();

function nextQuestion() {
  currentQuestionIndex += 1;
  currentTimeToEnd = 61;
  const result = document.getElementById("result");
  answersQuestion.forEach((answer) => {
    answer.removeEventListener("click", handleClick);
    answer.classList.remove("good-answer");
    answer.classList.remove("wrong-answer");
  });
  if (currentQuestionIndex >= maxQuestion) {
    quizDiv.classList.add("hidden");
    quizEnd.classList.remove("hidden");
    result.innerHTML = `You scored ${points} / ${maxQuestion} points`;
    endTime.innerHTML = `You completed the quiz in: ${currentTime}s`;
    clearInterval(timeInterval);
    clearInterval(timeStartInterval);
    currentTime = 0;
    return;
  }
  questionNumber.innerHTML = `Question ${currentQuestionIndex + 1} of 10`;
  showQuestion();
}
buttonNext.addEventListener("click", nextQuestion);

function quizAgain() {
  clearInterval(timeInterval);
  clearInterval(timeStartInterval);

  timeInterval = setInterval(setTimer, 1000);
  timeStartInterval = setInterval(timeStart, 1000);
  currentTimeToEnd = 60;
  points = 0;
  currentQuestionIndex = 0;
  quizEnd.classList.add("hidden");
  quizDiv.classList.remove("hidden");
  questionNumber.innerHTML = `Question ${currentQuestionIndex + 1} of 10`;
  showQuestion();
}
again.addEventListener("click", quizAgain);

function setTimer() {
  currentTimeToEnd -= 1;
  time.innerHTML = `${currentTimeToEnd}s`;
  if (currentTimeToEnd <= 0) {
    nextQuestion();
  }
}
let timeInterval = setInterval(setTimer, 1000);

function timeStart() {
  currentTime += 1;
}
let timeStartInterval = setInterval(timeStart, 1000);
