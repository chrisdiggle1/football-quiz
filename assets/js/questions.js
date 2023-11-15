// An array that holds all the questions and possible answers, including the corrent answer.

const questions = {
    easy: [
        {
            question: "Which of the following is not a football team in London?",
            answers: [
                { text: "Chelsea FC", correct: false },
                { text: "Tottenham Hotspur FC", correct: false },
                { text: "Everton FC", correct: true },
                { text: "Arsenal FC", correct: false },
            ]
        },
        {
            question: "If there is a clean sheet, how many goals are scored?",
            answers: [
                { text: "0", correct: true },
                { text: "2", correct: false },
                { text: "4", correct: false },
                { text: "6", correct: false },
            ]
        },
        {
            question: "Who won the UEFA European Championship in 2020?",
            answers: [
                { text: "France", correct: false },
                { text: "Italy", correct: true },
                { text: "England", correct: false },
                { text: "Germany", correct: false },
            ]
        },

        {
            question: "Which football club did Lionel Messi join in 2021?",
            answers: [
                { text: "Man City", correct: false },
                { text: "PSG", correct: true },
                { text: "Barcelona", correct: false },
                { text: "Liverpool", correct: false },
            ]
        },

        {
            question: "What is the maximum number of players a football team can have on the field at any time?",
            answers: [
                { text: "9", correct: false },
                { text: "11", correct: true },
                { text: "10", correct: false },
                { text: "12", correct: false },
            ]
        },

        {
            question: "Which country is home to the famous football club Barcelona?",
            answers: [
                { text: "Italy", correct: false },
                { text: "Spain", correct: true },
                { text: "Portugal", correct: false },
                { text: "France", correct: false },
            ]
        },

        {
            question: "How long is a standard professional football match, excluding extra time?",
            answers: [
                { text: "60 minutes", correct: false },
                { text: "70 minutes", correct: false },
                { text: "80 minutes", correct: false },
                { text: "90 minutes", correct: true },
            ]
        },

        {
            question: "What color card does a referee show for a direct dismissal from a football game?",
            answers: [
                { text: "Yellow", correct: false },
                { text: "Green", correct: false },
                { text: "Red", correct: true },
                { text: "Blue", correct: false },
            ]
        },

        {
            question: "Who won the FIFA World Cup in 2018?",
            answers: [
                { text: "France", correct: true },
                { text: "Brazil", correct: false },
                { text: "Germany", correct: false },
                { text: "Argentina", correct: false },
            ]
        },

        {
            question: "In which year was the Premier League founded?",
            answers: [
                { text: "1988", correct: false },
                { text: "1992", correct: true },
                { text: "1996", correct: false },
                { text: "2000", correct: false },
            ]
        },
    ]
};