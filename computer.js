/* =========================================================
   EDUCONNECT - COMPUTER JAVASCRIPT
   Computer Parts + Keyboard & Mouse + Internet + Safety
   Standards 1 to 5
========================================================= */


/* =========================================================
   COMPUTER TOPIC NAVIGATION
========================================================= */

function startComputerTopic(topic) {

    if (topic === "Computer Parts") {
        window.location.href = "computer-parts.html";
    }

    else if (topic === "Keyboard & Mouse") {
        window.location.href = "computer-keyboard.html";
    }

    else if (topic === "Internet Basics") {
        window.location.href = "computer-internet.html";
    }

    else if (topic === "Digital Safety") {
        window.location.href = "computer-safety.html";
    }
}


/* =========================================================
   GET STUDENT STANDARD
========================================================= */

function getStudentStandard() {

    const standard =
        parseInt(
            localStorage.getItem("studentStandard")
        ) || 1;

    if (standard < 1 || standard > 5) {
        return 1;
    }

    return standard;
}


/* =========================================================
   COMPUTER PARTS QUIZ
   5 QUESTIONS FOR EACH STANDARD
========================================================= */

const computerPartsQuestionsByStandard = {

    /* =========================
       STANDARD 1
    ========================= */

    1: [

        {
            question:
                "Which computer part is used to type letters and numbers?",

            answers: [
                "Monitor",
                "Keyboard",
                "Speaker",
                "Printer"
            ],

            correct: 1
        },

        {
            question:
                "Which part shows pictures and words?",

            answers: [
                "Mouse",
                "Keyboard",
                "Monitor",
                "Speaker"
            ],

            correct: 2
        },

        {
            question:
                "Which device helps move the pointer?",

            answers: [
                "Mouse",
                "Printer",
                "Monitor",
                "Keyboard"
            ],

            correct: 0
        },

        {
            question:
                "Which device produces sound?",

            answers: [
                "Speaker",
                "Mouse",
                "Keyboard",
                "Monitor"
            ],

            correct: 0
        },

        {
            question:
                "Which device is used to print words or pictures on paper?",

            answers: [
                "Printer",
                "Mouse",
                "Speaker",
                "Monitor"
            ],

            correct: 0
        }

    ],


    /* =========================
       STANDARD 2
    ========================= */

    2: [

        {
            question:
                "Which device is an input device?",

            answers: [
                "Keyboard",
                "Monitor",
                "Printer",
                "Speaker"
            ],

            correct: 0
        },

        {
            question:
                "Which device displays information?",

            answers: [
                "Mouse",
                "Monitor",
                "Keyboard",
                "Microphone"
            ],

            correct: 1
        },

        {
            question:
                "Which device prints information on paper?",

            answers: [
                "Printer",
                "Monitor",
                "Mouse",
                "Speaker"
            ],

            correct: 0
        },

        {
            question:
                "Which device can record sound?",

            answers: [
                "Monitor",
                "Keyboard",
                "Microphone",
                "Printer"
            ],

            correct: 2
        },

        {
            question:
                "Which device is mainly used to hear sound from a computer?",

            answers: [
                "Speaker",
                "Keyboard",
                "Mouse",
                "Printer"
            ],

            correct: 0
        }

    ],


    /* =========================
       STANDARD 3
    ========================= */

    3: [

        {
            question:
                "What does hardware mean?",

            answers: [
                "Computer games",
                "Physical parts of a computer",
                "Internet websites",
                "Computer passwords"
            ],

            correct: 1
        },

        {
            question:
                "Which device is used to store files and programs?",

            answers: [
                "Storage drive",
                "Speaker",
                "Mouse",
                "Monitor"
            ],

            correct: 0
        },

        {
            question:
                "Which component processes computer instructions?",

            answers: [
                "CPU",
                "Printer",
                "Keyboard",
                "Speaker"
            ],

            correct: 0
        },

        {
            question:
                "Which device helps users select items on screen?",

            answers: [
                "Mouse",
                "Printer",
                "Speaker",
                "Monitor"
            ],

            correct: 0
        },

        {
            question:
                "Which device can be used to enter sound into a computer?",

            answers: [
                "Microphone",
                "Monitor",
                "Printer",
                "Speaker"
            ],

            correct: 0
        }

    ],


    /* =========================
       STANDARD 4
    ========================= */

    4: [

        {
            question:
                "Which component processes instructions?",

            answers: [
                "CPU",
                "Monitor",
                "Printer",
                "Mouse"
            ],

            correct: 0
        },

        {
            question:
                "Which device is commonly used to enter text?",

            answers: [
                "Keyboard",
                "Speaker",
                "Monitor",
                "Printer"
            ],

            correct: 0
        },

        {
            question:
                "Which device creates a paper copy?",

            answers: [
                "Printer",
                "Mouse",
                "CPU",
                "Keyboard"
            ],

            correct: 0
        },

        {
            question:
                "Which application is commonly used to create documents?",

            answers: [
                "Word processor",
                "Speaker",
                "Mouse",
                "Monitor"
            ],

            correct: 0
        },

        {
            question:
                "Which device is commonly used to scan a paper document into a computer?",

            answers: [
                "Scanner",
                "Speaker",
                "Monitor",
                "Keyboard"
            ],

            correct: 0
        }

    ],


    /* =========================
       STANDARD 5
    ========================= */

    5: [

        {
            question:
                "Which component is often called the brain of the computer?",

            answers: [
                "CPU",
                "Monitor",
                "Keyboard",
                "Printer"
            ],

            correct: 0
        },

        {
            question:
                "Which device can retain data even when the computer is turned off?",

            answers: [
                "Storage device",
                "Monitor",
                "Mouse",
                "Speaker"
            ],

            correct: 0
        },

        {
            question:
                "Which type of memory temporarily holds data while programs are running?",

            answers: [
                "RAM",
                "Printer",
                "Keyboard",
                "Monitor"
            ],

            correct: 0
        },

        {
            question:
                "What is a computer program?",

            answers: [
                "A physical computer part",
                "A set of instructions for a computer",
                "A type of monitor",
                "A keyboard key"
            ],

            correct: 1
        },

        {
            question:
                "Which device is commonly used for long-term data storage?",

            answers: [
                "Storage drive",
                "Monitor",
                "Keyboard",
                "Speaker"
            ],

            correct: 0
        }

    ]

};


/* =========================================================
   COMPUTER PARTS VARIABLES
========================================================= */

let computerPartsQuestions =
    computerPartsQuestionsByStandard[
    getStudentStandard()
    ];

let partsQuestionIndex = 0;

let partsScore = 0;

let partsAnswered = false;


/* =========================================================
   COMPUTER PARTS FEEDBACK ELEMENT
========================================================= */

function getComputerPartsFeedback() {

    let feedback =
        document.getElementById(
            "computerPartsFeedback"
        );

    if (!feedback) {

        feedback =
            document.createElement("p");

        feedback.id =
            "computerPartsFeedback";

        feedback.style.fontWeight =
            "bold";

        feedback.style.fontSize =
            "18px";

        feedback.style.marginTop =
            "20px";

        const answerContainer =
            document.querySelector(
                ".answer-buttons"
            );

        if (answerContainer) {

            answerContainer.parentNode.insertBefore(
                feedback,
                answerContainer.nextSibling
            );
        }
    }

    return feedback;
}


/* =========================================================
   COMPUTER PARTS NEXT BUTTON
========================================================= */

function getComputerPartsNextButton() {

    let nextButton =
        document.getElementById(
            "computerPartsNextButton"
        );

    if (!nextButton) {

        nextButton =
            document.createElement("button");

        nextButton.id =
            "computerPartsNextButton";

        nextButton.type =
            "button";

        nextButton.textContent =
            "Next Question →";

        nextButton.style.display =
            "none";

        nextButton.style.marginTop =
            "20px";

        nextButton.style.padding =
            "12px 24px";

        nextButton.style.background =
            "#16a34a";

        nextButton.style.color =
            "white";

        nextButton.style.border =
            "none";

        nextButton.style.borderRadius =
            "10px";

        nextButton.style.fontWeight =
            "bold";

        nextButton.style.fontSize =
            "16px";

        nextButton.style.cursor =
            "pointer";

        nextButton.onclick =
            function () {

                nextComputerQuestion();

            };


        const feedback =
            getComputerPartsFeedback();

        if (feedback) {

            feedback.parentNode.insertBefore(
                nextButton,
                feedback.nextSibling
            );

        }

    }

    return nextButton;
}


/* =========================================================
   SHOW COMPUTER PARTS QUESTION
========================================================= */

function showPartsQuestion() {

    const questionElement =
        document.getElementById(
            "computerQuestion"
        );

    const quizQuestionElement =
        document.getElementById(
            "computerQuizQuestion"
        );

    const answerContainer =
        document.querySelector(
            ".answer-buttons"
        );

    if (
        !questionElement ||
        !answerContainer ||
        !quizQuestionElement
    ) {

        return;
    }


    if (
        partsQuestionIndex >=
        computerPartsQuestions.length
    ) {

        finishComputerPartsQuiz();

        return;
    }


    const currentQuestion =
        computerPartsQuestions[
        partsQuestionIndex
        ];


    questionElement.textContent =
        currentQuestion.question;


    quizQuestionElement.textContent =
        "Question " +
        (partsQuestionIndex + 1) +
        " of " +
        computerPartsQuestions.length;


    answerContainer.innerHTML =
        "";


    partsAnswered =
        false;


    const feedback =
        getComputerPartsFeedback();


    if (feedback) {

        feedback.textContent =
            "";

        feedback.style.color =
            "";

    }


    const nextButton =
        getComputerPartsNextButton();


    if (nextButton) {

        nextButton.style.display =
            "none";

        nextButton.textContent =
            "Next Question →";

    }


    currentQuestion.answers.forEach(
        function (answer, index) {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.textContent =
                answer;


            button.onclick =
                function () {

                    selectComputerAnswer(
                        index
                    );

                };


            answerContainer.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   SELECT COMPUTER PARTS ANSWER
========================================================= */

function selectComputerAnswer(
    selectedIndex
) {

    if (partsAnswered) {

        return;
    }


    partsAnswered =
        true;


    const currentQuestion =
        computerPartsQuestions[
        partsQuestionIndex
        ];


    const buttons =
        document.querySelectorAll(
            ".answer-buttons button"
        );


    const feedback =
        getComputerPartsFeedback();


    const nextButton =
        getComputerPartsNextButton();


    /* =========================
       CORRECT ANSWER
    ========================= */

    if (
        selectedIndex ===
        currentQuestion.correct
    ) {

        partsScore++;


        if (buttons[selectedIndex]) {

            buttons[selectedIndex].textContent =
                "✅ " +
                currentQuestion.answers[
                selectedIndex
                ];

        }


        if (feedback) {

            feedback.textContent =
                "🎉 Your answer is correct! Great job!";

            feedback.style.color =
                "green";

        }

    }


    /* =========================
       WRONG ANSWER
    ========================= */

    else {

        if (buttons[selectedIndex]) {

            buttons[selectedIndex].textContent =
                "❌ " +
                currentQuestion.answers[
                selectedIndex
                ];

        }


        if (feedback) {

            feedback.textContent =
                "❌ Your answer is not correct. Correct answer: " +
                currentQuestion.answers[
                currentQuestion.correct
                ];

            feedback.style.color =
                "red";

        }

    }


    /* =========================
       DISABLE ANSWERS
    ========================= */

    buttons.forEach(
        function (button) {

            button.disabled =
                true;

        }
    );


    /* =========================
       SHOW NEXT BUTTON
    ========================= */

    if (nextButton) {

        nextButton.style.display =
            "inline-block";


        if (
            partsQuestionIndex ===
            computerPartsQuestions.length - 1
        ) {

            nextButton.textContent =
                "🏁 Finish Quiz";

        }

    }

}


/* =========================================================
   NEXT COMPUTER PARTS QUESTION
========================================================= */

function nextComputerQuestion() {

    if (!partsAnswered) {

        return;
    }


    partsQuestionIndex++;


    if (
        partsQuestionIndex >=
        computerPartsQuestions.length
    ) {

        finishComputerPartsQuiz();

        return;
    }


    showPartsQuestion();

}


/* =========================================================
   FINISH COMPUTER PARTS QUIZ
========================================================= */

function finishComputerPartsQuiz() {

    localStorage.setItem(
        "computerPartsScore",
        partsScore
    );


    /* Total Computer Parts score */
    localStorage.setItem(
        "computerScore",
        partsScore
    );


    const questionElement =
        document.getElementById(
            "computerQuestion"
        );


    const quizQuestionElement =
        document.getElementById(
            "computerQuizQuestion"
        );


    const answerContainer =
        document.querySelector(
            ".answer-buttons"
        );


    const feedback =
        getComputerPartsFeedback();


    const nextButton =
        getComputerPartsNextButton();


    const result =
        document.getElementById(
            "computerPartsResult"
        );


    const percentage =
        Math.round(
            (
                partsScore /
                computerPartsQuestions.length
            ) * 100
        );


    if (questionElement) {

        questionElement.textContent =
            "🎉 Computer Parts Quiz Complete!";

    }


    if (quizQuestionElement) {

        quizQuestionElement.textContent =
            "🏆 Final Result";

    }


    if (answerContainer) {

        answerContainer.innerHTML =
            "";

    }


    if (feedback) {

        feedback.textContent =
            "🎉 Amazing work! You completed all 5 questions!";

        feedback.style.color =
            "green";

    }


    if (nextButton) {

        nextButton.style.display =
            "none";

    }


    if (result) {

        result.innerHTML =
            "🏆 Your Score: " +
            partsScore +
            "/" +
            computerPartsQuestions.length +
            "<br><br>" +
            percentage +
            "%";

        result.style.fontWeight =
            "bold";

        result.style.fontSize =
            "20px";

    }

}


/* =========================================================
   RESTART COMPUTER PARTS QUIZ
========================================================= */

function restartComputerQuiz() {

    partsQuestionIndex =
        0;

    partsScore =
        0;

    partsAnswered =
        false;


    computerPartsQuestions =
        computerPartsQuestionsByStandard[
        getStudentStandard()
        ];


    const result =
        document.getElementById(
            "computerPartsResult"
        );


    if (result) {

        result.innerHTML =
            "";

    }


    showPartsQuestion();

}


/* =========================================================
   KEYBOARD & MOUSE QUIZ
   STANDARD 1 TO 5
========================================================= */

const keyboardQuestionsByStandard = {

    1: [
        {
            question: "Which key creates spaces between words?",
            answers: ["Enter", "Spacebar", "Shift", "Backspace"],
            correct: 1
        },
        {
            question: "Which key removes a character before the cursor?",
            answers: ["Enter", "Shift", "Backspace", "Spacebar"],
            correct: 2
        },
        {
            question: "Which device moves the pointer on the screen?",
            answers: ["Mouse", "Speaker", "Printer", "Monitor"],
            correct: 0
        },
        {
            question: "Which key can start a new line?",
            answers: ["Enter", "Spacebar", "Shift", "Backspace"],
            correct: 0
        }
    ],

    2: [
        {
            question: "Which key helps type capital letters?",
            answers: ["Shift", "Spacebar", "Enter", "Backspace"],
            correct: 0
        },
        {
            question: "Which key removes the character before the cursor?",
            answers: ["Enter", "Backspace", "Shift", "Spacebar"],
            correct: 1
        },
        {
            question: "What does a mouse click usually do?",
            answers: [
                "Makes sound",
                "Selects an item",
                "Prints a page",
                "Turns off the monitor"
            ],
            correct: 1
        },
        {
            question: "Which keys are used to type letters and numbers?",
            answers: ["Typing keys", "Speaker keys", "Screen keys", "Printer keys"],
            correct: 0
        }
    ],

    3: [
        {
            question: "What can Arrow keys be used for?",
            answers: [
                "Moving a cursor or selection",
                "Printing paper",
                "Playing sound",
                "Turning off the computer"
            ],
            correct: 0
        },
        {
            question: "What can a double-click do?",
            answers: [
                "Open some files or programs",
                "Print paper",
                "Increase speaker volume",
                "Turn off the keyboard"
            ],
            correct: 0
        },
        {
            question: "What can a right-click open?",
            answers: [
                "A menu with additional options",
                "A printer",
                "A new keyboard",
                "A speaker"
            ],
            correct: 0
        },
        {
            question: "Which device is used to point and select objects?",
            answers: ["Mouse", "Monitor", "Printer", "Speaker"],
            correct: 0
        }
    ],

    4: [
        {
            question: "What is a keyboard shortcut?",
            answers: [
                "A combination of keys used to perform an action",
                "A type of mouse",
                "A computer screen",
                "A printer setting"
            ],
            correct: 0
        },
        {
            question: "What does Copy and Paste help users do?",
            answers: [
                "Duplicate selected information",
                "Turn off the monitor",
                "Increase screen brightness",
                "Play music"
            ],
            correct: 0
        },
        {
            question: "Which device is commonly used to navigate software?",
            answers: ["Mouse", "Printer", "Speaker", "Scanner"],
            correct: 0
        },
        {
            question: "Why are keyboard shortcuts useful?",
            answers: [
                "They can make common tasks faster",
                "They make the monitor larger",
                "They replace the CPU",
                "They print automatically"
            ],
            correct: 0
        }
    ],

    5: [
        {
            question: "Why is a keyboard useful in programming?",
            answers: [
                "It allows programmers to enter code and commands",
                "It produces paper",
                "It displays pictures",
                "It stores electricity"
            ],
            correct: 0
        },
        {
            question: "What is one benefit of keyboard shortcuts?",
            answers: [
                "They can make common tasks faster",
                "They remove the CPU",
                "They replace the monitor",
                "They stop all programs"
            ],
            correct: 0
        },
        {
            question: "How does the mouse help when using software?",
            answers: [
                "It helps select tools and interact with objects",
                "It stores files permanently",
                "It processes instructions",
                "It produces sound"
            ],
            correct: 0
        },
        {
            question: "What is an advantage of using keyboard and mouse skills together?",
            answers: [
                "They can make computer work more efficient",
                "They remove the need for software",
                "They turn hardware into software",
                "They stop the computer from processing"
            ],
            correct: 0
        }
    ]

};


let keyboardQuestions =
    keyboardQuestionsByStandard[
    getStudentStandard()
    ];


let keyboardQuestionIndex = 0;
let keyboardScore = 0;
let keyboardAnswered = false;


function showKeyboardQuestion() {

    const question =
        document.getElementById(
            "keyboardQuestion"
        );

    const answers =
        document.getElementById(
            "keyboardAnswers"
        );

    const next =
        document.getElementById(
            "keyboardNextButton"
        );

    const feedback =
        document.getElementById(
            "keyboardFeedback"
        );

    const finalScore =
        document.getElementById(
            "keyboardFinalScore"
        );


    if (!question || !answers) {
        return;
    }


    if (
        keyboardQuestionIndex >=
        keyboardQuestions.length
    ) {

        finishKeyboardQuiz();

        return;
    }


    const current =
        keyboardQuestions[
        keyboardQuestionIndex
        ];


    question.textContent =
        "Question " +
        (keyboardQuestionIndex + 1) +
        " of " +
        keyboardQuestions.length +
        ": " +
        current.question;


    answers.innerHTML =
        "";


    if (feedback) {
        feedback.textContent = "";
    }


    if (next) {
        next.style.display = "none";
    }


    if (finalScore) {
        finalScore.style.display = "none";
    }


    keyboardAnswered =
        false;


    current.answers.forEach(
        function (answer, index) {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.textContent =
                answer;


            button.onclick =
                function () {

                    keyboardAnswer(
                        index
                    );

                };


            answers.appendChild(
                button
            );

        }
    );

}


function keyboardAnswer(selectedIndex) {

    if (keyboardAnswered) {
        return;
    }


    keyboardAnswered =
        true;


    const current =
        keyboardQuestions[
        keyboardQuestionIndex
        ];


    const buttons =
        document.querySelectorAll(
            "#keyboardAnswers button"
        );


    const feedback =
        document.getElementById(
            "keyboardFeedback"
        );


    const next =
        document.getElementById(
            "keyboardNextButton"
        );


    if (
        selectedIndex ===
        current.correct
    ) {

        keyboardScore++;


        if (feedback) {

            feedback.textContent =
                "🎉 Your answer is correct! Great job!";

            feedback.style.color =
                "green";

        }

    }

    else {

        if (feedback) {

            feedback.innerHTML =
                "❌ Your answer is not correct.<br>" +
                "Correct answer: " +
                current.answers[
                current.correct
                ];

            feedback.style.color =
                "red";

        }

    }


    buttons.forEach(
        function (button) {

            button.disabled =
                true;

        }
    );


    if (next) {

        next.style.display =
            "block";


        if (
            keyboardQuestionIndex ===
            keyboardQuestions.length - 1
        ) {

            next.textContent =
                "🏁 Finish Quiz";

        }

        else {

            next.textContent =
                "Next Question →";

        }

    }

}


function nextKeyboardQuestion() {

    if (!keyboardAnswered) {
        return;
    }


    keyboardQuestionIndex++;


    showKeyboardQuestion();

}


function finishKeyboardQuiz() {

    localStorage.setItem(
        "keyboardScore",
        keyboardScore
    );


    const question =
        document.getElementById(
            "keyboardQuestion"
        );


    const answers =
        document.getElementById(
            "keyboardAnswers"
        );


    const feedback =
        document.getElementById(
            "keyboardFeedback"
        );


    const next =
        document.getElementById(
            "keyboardNextButton"
        );


    const finalScore =
        document.getElementById(
            "keyboardFinalScore"
        );


    const scoreText =
        document.getElementById(
            "keyboardScoreText"
        );


    if (question) {

        question.textContent =
            "🎉 Keyboard & Mouse Quiz Complete!";

    }


    if (answers) {

        answers.innerHTML =
            "";

    }


    if (feedback) {

        feedback.textContent =
            "";

    }


    if (next) {

        next.style.display =
            "none";

    }


    if (finalScore) {

        finalScore.style.display =
            "block";


        finalScore.innerHTML =
            "Your Score: " +
            keyboardScore +
            "/" +
            keyboardQuestions.length +
            "<br><br>" +
            "Keep learning and improving!";

    }


    if (scoreText) {

        const percentage =
            Math.round(
                (
                    keyboardScore /
                    keyboardQuestions.length
                ) * 100
            );


        scoreText.textContent =
            "Score: " +
            keyboardScore +
            "/" +
            keyboardQuestions.length +
            " (" +
            percentage +
            "%)";

    }

}


function restartKeyboardQuiz() {

    keyboardQuestions =
        keyboardQuestionsByStandard[
        getStudentStandard()
        ];

    keyboardQuestionIndex =
        0;

    keyboardScore =
        0;

    keyboardAnswered =
        false;


    showKeyboardQuestion();

}


/* =========================================================
   INTERNET BASICS QUIZ
========================================================= */

const internetQuestions = [

    {
        question: "What is the Internet?",
        answers: [
            "A global network connecting computers and devices",
            "A keyboard",
            "A printer",
            "A computer game"
        ],
        correct: 0
    },

    {
        question: "Which application can be used to visit websites?",
        answers: [
            "Web browser",
            "Calculator",
            "Paint brush",
            "Speaker"
        ],
        correct: 0
    },

    {
        question: "What is a website?",
        answers: [
            "A collection of web pages available online",
            "A keyboard key",
            "A computer mouse",
            "A printer"
        ],
        correct: 0
    },

    {
        question: "What should you do before clicking an unknown link?",
        answers: [
            "Check whether it is trustworthy",
            "Always click it",
            "Share it with everyone",
            "Download everything"
        ],
        correct: 0
    }

];


let internetQuestionIndex = 0;
let internetScore = 0;
let internetAnswered = false;


function showInternetQuestion() {

    const question =
        document.getElementById(
            "internetQuestion"
        );

    const answers =
        document.getElementById(
            "internetAnswers"
        );

    const next =
        document.getElementById(
            "internetNextButton"
        );

    const feedback =
        document.getElementById(
            "internetFeedback"
        );


    if (!question || !answers) {
        return;
    }


    if (
        internetQuestionIndex >=
        internetQuestions.length
    ) {

        finishInternetQuiz();

        return;
    }


    const current =
        internetQuestions[
        internetQuestionIndex
        ];


    question.textContent =
        "Question " +
        (internetQuestionIndex + 1) +
        " of " +
        internetQuestions.length +
        ": " +
        current.question;


    answers.innerHTML =
        "";


    if (feedback) {
        feedback.textContent = "";
    }


    if (next) {
        next.style.display = "none";
    }


    internetAnswered =
        false;


    current.answers.forEach(
        function (answer, index) {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.textContent =
                answer;


            button.onclick =
                function () {

                    internetAnswer(
                        index
                    );

                };


            answers.appendChild(
                button
            );

        }
    );

}


function internetAnswer(selectedIndex) {

    if (internetAnswered) {
        return;
    }


    internetAnswered =
        true;


    const current =
        internetQuestions[
        internetQuestionIndex
        ];


    const buttons =
        document.querySelectorAll(
            "#internetAnswers button"
        );


    const feedback =
        document.getElementById(
            "internetFeedback"
        );


    const next =
        document.getElementById(
            "internetNextButton"
        );


    if (
        selectedIndex ===
        current.correct
    ) {

        internetScore++;


        if (feedback) {

            feedback.textContent =
                "🎉 Your answer is correct! Great job!";

            feedback.style.color =
                "green";

        }

    }

    else {

        if (feedback) {

            feedback.innerHTML =
                "❌ Your answer is not correct.<br>" +
                "Correct answer: " +
                current.answers[
                current.correct
                ];

            feedback.style.color =
                "red";

        }

    }


    buttons.forEach(
        function (button) {

            button.disabled =
                true;

        }
    );


    if (next) {

        next.style.display =
            "block";

    }

}


function nextInternetQuestion() {

    if (!internetAnswered) {
        return;
    }


    internetQuestionIndex++;


    showInternetQuestion();

}


function finishInternetQuiz() {

    localStorage.setItem(
        "internetScore",
        internetScore
    );


    const question =
        document.getElementById(
            "internetQuestion"
        );


    const answers =
        document.getElementById(
            "internetAnswers"
        );


    const feedback =
        document.getElementById(
            "internetFeedback"
        );


    const next =
        document.getElementById(
            "internetNextButton"
        );


    const finalScore =
        document.getElementById(
            "internetFinalScore"
        );


    const scoreText =
        document.getElementById(
            "internetScoreText"
        );


    if (question) {

        question.textContent =
            "🎉 Internet Basics Quiz Complete!";

    }


    if (answers) {

        answers.innerHTML =
            "";

    }


    if (feedback) {

        feedback.textContent =
            "";

    }


    if (next) {

        next.style.display =
            "none";

    }


    if (finalScore) {

        finalScore.style.display =
            "block";


        finalScore.innerHTML =
            "Your Score: " +
            internetScore +
            "/" +
            internetQuestions.length;

    }


    if (scoreText) {

        const percentage =
            Math.round(
                (
                    internetScore /
                    internetQuestions.length
                ) * 100
            );


        scoreText.textContent =
            "Score: " +
            internetScore +
            "/" +
            internetQuestions.length +
            " (" +
            percentage +
            "%)";

    }

}


function restartInternetQuiz() {

    internetQuestionIndex =
        0;

    internetScore =
        0;

    internetAnswered =
        false;


    showInternetQuestion();

}


/* =========================================================
   DIGITAL SAFETY QUIZ
========================================================= */

const safetyQuestions = [

    {
        question: "Which password is safer?",
        answers: [
            "A long password with different characters",
            "123456",
            "password",
            "yourname"
        ],
        correct: 0
    },

    {
        question: "What should you do with a suspicious message?",
        answers: [
            "Ignore it and tell a trusted adult if needed",
            "Click every link",
            "Share your password",
            "Send personal information"
        ],
        correct: 0
    },

    {
        question: "Should you share your password with other people?",
        answers: [
            "No",
            "Yes, with everyone",
            "Yes, online",
            "Always"
        ],
        correct: 0
    },

    {
        question: "What information should you be careful about sharing online?",
        answers: [
            "Personal information",
            "Public weather information",
            "A general school subject",
            "A favorite color"
        ],
        correct: 0
    }

];


let safetyQuestionIndex = 0;
let safetyScore = 0;
let safetyAnswered = false;


function showSafetyQuestion() {

    const question =
        document.getElementById(
            "safetyQuestion"
        );

    const answers =
        document.getElementById(
            "safetyAnswers"
        );

    const next =
        document.getElementById(
            "safetyNextButton"
        );

    const feedback =
        document.getElementById(
            "safetyFeedback"
        );


    if (!question || !answers) {
        return;
    }


    if (
        safetyQuestionIndex >=
        safetyQuestions.length
    ) {

        finishSafetyQuiz();

        return;
    }


    const current =
        safetyQuestions[
        safetyQuestionIndex
        ];


    question.textContent =
        "Question " +
        (safetyQuestionIndex + 1) +
        " of " +
        safetyQuestions.length +
        ": " +
        current.question;


    answers.innerHTML =
        "";


    if (feedback) {
        feedback.textContent = "";
    }


    if (next) {
        next.style.display = "none";
    }


    safetyAnswered =
        false;


    current.answers.forEach(
        function (answer, index) {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.textContent =
                answer;


            button.onclick =
                function () {

                    safetyAnswer(
                        index
                    );

                };


            answers.appendChild(
                button
            );

        }
    );

}


function safetyAnswer(selectedIndex) {

    if (safetyAnswered) {
        return;
    }


    safetyAnswered =
        true;


    const current =
        safetyQuestions[
        safetyQuestionIndex
        ];


    const buttons =
        document.querySelectorAll(
            "#safetyAnswers button"
        );


    const feedback =
        document.getElementById(
            "safetyFeedback"
        );


    const next =
        document.getElementById(
            "safetyNextButton"
        );


    if (
        selectedIndex ===
        current.correct
    ) {

        safetyScore++;


        if (feedback) {

            feedback.textContent =
                "🎉 Your answer is correct! Stay safe online!";

            feedback.style.color =
                "green";

        }

    }

    else {

        if (feedback) {

            feedback.innerHTML =
                "❌ Your answer is not correct.<br>" +
                "Correct answer: " +
                current.answers[
                current.correct
                ];

            feedback.style.color =
                "red";

        }

    }


    buttons.forEach(
        function (button) {

            button.disabled =
                true;

        }
    );


    if (next) {

        next.style.display =
            "block";

    }

}


function nextSafetyQuestion() {

    if (!safetyAnswered) {
        return;
    }


    safetyQuestionIndex++;


    showSafetyQuestion();

}


function finishSafetyQuiz() {

    localStorage.setItem(
        "safetyScore",
        safetyScore
    );


    const question =
        document.getElementById(
            "safetyQuestion"
        );


    const answers =
        document.getElementById(
            "safetyAnswers"
        );


    const feedback =
        document.getElementById(
            "safetyFeedback"
        );


    const next =
        document.getElementById(
            "safetyNextButton"
        );


    const finalScore =
        document.getElementById(
            "safetyFinalScore"
        );


    const scoreText =
        document.getElementById(
            "safetyScoreText"
        );


    if (question) {

        question.textContent =
            "🎉 Digital Safety Quiz Complete!";

    }


    if (answers) {

        answers.innerHTML =
            "";

    }


    if (feedback) {

        feedback.textContent =
            "";

    }


    if (next) {

        next.style.display =
            "none";

    }


    if (finalScore) {

        finalScore.style.display =
            "block";


        finalScore.innerHTML =
            "Your Score: " +
            safetyScore +
            "/" +
            safetyQuestions.length;

    }


    if (scoreText) {

        const percentage =
            Math.round(
                (
                    safetyScore /
                    safetyQuestions.length
                ) * 100
            );


        scoreText.textContent =
            "Score: " +
            safetyScore +
            "/" +
            safetyQuestions.length +
            " (" +
            percentage +
            "%)";

    }

}


function restartSafetyQuiz() {

    safetyQuestionIndex =
        0;

    safetyScore =
        0;

    safetyAnswered =
        false;


    showSafetyQuestion();

}


/* =========================================================
   AUTO START QUIZZES
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =========================
           COMPUTER PARTS
        ========================= */

        if (
            document.getElementById(
                "computerQuizQuestion"
            ) &&
            document.getElementById(
                "computerQuestion"
            )
        ) {

            computerPartsQuestions =
                computerPartsQuestionsByStandard[
                getStudentStandard()
                ];

            partsQuestionIndex =
                0;

            partsScore =
                0;

            partsAnswered =
                false;

            showPartsQuestion();

        }


        /* =========================
           KEYBOARD & MOUSE
        ========================= */

        if (
            document.getElementById(
                "keyboardQuestion"
            ) &&
            document.getElementById(
                "keyboardAnswers"
            )
        ) {

            keyboardQuestions =
                keyboardQuestionsByStandard[
                getStudentStandard()
                ];

            showKeyboardQuestion();

        }


        /* =========================
           INTERNET
        ========================= */

        if (
            document.getElementById(
                "internetQuestion"
            ) &&
            document.getElementById(
                "internetAnswers"
            )
        ) {

            showInternetQuestion();

        }


        /* =========================
           SAFETY
        ========================= */

        if (
            document.getElementById(
                "safetyQuestion"
            ) &&
            document.getElementById(
                "safetyAnswers"
            )
        ) {

            showSafetyQuestion();

        }

    }
);