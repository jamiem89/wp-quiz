// Seciton containers
const introContainer = document.querySelector('#introContainer');
const quizContainer = document.querySelector('#quizContainer');
const outroContainer = document.querySelector('#outroContainer');
const scoreTotal = document.querySelector('#scoreTotal');
const scorePoss = document.querySelector('#scorePoss');

// Elements to interact with/be updated
const quizQuestion = document.querySelector('#questionContainer');
const quizAnswers = document.querySelector('#answerContainer');
const answerOne = document.querySelector('#quizButtonOne');
const answerTwo = document.querySelector('#quizButtonTwo');
const answerThree = document.querySelector('#quizButtonThree');
const answerFour = document.querySelector('#quizButtonFour');
const quizRestart = document.querySelector('#quizButtonRestart');

// Question category
let catQuestions = [];

// Question/score counter
let currentQuestion = 0;
let currentScore = 0;
let guessedWrong = false;
let categories = [];

// temporary questions
const allQuestions = [];


// Reusable fetch data function
function fetchData(url) {
    fetch(url, {
        method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        for(let i = 0; i < json.length; i++) {
            allQuestions.push(json[i]);
        }
    })
    .then(function() {
        setUpQuiz();
    });
};

// Grab categories and create buttons for each
function setUpQuiz(){
    for(let i = 0; i < allQuestions.length; i++) {
        if(!categories.includes(allQuestions[i]._embedded['wp:term'][0][0].name)) {
            categories.push(allQuestions[i]._embedded['wp:term'][0][0].name);
        };
    };

    for(let i = 0; i < categories.length; i++) {
        let button = document.createElement('button');
        let buttonText = categories[i];
        buttonText = buttonText.charAt(0).toUpperCase() + buttonText.slice(1);
        button.classList.add('btn');
        button.innerText = buttonText;
        button.dataset.cat = categories[i];
        introContainer.appendChild(button);

        button.addEventListener('click', function() {
            setCat(this.dataset.cat);
        });
    }
}

// Prepare the questions depending on category button pressed
function setCat(cat) {
    for(let i = 0; i < allQuestions.length; i++ ) {
        if(allQuestions[i]._embedded['wp:term'][0][0].name == cat) {
            catQuestions.push(allQuestions[i]);
        }
    }
    introContainer.classList.add('fade-out');
    introContainer.addEventListener('animationend', () => {
        introContainer.classList.remove('fade-out');
        introContainer.classList.add('inactive');
        quizContainer.classList.add('fade-in');
        quizContainer.classList.remove('inactive');
        renderQuestions(catQuestions, currentQuestion);
    })
}

// Render the correct question
function renderQuestions(questions, questionNum) {
    guessedWrong = false;
    answerOne.classList.remove('incorrect');
    answerTwo.classList.remove('incorrect');
    answerThree.classList.remove('incorrect');
    answerFour.classList.remove('incorrect');
    let questionEl = document.createElement('h2');
    questionEl.textContent = questions[questionNum].title.rendered;
    questionContainer.appendChild(questionEl);
    if(currentQuestion > 0) {
        let allQuestionTitles = document.querySelectorAll('h2');
        allQuestionTitles[0].classList.remove('fade-in');
        allQuestionTitles[0].classList.add('fade-out');
        questionEl.classList.add('fade-in');
        allQuestionTitles[0].addEventListener('animationend', function() {
            this.remove();
        });
    };
    answerOne.textContent = questions[questionNum].acf.answer_1;
    answerTwo.textContent = questions[questionNum].acf.answer_2;
    answerThree.textContent = questions[questionNum].acf.answer_3;
    answerFour.textContent = questions[questionNum].acf.answer_4;
}

// Progress quiz with button press
quizAnswers.addEventListener('click', (event) => {
    let buttonPressed = event.target;
    if(buttonPressed.tagName == "BUTTON") {
        console.log(catQuestions[currentQuestion].acf.correct_answer);
        if(buttonPressed.dataset.answer == catQuestions[currentQuestion].acf.correct_answer) {
            if(!guessedWrong) {
                currentScore++;
            };
            if(currentQuestion == (catQuestions.length - 1)) {
                quizEnd();
            } else {
                currentQuestion++;
                renderQuestions(catQuestions, currentQuestion);
            };
        } else {
            guessedWrong = true;
            buttonPressed.classList.add('incorrect');
        };
    };
});

// Display final score
function quizEnd() {
    quizContainer.classList.remove('fade-in');
    quizContainer.classList.add('fade-out');
    quizContainer.addEventListener('animationend', () => {
        quizContainer.classList.add('inactive');
        quizContainer.classList.remove('fade-out');
        outroContainer.classList.remove('inactive');
        outroContainer.classList.add('fade-in');
    });
    scoreTotal.textContent = currentScore;
    scorePoss.textContent = catQuestions.length;
    quizRestart.addEventListener('click', function() {
        outroContainer.classList.add()
        window.location.reload();
    });
}

fetchData('http://localhost:8888/wp-quiz/wp-json/wp/v2/questions?_embed=1');
// setUpQuiz();