const questions = [
    {
        question: "Quando e como Ayrton Senna Faleceu?",
        answers: ["Em 1999, em um acidente", "Em 1994, em um acidente", "Em 1994, por overdose", "Em 2020, por COVID-19"],
        correctAnswer: 1
    },
    {
        question: "Ayrton Senna tinha filhos? Se sim, quantos?",
        answers: ["Não", "Sim, 1", "Sim, 2", "Sim, 4"],
        correctAnswer: 0
    },
    {
        question: "Como Ayrton Senna começou a gostar de automobilismo?",
        answers: [
            "Andando de moto",
            "Assistindo videos sobre o assunto",
            "Andando de kart",
            "Ajudando seu pai na oficina em que trabalhava"
        ],
        correctAnswer: 3
    },
    {
        question: "Qual destes era um título de fama de Ayrton Senna?",
        answers: [
            "Principe de Monaco",
            "Dono da Fórmula 1",
            "McQueen",
            "Corredor Milagroso"
        ],
        correctAnswer: 0
    },
    {
        question: "Qual era o diferencial de Ayrton Senna?",
        answers: [
            "Curvas",
            "Retas",
            "Drift",
            "Corridas na chuva"
        ],
        correctAnswer: 3
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `sua Nota: ${score} / ${questions.length}`;
}

window.onload = loadQuestions;