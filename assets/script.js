//Constants for DOM elements
const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');

//Opens the main quiz game.
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    // Hide the home area
    const homeArea = document.getElementById('quiz-container');
    homeArea.style.display = 'none';

    // Show the question container
    questionContainer.classList.remove('hidden');
}