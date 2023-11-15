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
    ],
    medium: [
        {
            question: "Which country has won the most FIFA World Cup titles?",
            answers: [
                { text: "Brazil", correct: true },
                { text: "Germany", correct: false },
                { text: "Italy", correct: false },
                { text: "Argentina", correct: false },
            ]
        },

        {
            question: "In which year did Lionel Messi win his first Ballon d'Or?",
            answers: [
                { text: "2007", correct: false },
                { text: "2009", correct: true },
                { text: "2010", correct: false },
                { text: "2012", correct: false },
            ]
        },

        {
            question: "Which team did Manchester United defeat in the 1999 UEFA Champions League final?",
            answers: [
                { text: "Bayern Munich", correct: true },
                { text: "Juventus", correct: false },
                { text: "Barcelona", correct: false },
                { text: "Real Madrid", correct: false },
            ]
        },

        {
            question: "Which player scored the 'Hand of God' goal in the World Cup?",
            answers: [
                { text: "Pelé", correct: false },
                { text: "Diego Maradona", correct: true },
                { text: "Lionel Messi", correct: false },
                { text: "Cristiano Ronaldo", correct: false },
            ]
        },

        {
            question: "Who was the first player to score in three different UEFA Champions League finals?",
            answers: [
                { text: "Cristiano Ronaldo", correct: false },
                { text: "Lionel Messi", correct: false },
                { text: "Raúl", correct: false },
                { text: "Samuel Eto'o", correct: true },
            ]
        },

        {
            question: "Which country hosted the 2006 FIFA World Cup?",
            answers: [
                { text: "France", correct: false },
                { text: "Germany", correct: true },
                { text: "South Africa", correct: false },
                { text: "Brazil", correct: false },
            ]
        },

        {
            question: "What is the record number of goals scored by a single player in a Premier League season?",
            answers: [
                { text: "31", correct: false },
                { text: "32", correct: false },
                { text: "34", correct: false },
                { text: "36", correct: true },
            ]
        },

        {
            question: "Which club won the first Premier League title in 1992-1993?",
            answers: [
                { text: "Manchester United", correct: true },
                { text: "Arsenal", correct: false },
                { text: "Chelsea", correct: false },
                { text: "Liverpool", correct: false },
            ]
        },

        {
            question: "What year was the UEFA Champions League rebranded from the European Cup?",
            answers: [
                { text: "1980", correct: false },
                { text: "1985", correct: false },
                { text: "1992", correct: true },
                { text: "1995", correct: false },
            ]
        },

        {
            question: "Which player holds the record for the most goals in a calendar year?",
            answers: [
                { text: "Lionel Messi", correct: true },
                { text: "Cristiano Ronaldo", correct: false },
                { text: "Pelé", correct: false },
                { text: "Gerd Müller", correct: false },
            ]
        },
    ]
};