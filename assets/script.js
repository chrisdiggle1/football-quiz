//Constants for DOM elements.
const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('ans-btn');
const nextButton = document.getElementById('nxt-btn');

//Variable to track the score index.
let currentQuestionIndex = 0;
let score = 0;

//Opens the main quiz game.
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    const homeArea = document.getElementById('quiz-container');
    homeArea.style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next Question';
    showQuestion();

    // Show the question container
    questionContainer.classList.remove('hidden');
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();