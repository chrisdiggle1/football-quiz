//Constants for DOM elements.
const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement =document.getElementById('question');
const answerButton = document.getElementById('ans-btn');
const nextButton = document.getElementById('nxt-btn');

//Variable to track the score index.
let currentQuestionIndex = 0;
let score = 0;

//Opens the main quiz game.
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    // Hide the home area
    const homeArea = document.getElementById('quiz-container');
    homeArea.style.display = 'none';

    // Show the question container
    questionContainer.classList.remove('hidden');
}