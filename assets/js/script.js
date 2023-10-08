// Certain aspects of the code were guided and inspired from the Love Maths walkthrough on the Code Institutes LMS.
// Elements of code were taken and adapted from - Web Dev Simplified - https://www.youtube.com/watch?v=riDzcEQbX6k
// The questions for the quiz were taken from - https://www.quiztriviagames.com/football-quiz/

//Wait for the DOM to finish loading before running the game.
//Constants for DOM elements.
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-btn');
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('ans-btn');
    const nextButton = document.getElementById('nxt-btn');
    const rightCounter = document.getElementById('right-counter');
    const wrongCounter = document.getElementById('wrong-counter');

    //Variables to track the score index.
    let currentQuestionIndex = 0;
    let score = 0;

    //Opens the main quiz game.
    startButton.addEventListener('click', startQuiz);

    /**
     * This function initiates the quiz, hiding the home page and displaying the questions.
     * It resets the current question index and score, and updates the right and wrong counter.
     * It changes the innerHTML of the next button element to display the first question.
     * Calls the show question function to display the first question.
     */
    function startQuiz() {
        const homeArea = document.querySelector('.home-area');

        homeArea.classList.add('hidden');
        questionContainer.classList.remove('hidden');

        currentQuestionIndex = 0;
        score = 0;
        rightCounter.innerText = 0;
        wrongCounter.innerText = 0;
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

    /**
     * This function determines whether the selected answer is correct based on the 'correct' attribute.
     * It increments the score and updates the answer is correct, and increments the count of incorrect answers.
     * Disables all the answer buttons and displays the 'Next Question button once an answer has been selected. 
     */
    function selectAnswer(event) {
        const selectedBtn = event.target;
        const isCorrect = selectedBtn.getAttribute('data-correct') === 'true';
        if (isCorrect) {
            selectedBtn.classList.add('correct');
            score++;
            incrementScore();
        } else {
            selectedBtn.classList.add('incorrect');
            incrementWrongAnswer();
        }
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        nextButton.style.display = 'block';
    }

    /**
     * The function displays the final score and provides the option to play again.
     * The quiz is reset if the user selects to play again.
     */
    function showScore() {
        resetState();
        questionElement.innerHTML = `You scored ${score} goals from ${questions.length} shots!`;
        nextButton.innerHTML = 'Fancy another shot?';
        nextButton.style.display = 'block'
    }

    /**
     * This function handles the action when the 'Next Question' button is clicked.
     * It increments the current question index and checks if any more questions are remaining.
     * The next question will be displayed if there are any, if not, it will show the call the show score function.
     */
    function clickNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    /**
     * Event listener for for when the'Next Question' button is clicked.
     * checks if there are any more questions left to answer,
     * if there are, it calls the click next button function,
     * if there are no more questions, the final score and option to play again is displayed.
     */
    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length) {
            clickNextButton();
        } else {
            startQuiz();
        }
    })

    /**
     * This function obtains the the current score from the DOM and increments it by 1.
     */
    function incrementScore() {
        let oldScore = parseInt(document.getElementById('right-counter').innerText);
        document.getElementById('right-counter').innerText = ++oldScore;
    }

    /**
     * This function obtains the current tally of incorrect answers from the DOM and increments by 1.
     */
    function incrementWrongAnswer() {
        let oldScore = parseInt(document.getElementById('wrong-counter').innerText);
        document.getElementById('wrong-counter').innerText = ++oldScore;
    }

});

startQuiz();