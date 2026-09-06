// =====================================================
// EDUCONNECT - MAIN SCRIPT.JS
// =====================================================


// =====================================================
// START LEARNING
// =====================================================

function startLearning() {

    window.location.href = "login.html";

}


// =====================================================
// STUDENT LOGIN
// =====================================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nameElement =
                document.getElementById(
                    "studentName"
                );


            const standardElement =
                document.getElementById(
                    "studentClass"
                );


            const passwordElement =
                document.getElementById(
                    "password"
                );


            const name =
                nameElement
                    ? nameElement.value.trim()
                    : "";


            const standard =
                standardElement
                    ? standardElement.value
                    : "";


            const password =
                passwordElement
                    ? passwordElement.value
                    : "";


            if (name === "") {

                alert(
                    "Please enter your name."
                );

                return;

            }


            if (standard === "") {

                alert(
                    "Please select your standard."
                );

                return;

            }


            if (password === "") {

                alert(
                    "Please enter your password."
                );

                return;

            }


            // Save student information

            localStorage.setItem(
                "studentName",
                name
            );


            localStorage.setItem(
                "studentStandard",
                standard
            );


            // Create score values

            const scoreKeys = [

                "mathScore",

                "scienceScore",

                "readingScore",

                "vocabularyScore",

                "grammarScore",

                "computerPartsScore",

                "keyboardScore",

                "internetScore",

                "safetyScore",

                "gkScore",

                "funScore",

                "funChallenges"

            ];


            scoreKeys.forEach(
                function (key) {

                    if (
                        localStorage.getItem(key)
                        === null
                    ) {

                        localStorage.setItem(
                            key,
                            "0"
                        );

                    }

                }
            );


            // Go to dashboard

            window.location.href =
                "student-dashboard.html";

        }
    );

}


// =====================================================
// STUDENT INFORMATION
// =====================================================

const savedName =
    localStorage.getItem(
        "studentName"
    );


const savedStandard =
    localStorage.getItem(
        "studentStandard"
    );


// =====================================================
// DASHBOARD WELCOME
// =====================================================

const welcomeStudent =
    document.getElementById(
        "welcomeStudent"
    );


if (
    welcomeStudent &&
    savedName
) {

    welcomeStudent.textContent =
        "Welcome, " +
        savedName +
        "! 👋";

}


// =====================================================
// STUDENT STANDARD INFORMATION
// =====================================================

const studentInfo =
    document.getElementById(
        "studentInfo"
    );


if (
    studentInfo &&
    savedStandard
) {

    studentInfo.textContent =
        "You are learning in Standard " +
        savedStandard +
        ". Let's start your learning journey!";

}


// =====================================================
// LOGOUT
// =====================================================

function logoutStudent() {

    localStorage.removeItem(
        "studentName"
    );


    localStorage.removeItem(
        "studentStandard"
    );


    window.location.href =
        "index.html";

}


// =====================================================
// OPEN SUBJECTS
// =====================================================

function openSubjects() {

    const studentName = localStorage.getItem("studentName");
    const studentStandard = localStorage.getItem("studentStandard");

    if (studentName && studentStandard) {
        window.location.href = "subjects.html";
    } else {
        window.location.href = "login.html";
    }
}
// =====================================================
// STANDARD DISPLAY
// =====================================================

const standardDisplay =
    document.getElementById(
        "standardDisplay"
    );


if (
    standardDisplay &&
    savedStandard
) {

    standardDisplay.textContent =
        "Standard " +
        savedStandard;

}


// =====================================================
// MATHEMATICS DESCRIPTION
// =====================================================

const mathDescription =
    document.getElementById(
        "mathDescription"
    );


if (
    mathDescription &&
    savedStandard
) {

    const mathDescriptions = {

        "1":
            "Counting, numbers, addition and subtraction.",

        "2":
            "Addition, subtraction, multiplication and shapes.",

        "3":
            "Multiplication, division, fractions and measurements.",

        "4":
            "Fractions, decimals, geometry and problem solving.",

        "5":
            "Decimals, fractions, geometry and advanced problems."

    };


    mathDescription.textContent =
        mathDescriptions[savedStandard] ||
        "Learn Mathematics step by step.";

}


// =====================================================
// ENGLISH DESCRIPTION
// =====================================================

const englishDescription =
    document.getElementById(
        "englishDescription"
    );


if (
    englishDescription &&
    savedStandard
) {

    const englishDescriptions = {

        "1":
            "Alphabet, simple words and basic reading.",

        "2":
            "Grammar, vocabulary and simple sentences.",

        "3":
            "Sentences, grammar, reading and vocabulary.",

        "4":
            "Tenses, grammar, writing and comprehension.",

        "5":
            "Advanced grammar, writing and comprehension."

    };


    englishDescription.textContent =
        englishDescriptions[savedStandard] ||
        "Learn English step by step.";

}


// =====================================================
// SCIENCE DESCRIPTION
// =====================================================

const scienceDescription =
    document.getElementById(
        "scienceDescription"
    );


if (
    scienceDescription &&
    savedStandard
) {

    const scienceDescriptions = {

        "1":
            "Animals, plants, colours and our surroundings.",

        "2":
            "Plants, animals, food and our environment.",

        "3":
            "Human body, plants, animals and materials.",

        "4":
            "Matter, energy, environment and the human body.",

        "5":
            "Solar system, matter, energy and ecosystems."

    };


    scienceDescription.textContent =
        scienceDescriptions[savedStandard] ||
        "Learn Science step by step.";

}


// =====================================================
// COMPUTER DESCRIPTION
// =====================================================

const computerDescription =
    document.getElementById(
        "computerDescription"
    );


if (
    computerDescription &&
    savedStandard
) {

    const computerDescriptions = {

        "1":
            "Introduction to computers and basic parts.",

        "2":
            "Keyboard, mouse and basic computer operations.",

        "3":
            "Files, folders, internet basics and digital safety.",

        "4":
            "Coding concepts, applications and internet skills.",

        "5":
            "HTML basics, programming concepts and technology."

    };


    computerDescription.textContent =
        computerDescriptions[savedStandard] ||
        "Learn computer skills step by step.";

}


// =====================================================
// COMPUTER MAIN LESSON
// =====================================================

const computerStandard =
    document.getElementById(
        "computerStandard"
    );


const computerLessonTitle =
    document.getElementById(
        "computerLessonTitle"
    );


const computerLessonText =
    document.getElementById(
        "computerLessonText"
    );


if (
    computerStandard &&
    savedStandard
) {

    computerStandard.textContent =
        "🎓 Standard " +
        savedStandard;


    const computerLessons = {

        "1": {

            title:
                "🖥️ Computer Basics",

            text:
                "Learn what a computer is and discover simple computer parts."

        },

        "2": {

            title:
                "⌨️ Keyboard and Mouse",

            text:
                "Learn how to use a keyboard, mouse and basic computer controls."

        },

        "3": {

            title:
                "📁 Files, Folders and Internet",

            text:
                "Learn about files, folders, internet basics and digital safety."

        },

        "4": {

            title:
                "💻 Applications and Coding",

            text:
                "Learn about applications, coding ideas and useful computer skills."

        },

        "5": {

            title:
                "🌐 HTML and Programming Basics",

            text:
                "Learn simple HTML, programming concepts and how technology works."

        }

    };


    if (
        computerLessons[savedStandard]
    ) {

        if (computerLessonTitle) {

            computerLessonTitle.textContent =
                computerLessons[
                    savedStandard
                ].title;

        }


        if (computerLessonText) {

            computerLessonText.textContent =
                computerLessons[
                    savedStandard
                ].text;

        }

    }

}


// =====================================================
// SUBJECT NAVIGATION
// =====================================================

function startSubject(subject) {

    if (
        subject === "Mathematics"
    ) {

        window.location.href =
            "math.html";

    }

    else if (
        subject === "English"
    ) {

        window.location.href =
            "english.html";

    }

    else if (
        subject === "Science"
    ) {

        window.location.href =
            "science.html";

    }

    else if (
        subject === "Computer"
    ) {

        window.location.href =
            "computer.html";

    }

    else if (
        subject === "General Knowledge"
    ) {

        window.location.href =
            "general-knowledge.html";

    }

    else if (
        subject === "Fun Activities"
    ) {

        window.location.href =
            "activities.html";

    }

}


// =====================================================
// OPEN MATH
// =====================================================

function openMath() {

    window.location.href =
        "math.html";

}


// =====================================================
// SIMPLE MATH ANSWER
// IMPORTANT:
// Renamed so it does NOT conflict with
// the Activities checkAnswer function.
// =====================================================

function checkMathSimpleAnswer(answer) {

    const result =
        document.getElementById(
            "result"
        );


    if (!result) return;


    if (answer === 5) {

        result.textContent =
            "🎉 Correct! Great job!";

    }

    else {

        result.textContent =
            "❌ Not quite. Try again!";

    }

}


// =====================================================
// MATH QUIZ QUESTIONS
// =====================================================

const mathQuestions = {

    "1": [

        {
            question:
                "What is 2 + 3?",

            answers:
                ["4", "5", "6", "7"],

            correct: 1
        },

        {
            question:
                "What is 5 - 2?",

            answers:
                ["2", "3", "4", "5"],

            correct: 1
        },

        {
            question:
                "What number comes after 9?",

            answers:
                ["8", "9", "10", "11"],

            correct: 2
        },

        {
            question:
                "How many sides does a triangle have?",

            answers:
                ["2", "3", "4", "5"],

            correct: 1
        },

        {
            question:
                "What is 1 + 1?",

            answers:
                ["1", "2", "3", "4"],

            correct: 1
        }

    ],


    "2": [

        {
            question:
                "What is 7 + 5?",

            answers:
                ["10", "11", "12", "13"],

            correct: 2
        },

        {
            question:
                "What is 15 - 6?",

            answers:
                ["7", "8", "9", "10"],

            correct: 2
        },

        {
            question:
                "What is 3 × 2?",

            answers:
                ["5", "6", "7", "8"],

            correct: 1
        },

        {
            question:
                "What is 10 + 10?",

            answers:
                ["15", "18", "20", "25"],

            correct: 2
        },

        {
            question:
                "How many sides does a square have?",

            answers:
                ["3", "4", "5", "6"],

            correct: 1
        }

    ],


    "3": [

        {
            question:
                "What is 6 × 4?",

            answers:
                ["20", "24", "26", "28"],

            correct: 1
        },

        {
            question:
                "What is 20 ÷ 4?",

            answers:
                ["4", "5", "6", "8"],

            correct: 1
        },

        {
            question:
                "What is 15 + 27?",

            answers:
                ["40", "41", "42", "43"],

            correct: 2
        },

        {
            question:
                "What is 50 - 18?",

            answers:
                ["30", "31", "32", "33"],

            correct: 2
        },

        {
            question:
                "What is 5 × 5?",

            answers:
                ["20", "25", "30", "35"],

            correct: 1
        }

    ],


    "4": [

        {
            question:
                "What is 1/2 + 1/2?",

            answers:
                ["1/2", "1", "2", "3/2"],

            correct: 1
        },

        {
            question:
                "What is 0.5 + 0.5?",

            answers:
                ["0.5", "1", "1.5", "2"],

            correct: 1
        },

        {
            question:
                "What is 12 × 5?",

            answers:
                ["50", "55", "60", "65"],

            correct: 2
        },

        {
            question:
                "How many degrees are in a right angle?",

            answers:
                ["45°", "90°", "180°", "360°"],

            correct: 1
        },

        {
            question:
                "What is 100 ÷ 10?",

            answers:
                ["5", "10", "20", "100"],

            correct: 1
        }

    ],


    "5": [

        {
            question:
                "What is 0.25 + 0.75?",

            answers:
                ["0.5", "1", "1.25", "1.5"],

            correct: 1
        },

        {
            question:
                "What is 3/4 as a decimal?",

            answers:
                ["0.25", "0.5", "0.75", "1"],

            correct: 2
        },

        {
            question:
                "What is 25% of 100?",

            answers:
                ["20", "25", "50", "75"],

            correct: 1
        },

        {
            question:
                "What is 12 × 8?",

            answers:
                ["86", "96", "106", "116"],

            correct: 1
        },

        {
            question:
                "What is 144 ÷ 12?",

            answers:
                ["10", "11", "12", "14"],

            correct: 2
        }

    ]

};


// =====================================================
// MATH QUIZ VARIABLES
// =====================================================

let currentQuestion = 0;

let mathScore =
    Number(
        localStorage.getItem(
            "mathScore"
        )
    ) || 0;

let selectedAnswer = -1;

let quizQuestions = [];


// =====================================================
// LOAD MATH QUIZ
// =====================================================

if (
    document.getElementById(
        "quizQuestion"
    ) &&
    savedStandard
) {

    quizQuestions =
        mathQuestions[
        savedStandard
        ] ||
        mathQuestions["1"];


    showQuestion();

}


// =====================================================
// SHOW MATH QUESTION
// =====================================================

function showQuestion() {

    if (
        quizQuestions.length === 0
    ) {

        return;

    }


    const question =
        quizQuestions[
        currentQuestion
        ];


    const questionElement =
        document.getElementById(
            "quizQuestion"
        );


    const progressElement =
        document.getElementById(
            "quizProgress"
        );


    const resultElement =
        document.getElementById(
            "quizResult"
        );


    const nextButton =
        document.getElementById(
            "nextQuestion"
        );


    if (!questionElement) {

        return;

    }


    questionElement.textContent =
        question.question;


    if (progressElement) {

        progressElement.textContent =
            "Question " +
            (currentQuestion + 1) +
            " of " +
            quizQuestions.length;

    }


    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const button =
            document.getElementById(
                "answer" + i
            );


        if (button) {

            button.textContent =
                question.answers[i];

            button.disabled =
                false;

        }

    }


    if (resultElement) {

        resultElement.textContent =
            "";

    }


    if (nextButton) {

        nextButton.style.display =
            "none";

    }


    selectedAnswer = -1;

}


// =====================================================
// SELECT MATH ANSWER
// =====================================================

function selectAnswer(answer) {

    if (
        quizQuestions.length === 0
    ) {

        return;

    }


    if (
        selectedAnswer !== -1
    ) {

        return;

    }


    selectedAnswer =
        answer;


    const question =
        quizQuestions[
        currentQuestion
        ];


    const result =
        document.getElementById(
            "quizResult"
        );


    if (!result) {

        return;

    }


    if (
        answer === question.correct
    ) {

        mathScore++;


        result.textContent =
            "🎉 Your answer is correct! Great job!";


        localStorage.setItem(
            "mathScore",
            mathScore
        );

    }

    else {

        result.textContent =
            "❌ Your answer is not correct. Keep learning!";

    }


    const nextButton =
        document.getElementById(
            "nextQuestion"
        );


    if (nextButton) {

        nextButton.style.display =
            "inline-block";

    }

}


// =====================================================
// NEXT MATH QUESTION
// =====================================================

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion <
        quizQuestions.length
    ) {

        showQuestion();

    }

    else {

        showFinalScore();

    }

}


// =====================================================
// FINAL MATH SCORE
// =====================================================

function showFinalScore() {

    const total =
        quizQuestions.length;


    const percentage =
        Math.round(
            (
                mathScore /
                total
            ) * 100
        );


    const questionElement =
        document.getElementById(
            "quizQuestion"
        );


    const progressElement =
        document.getElementById(
            "quizProgress"
        );


    const resultElement =
        document.getElementById(
            "quizResult"
        );


    const answerButtons =
        document.querySelector(
            ".answer-buttons"
        );


    const nextButton =
        document.getElementById(
            "nextQuestion"
        );


    const restartButton =
        document.getElementById(
            "restartQuiz"
        );


    if (questionElement) {

        questionElement.textContent =
            "🏆 Quiz Complete!";

    }


    if (progressElement) {

        progressElement.textContent =
            "Your Final Result";

    }


    if (resultElement) {

        resultElement.textContent =
            "🎉 Your Final Score: " +
            mathScore +
            " / " +
            total +
            " | " +
            percentage +
            "%";

    }


    if (answerButtons) {

        answerButtons.style.display =
            "none";

    }


    if (nextButton) {

        nextButton.style.display =
            "none";

    }


    if (restartButton) {

        restartButton.style.display =
            "inline-block";

    }

}


// =====================================================
// RESTART MATH QUIZ
// =====================================================

function restartQuiz() {

    currentQuestion = 0;

    mathScore = 0;

    selectedAnswer = -1;


    localStorage.setItem(
        "mathScore",
        "0"
    );


    const answerButtons =
        document.querySelector(
            ".answer-buttons"
        );


    if (answerButtons) {

        answerButtons.style.display =
            "flex";

    }


    const restartButton =
        document.getElementById(
            "restartQuiz"
        );


    if (restartButton) {

        restartButton.style.display =
            "none";

    }


    showQuestion();

}


// =====================================================
// ENGLISH LESSON
// =====================================================

const englishStandard =
    document.getElementById(
        "englishStandard"
    );


const englishLessonTitle =
    document.getElementById(
        "englishLessonTitle"
    );


const englishLessonText =
    document.getElementById(
        "englishLessonText"
    );


if (
    englishStandard &&
    savedStandard
) {

    englishStandard.textContent =
        "🎓 Standard " +
        savedStandard;


    const lessons = {

        "1": {

            title:
                "🔤 Alphabet and Simple Words",

            text:
                "Learn letters, sounds, simple words and basic reading."

        },

        "2": {

            title:
                "📝 Simple Sentences",

            text:
                "Learn vocabulary, simple sentences and basic grammar."

        },

        "3": {

            title:
                "📖 Reading and Grammar",

            text:
                "Practice reading, vocabulary, sentences and basic grammar."

        },

        "4": {

            title:
                "✍️ Tenses and Writing",

            text:
                "Learn tenses, grammar, paragraph writing and comprehension."

        },

        "5": {

            title:
                "📚 Advanced Grammar and Writing",

            text:
                "Practice advanced grammar, vocabulary, writing and reading comprehension."

        }

    };


    if (
        lessons[savedStandard]
    ) {

        if (englishLessonTitle) {

            englishLessonTitle.textContent =
                lessons[
                    savedStandard
                ].title;

        }


        if (englishLessonText) {

            englishLessonText.textContent =
                lessons[
                    savedStandard
                ].text;

        }

    }

}


// =====================================================
// ENGLISH LESSON BUTTONS
// =====================================================

function startEnglishLesson(type) {

    if (
        type === "reading"
    ) {

        window.location.href =
            "english-reading.html";

    }

    else if (
        type === "vocabulary"
    ) {

        window.location.href =
            "english-vocabulary.html";

    }

    else if (
        type === "grammar"
    ) {

        window.location.href =
            "english-grammar.html";

    }

}


// =====================================================
// ENGLISH READING
// =====================================================

let readingScore =
    Number(
        localStorage.getItem(
            "readingScore"
        )
    ) || 0;


function checkReadingAnswer(answer) {

    const result =
        document.getElementById(
            "readingResult"
        );


    if (!result) return;


    if (
        answer === "waters"
    ) {

        readingScore = 1;


        localStorage.setItem(
            "readingScore",
            readingScore
        );


        result.textContent =
            "🎉 Your answer is correct! Riya waters the plants every morning.";

    }

    else {

        readingScore = 0;


        localStorage.setItem(
            "readingScore",
            readingScore
        );


        result.textContent =
            "❌ Your answer is not correct. Read the passage carefully.";

    }


    showReadingScore();

}


function showReadingScore() {

    const scoreElement =
        document.getElementById(
            "readingScore"
        );


    if (scoreElement) {

        scoreElement.textContent =
            "🏆 Reading Score: " +
            readingScore +
            " / 1";

    }

}


// =====================================================
// ENGLISH VOCABULARY
// =====================================================

let vocabularyScore =
    Number(
        localStorage.getItem(
            "vocabularyScore"
        )
    ) || 0;


function checkVocabularyAnswer(answer) {

    const result =
        document.getElementById(
            "vocabularyResult"
        );


    if (!result) return;


    if (
        answer === "nice"
    ) {

        vocabularyScore = 1;


        localStorage.setItem(
            "vocabularyScore",
            vocabularyScore
        );


        result.textContent =
            "🎉 Your answer is correct! Beautiful means very nice.";

    }

    else {

        vocabularyScore = 0;


        localStorage.setItem(
            "vocabularyScore",
            vocabularyScore
        );


        result.textContent =
            "❌ Your answer is not correct. Read the meaning above.";

    }


    showVocabularyScore();

}


function showVocabularyScore() {

    const scoreElement =
        document.getElementById(
            "vocabularyScore"
        );


    if (scoreElement) {

        scoreElement.textContent =
            "🏆 Vocabulary Score: " +
            vocabularyScore +
            " / 1";

    }

}


// =====================================================
// ENGLISH GRAMMAR
// =====================================================

let grammarScore =
    Number(
        localStorage.getItem(
            "grammarScore"
        )
    ) || 0;


function checkGrammarAnswer(answer) {

    const result =
        document.getElementById(
            "grammarResult"
        );


    if (!result) return;


    if (
        answer === "correct"
    ) {

        grammarScore = 1;


        localStorage.setItem(
            "grammarScore",
            grammarScore
        );


        result.textContent =
            "🎉 Your answer is correct! That is a proper sentence.";

    }

    else {

        grammarScore = 0;


        localStorage.setItem(
            "grammarScore",
            grammarScore
        );


        result.textContent =
            "❌ Your answer is not correct. Look at the word order.";

    }


    showGrammarScore();

}


function showGrammarScore() {

    const scoreElement =
        document.getElementById(
            "grammarScore"
        );


    if (scoreElement) {

        scoreElement.textContent =
            "🏆 Grammar Score: " +
            grammarScore +
            " / 1";

    }

}


// =====================================================
// ENGLISH PROGRESS
// =====================================================

function showEnglishProgress() {

    const reading =
        document.getElementById(
            "readingProgress"
        );


    const vocabulary =
        document.getElementById(
            "vocabularyProgress"
        );


    const grammar =
        document.getElementById(
            "grammarProgress"
        );


    const total =
        document.getElementById(
            "totalEnglishProgress"
        );


    if (reading) {

        reading.textContent =
            readingScore +
            " / 1";

    }


    if (vocabulary) {

        vocabulary.textContent =
            vocabularyScore +
            " / 1";

    }


    if (grammar) {

        grammar.textContent =
            grammarScore +
            " / 1";

    }


    if (total) {

        total.textContent =
            (
                readingScore +
                vocabularyScore +
                grammarScore
            ) +
            " / 3";

    }

}


// =====================================================
// SCIENCE MAIN PAGE
// =====================================================

const scienceStandardElement =
    document.getElementById(
        "scienceStandard"
    );


const scienceLessonTitleElement =
    document.getElementById(
        "scienceLessonTitle"
    );


const scienceLessonTextElement =
    document.getElementById(
        "scienceLessonText"
    );


if (
    scienceStandardElement &&
    savedStandard
) {

    scienceStandardElement.textContent =
        "🎓 Standard " +
        savedStandard;


    const scienceLessons = {

        "1": {

            title:
                "🌱 Plants Around Us",

            text:
                "Learn about plants, animals, food and our surroundings."

        },

        "2": {

            title:
                "🐶 Animals and Their Homes",

            text:
                "Discover animals, their homes, food and daily life."

        },

        "3": {

            title:
                "🌍 Our Earth",

            text:
                "Learn about Earth, water, air, plants and animals."

        },

        "4": {

            title:
                "⚡ Energy and Matter",

            text:
                "Explore energy, materials, states of matter and simple scientific ideas."

        },

        "5": {

            title:
                "🔬 Human Body and Science",

            text:
                "Explore the human body, ecosystems, energy and scientific thinking."

        }

    };


    if (
        scienceLessons[savedStandard]
    ) {

        if (
            scienceLessonTitleElement
        ) {

            scienceLessonTitleElement.textContent =
                scienceLessons[
                    savedStandard
                ].title;

        }


        if (
            scienceLessonTextElement
        ) {

            scienceLessonTextElement.textContent =
                scienceLessons[
                    savedStandard
                ].text;

        }

    }

}


// =====================================================
// SCIENCE TOPIC
// =====================================================

const scienceTopicTitle =
    document.getElementById(
        "scienceTopicTitle"
    );


const scienceTopicText =
    document.getElementById(
        "scienceTopicText"
    );


if (
    scienceTopicTitle &&
    scienceTopicText &&
    savedStandard
) {

    const topics = {

        "1": {

            title:
                "🐶 Animals",

            text:
                "Learn about common animals and what they need to live."

        },

        "2": {

            title:
                "🏠 Animal Homes",

            text:
                "Discover where different animals live."

        },

        "3": {

            title:
                "🌿 Plants and Animals",

            text:
                "Learn how plants and animals depend on their environment."

        },

        "4": {

            title:
                "🌱 Living Things",

            text:
                "Explore plants, animals and how living things grow."

        },

        "5": {

            title:
                "🌎 Ecosystems",

            text:
                "Learn how plants, animals and their environment work together."

        }

    };


    if (
        topics[savedStandard]
    ) {

        scienceTopicTitle.textContent =
            topics[
                savedStandard
            ].title;


        scienceTopicText.textContent =
            topics[
                savedStandard
            ].text;

    }

}


// =====================================================
// SCIENCE QUIZ NAVIGATION
// =====================================================

function startScienceQuiz() {

    window.location.href =
        "science-quiz.html";

}

// =====================================================
// DASHBOARD OVERALL PROGRESS
// =====================================================

function updateDashboardProgress() {

    const math =
        Number(
            localStorage.getItem(
                "mathScore"
            )
        ) || 0;


    const science =
        Number(
            localStorage.getItem(
                "scienceScore"
            )
        ) || 0;


    const reading =
        Number(
            localStorage.getItem(
                "readingScore"
            )
        ) || 0;


    const vocabulary =
        Number(
            localStorage.getItem(
                "vocabularyScore"
            )
        ) || 0;


    const grammar =
        Number(
            localStorage.getItem(
                "grammarScore"
            )
        ) || 0;


    const parts =
        Number(
            localStorage.getItem(
                "computerPartsScore"
            )
        ) || 0;


    const keyboard =
        Number(
            localStorage.getItem(
                "keyboardScore"
            )
        ) || 0;


    const internet =
        Number(
            localStorage.getItem(
                "internetScore"
            )
        ) || 0;


    const safety =
        Number(
            localStorage.getItem(
                "safetyScore"
            )
        ) || 0;


    const gk =
        Number(
            localStorage.getItem(
                "gkScore"
            )
        ) || 0;


    // Computer total = 17

    const computer =
        parts +
        keyboard +
        internet +
        safety;


    // Overall total = 35

    const total =
        math +
        science +
        reading +
        vocabulary +
        grammar +
        computer +
        gk;


    const percentage =
        Math.round(
            (
                total /
                35
            ) * 100
        );


    const element =
        document.getElementById(
            "dashboardOverallPercentage"
        );


    if (element) {

        element.textContent =
            percentage +
            "%";

    }

}


// =====================================================
// UPDATE DASHBOARD
// =====================================================

updateDashboardProgress();

// =====================================================
// END OF MAIN SCRIPT.JS
// =====================================================