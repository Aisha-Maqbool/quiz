



let questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
        answer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById('question').innerHTML = questions[currentQuestion].question;

questions[currentQuestion].options.forEach((option, index) => {
    let li = document.createElement('li');
    li.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}`;
    document.getElementById('options').appendChild(li);
});

document.getElementById('submit').addEventListener('click', () => {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        let selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === questions[currentQuestion].answer) {
            score++;
            document.getElementById('result').innerHTML = `Correct! Your score is ${score}.`;
        } else {
            document.getElementById('result').innerHTML = `Incorrect. The correct answer is ${questions[currentQuestion].options[questions[currentQuestion].answer]}. Your score is ${score}.`;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            document.getElementById('question').innerHTML = questions[currentQuestion].question;
            document.getElementById('options').innerHTML = '';
            questions[currentQuestion].options.forEach((option, index) => {
                let li = document.createElement('li');
                li.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}`;
                document.getElementById('options').appendChild(li);
            });
        } else {
            document.getElementById('question').innerHTML = 'Quiz finished!';
            document.getElementById('options').innerHTML = '';
            document.getElementById('submit').style.display = 'none';
            document.getElementById('result').innerHTML = `Your final score is ${score} out of ${questions.length}.`;
        }
    } else {
        document.getElementById('result').innerHTML = 'Please select an option.';
    }
});


