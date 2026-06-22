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
    answers: ["// comment", "/* comment */", "# comment", ""],
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

const buttonNext = document.getElementById("next");

function showQuestion() {
  const currentQuestion = document.getElementById("question");
  const answersQuestion = document.querySelectorAll(".answer");

  const quizDataIndex = quizData[currentQuestionIndex];

  currentQuestion.innerHTML = quizDataIndex.question;

  const answerNow = [];

  quizDataIndex.answers.forEach((answerr) => {
    answerNow.push(answerr);
  });

  answersQuestion.forEach((answer, index) => {
    answer.innerHTML = answerNow[index];
    answer.addEventListener("click", (e) => {
      const classes = e.target.classList;
      if (classes.contains(quizDataIndex.correct)) {
        console.log("poprawna odpowiedź");
      }
    });
  });
}
showQuestion();

function nextQuestion() {
  console.log("next");
}
buttonNext.addEventListener("click", nextQuestion);
