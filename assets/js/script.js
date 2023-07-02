//Wait for the DOM to finish loading before running the game.
//Constants for DOM elements.
document.addEventListener('DOMContentLoaded', function () {
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

    /**
     * This function initiates the quiz, hiding the home page and displaying the questions.
     * The function sets the current question index to 0 and the the score to 0.
     * The function the inner HTML of the 'Next Question' button.
     * The function the the showQuestion functionto display current question.
     */
    function startQuiz() {
        const homeArea = document.querySelector('.home-area');

        homeArea.classList.add('hidden');
        questionContainer.classList.remove('hidden');

        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = 'Next Question';
        showQuestion();
    }

    /**
     * This function is to show the current question and answer choices.
     * The function retrieves the question from the question array, based on the questions index.
     * The function sets the question number and text of the question element.
     * The function creates buttons for each answer choice and attaches event listeners to them.
     */
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
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
        });
    }

    /**
    * This function resets the quiz back to the start.
    * The function hides the 'next' button by setting the display style to 'none'.
    */
    function resetState() {
        nextButton.style.display = 'none';
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }


    function selectAnswer(event) {
        const selectedBtn = event.target;
        const isCorrect = selectedBtn.getAttribute('data-correct') === 'true';
        if (isCorrect) {
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('incorrect');
        }
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        nextButton.style.display = 'block'
    }
});

startQuiz();