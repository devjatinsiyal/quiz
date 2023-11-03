const questions = [
    {
        "question": "What is the capital of France?",
        "options": ["New York", "London", "Paris", "Dublin"],
        "answer": "Paris"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
        "answer": "Leonardo Da Vinci"
    }
    // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const resultContainer = document.getElementById("result-container");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option, currentQuestion.answer));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.textContent = `You scored ${score} out of ${questions.length}!`;
    document.getElementById("next-button").style.display = "none";
}

loadQuestion();
