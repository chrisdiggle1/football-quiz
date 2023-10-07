# **The Football Quiz**

This website has been built for my second portfolio project and is for education purposes only.

This is a football trivia quiz for any football fans who would like to test their knowledge on the sport.

## **Live Site**

![Site view displayed across different devices](/documentation/responsive.png)

**The Football Quiz Site is live and can be found by clicking [here](https://chrisdiggle1.github.io/football-quiz/)**

## **Table Of Contents**

- [The Football Quiz](#the-football-quiz)
    - [Table Of Contents](#table-of-contents)
    - [User Experience UX](#user-experience-ux)
        - [Site Purpose](#site-purpose)
        - [Target Audience](#target-audience)
        - [Communication](#communication)
        - [User Goals](#user-goals)
        - [Future Implementations](#future-implementations)
    - [Design](#design)
        - [Website Structure](#website-structure)
        - [Colour Scheme](#colour-scheme)
        - [Typography](#typography)
        - [Imagery](#imagery)
    - [Page Features](#page-features)
        - [Landing Page](#landing-page)
        - [Quiz Area](#quiz-area)
        - [Final Score Screen](#final-score-screen)
        - [Social Links](#social-links)
        - [404 Page](#404-page)
        - [Favicon](#favicon)
    - [Technologies Used](#technologies-used)
        - [Languages](#languages)
        - [Frameworks and tools](#Frameworks-and-tools)
    - [Testing and Validation](#testing-and-validation)
        - [W3C Markup Validation](#w3c-markup-validation)
        - [W3C Jigsaw CSS Validation](#w3c-jigsaw-css-validation)
        - [JSHint JavaScript Validation](#jshint-javaScript-validation)
        - [Lighthouse Tests](#Lighthouse-Tests)
        - [WAVE Tests](#wave-tests)
        - [Feature Testing](#feature-testing)
    - [Bugs](#bugs)
        - [Resolved Bugs](#resolved-bugs)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
        - [Fork](#fork)
        - [Clone](#clone)
    - [Credits](#credits)
        - [Code](#code)
        - [Images](#images)
        - [Others](#others)
        - [Acknowledgements](#acknowledgements)

## User Experience UX

### Site Purpose

The quiz is designed to challenge users on general football trivia. There are 10 questions to answer, and for each question, the user is informed immediately if they answered the question correctly or not. When the user selects an answer, if they are correct the answer will turn green and the 'correct' counter underneath will increment by one. If the user gets the answer wrong, the selected answer will highlight red, the correct answer will be shown in green and the 'incorrect' counter will increment by one. Once the user has answered all 10 questions, a message is displayed on the screen displaying the correct number of answers and asking if they would like to take the quiz again.

### Target Audience

This quiz is for anybody who wants to test their general football knowledge or just wants to have a bit of fun to pass some time.

### Communication

The overall design of the site has been made very simple on purpose to help learn the very basics of JavaScript. When the user arrives on the site, the landing page shows 4 bullet points explaining what to expect with the quiz. Once the user clicks 'start quiz' the questions, answers and score are then displayed on the screen. The visual structureof the site makes it intuitive to navigate through the ten questions. The game displays the final score after answering the last question and gives the option to play the game again.

### User Goals

As a user taking the quiz, I want to be challenged on my knowledge of football and also learn the answers to the questions I got wrong. I want to be entertained for a brief time and know my final score at the end. Once the quiz has finished I would like the option to play again and see if I learnt the correct answers from the ones I got incorrect on the previous go.

### Future Implementations

My future plans for the site are to add a lot more questions, with the questions displaying in a random order and have 3 different difficulty levels so the quiz would be more suitable for a wider audience. I would also like to add a countdown timer to each question to add more fun and for the user to have to think quicker.

## Design

### Website Structure

### Balsamiq Wireframes

<details>
<summary>Questions Page Desktop</summary>
<img src="documentation/questions-desktop.png">
</details>

<br>

<details>
<summary>Questions Page Tablet</summary>
<img src="documentation/questions-tablet.png">
</details>

<br>

<details>
<summary>Questions Page Mobile</summary>
<img src="documentation/questions-mobile.png">
</details>

<br>

<details>
<summary>Score Page Desktop</summary>
<img src="documentation/score-desktop.png">
</details>

<br>

<details>
<summary>Score Page Tablet</summary>
<img src="documentation/score-tablet.png">
</details>

<br>

<details>
<summary>Score Page Mobile</summary>
<img src="documentation/score-mobile.png">
</details>

<br>

### Colour Scheme

The colour scheme for the qame are were dicatated by the green background representing a football pitch. The white and blue I found were best for visualisation overall to display the questions and highlighting the correct and incorrect answers using red and green.

![palette of the colours used on the site](/documentation/colour-scheme.png)

### Typography

The two fonts used in the site have been sourced from the Google Fonts library: 

Belanosima for the main heading

![image of the font used for the main quiz header](/documentation/heading-font.png)

Poppins for the questions and answers

![image of the font used for the questions and answers](/documentation/text-font.png)

### Imagery

The background image of a football, pitch and players boots was sourced from unsplash and the creator is [Emilio Garcia](https://unsplash.com/photos/AWdCgDDedH0)

## Page Features

### Landing Page

The landing page contains the below features - 

* The main quiz header
* Information on the quiz, what to expect and how it works
* The button to start the quiz
* Links to social media websites

<details>
<summary>View The Landing Page</summary>
<img src="documentation/landing-page.png">
</details>

### Quiz Area 

The Quiz area contains the below features - 

* The main quiz header
* The number of the question followed by the question itself
* Four possible answers
* The answers will highlight green of correct and red if incorrect
* A correct and Incorrect score which increment by one depending on the answer you give
* The 'Next Question' button once an answer has been selected
* Links to social media websites

<details>
<summary>View The Quiz Area</summary>
<img src="documentation/quiz-area.png">
</details>

### Final Score Screen

The final Score Screen displays the below features - 

* The main quiz header
* A statement confirming how many goals (answers) you scored from 10 shots (questions)
* The total score tally showing 'correct' answers in green and 'incorrect' in red
* Button asking the user if they want anther shot at the quiz
* Links to social media websites

<details>
<summary>View the Final Score Screen</summary>
<img src="documentation/final-score.png">
</details>

### Social Links

Links to social media sites are in the footer area. The icons of Instagram, Facebook, Twitter and Youtube are all clickable and open a new tab once clicked. Social media links have been used to serve the purpose of giving the user the chance of potentially reaching out and connect with the author of the site. As the website has educational purposes only, the links open the homepages of the respective social media websites.

<details>
<summary>View the Social Links</summary>
<img src="documentation/social-media.png">
</details>

### 404 Page

A basic custom 404.html error page has been included. The page informs the user that the URL they have input is incorrect by displaying the message: 404 - Page Not Found! Please check the URL is correct. I have inlcuded a link that takes the user back to the landing page of the site.

<details>
<summary>View the 404 Page</summary>
<img src="documentation/404-error.png">
</details>

### Favicon

I have added a Favicon to site as a little extra touch to display a little image on the tab. The Favicon contains the letters 'FQ' for football quiz and uses the blue and white colours that are used in the question areaof the site.

<details>
<summary>View the Favicon</summary>
<img src="documentation/favicon.png">
</details>

## Technologies Used

### Languages

