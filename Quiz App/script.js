const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
  startButton.classList.add('hide');
  questionContainer.classList.remove('hide');
  currentQuestionIndex = 0;
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
  } else {
    questionContainer.innerHTML = `<h2>You've completed the quiz!</h2>`;
  }
}

const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'London', correct: false },
      { text: 'Berlin', correct: false },
      { text: 'Rome', correct: false }
    ]
  },
    {
      question: 'What is the capital of France?',
      answers: [
        { text: 'Paris', correct: true },
        { text: 'London', correct: false },
        { text: 'Berlin', correct: false },
        { text: 'Rome', correct: false }
      ]
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      answers: [
        { text: 'Mars', correct: true },
        { text: 'Venus', correct: false },
        { text: 'Jupiter', correct: false },
        { text: 'Saturn', correct: false }
      ]
    },
    {
      question: 'What is the largest mammal?',
      answers: [
        { text: 'Elephant', correct: false },
        { text: 'Blue Whale', correct: true },
        { text: 'Giraffe', correct: false },
        { text: 'Lion', correct: false }
      ]
    },
    {
      question: 'Which scientist developed the theory of general relativity?',
      answers: [
        { text: 'Isaac Newton', correct: false },
        { text: 'Albert Einstein', correct: true },
        { text: 'Galileo Galilei', correct: false },
        { text: 'Nicolaus Copernicus', correct: false }
      ]
    },
    {
      question: 'What is the chemical symbol for gold?',
      answers: [
        { text: 'Go', correct: false },
        { text: 'Gl', correct: false },
        { text: 'Au', correct: true },
        { text: 'Ag', correct: false }
      ]
    },
    {
      question: 'Which gas do plants use for photosynthesis?',
      answers: [
        { text: 'Oxygen', correct: false },
        { text: 'Carbon Dioxide', correct: true },
        { text: 'Hydrogen', correct: false },
        { text: 'Nitrogen', correct: false }
      ]
    },
    {
      question: 'What is the largest organ in the human body?',
      answers: [
        { text: 'Heart', correct: false },
        { text: 'Brain', correct: false },
        { text: 'Liver', correct: false },
        { text: 'Skin', correct: true }
      ]
    },
    {
      question: 'What is the chemical symbol for water?',
      answers: [
        { text: 'Wa', correct: false },
        { text: 'Wt', correct: false },
        { text: 'H2O', correct: true },
        { text: 'O2', correct: false }
      ]
    },
    {
      question: 'Which famous playwright wrote "Romeo and Juliet"?',
      answers: [
        { text: 'William Shakespeare', correct: true },
        { text: 'Charles Dickens', correct: false },
        { text: 'George Orwell', correct: false },
        { text: 'Jane Austen', correct: false }
      ]
    },
    {
      question: 'What is the smallest prime number?',
      answers: [
        { text: '0', correct: false },
        { text: '1', correct: false },
        { text: '2', correct: true },
        { text: '3', correct: false }
      ]
    }
];

