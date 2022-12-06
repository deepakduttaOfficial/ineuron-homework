const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

// const quiz;
// const answerEls;
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz(number) {
  questionEl.innerHTML = quizData[number].question;
  a_text.innerHTML = quizData[number].a;
  b_text.innerHTML = quizData[number].b;
  c_text.innerHTML = quizData[number].c;
  d_text.innerHTML = quizData[number].c;
}

function deselectAnswers() {}

function getSelected() {}

let question = 0;
submitBtn.innerHTML = "Click to Start";
submitBtn.addEventListener("click", () => {
  submitBtn.innerHTML = "Submit";
  if (question >= quizData.length) {
    question = 0;
    submitBtn.innerHTML = "Click to Start";
    return alert("Quiz over");
  }
  loadQuiz(question);
  question++;
});
