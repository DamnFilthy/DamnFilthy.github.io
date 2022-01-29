questions = [
    {
        index: 0,
        question: "Что такое HTML?",
        answers: [
            {
                index: 0,
                answer: 'Язык гипертекстовой разметки',
                correct:true
            },
            {
                index: 1,
                answer: 'Язык программирования'
            },
            {
                index: 2,
                answer: 'Каскадные таблицы стилей'
            },

        ]
    },
    {
        index: 1,
        question: "Что такое CSS?",
        answers: [
            {
                index: 0,
                answer: 'База данных в облаке'
            },
            {
                index: 1,
                answer: 'Фреймворк для разработки под мобильные устройства'
            },
            {
                index: 2,
                answer: 'Каскадные таблицы стилей',
                correct:true
            },
        ]
    },
    {
        index: 1,
        question: "Что такое JavaScript?",
        answers: [
            {
                index: 0,
                answer: 'Лучший язык программирования'
            },
            {
                index: 1,
                answer: 'Точно лучше чем Python'
            },
            {
                index: 2,
                answer: 'Вид порнографии',
                correct:true
            },
        ]
    },
]
let index = 0;
let countCorrectAnswers = 0;

let questionArea = document.getElementById('question'),
    answersArea = document.getElementById('answers'),
    button = document.getElementById('quiz-btn'),
    restartButton = document.getElementById('restart');

function clear(questionArea, answersArea) {
    questionArea.innerHTML = '';
    answersArea.innerHTML = '';
}

function render(questions, index, questionArea, answersArea){
    button.classList.remove('hide')
    questionArea.innerHTML = `<h2>${questions[index].question}</h2>`
    button.classList.remove('green');
    
    for (let i = 0; i < questions[index].answers.length; i++){
        answersArea.innerHTML += `
                <li class="quiz-block-answer">
                 <input type="radio" id="${questions[index].answers[i].index}"
                 name="contact" value="${questions[index].answers[i].answer}">
                <label for="${questions[index].answers[i].index}">
                <div style="cursor: pointer; padding-left: 10px;">${questions[index].answers[i].answer}</div>
                </label>
                </li>
    `
    }
    let radio = document.querySelectorAll('input[type=radio]');
    radio.forEach(item => {
        item.addEventListener('change', () => {
            button.classList.add('green');
        });
    })

}

function gameOver(questionArea, answersArea) {
    questionArea.innerHTML = 'Вопросов больше нет';
    answersArea.innerHTML = `Ваш результат ${countCorrectAnswers}/${questions.length}`;
    restartButton.classList.remove('hide')
    restartButton.addEventListener('click', ()=>{
        restart();
    })
}

function restart() {
    index = 0;
    countCorrectAnswers = 0;
    clear(questionArea, answersArea);
    render(questions, index, questionArea, answersArea);
    button.classList.remove('green');
    restartButton.classList.add('hide')
}

render(questions, index, questionArea, answersArea);

button.addEventListener('click', () => {
    let radioButton = document.querySelectorAll('input[type=radio]:checked');
    if (radioButton.length > 0) {

        let answerIndex = radioButton[0].id;
        if (questions[index].answers[answerIndex].correct){
            countCorrectAnswers++;
        }

        index++;
        if (index !== questions.length ){
            clear(questionArea, answersArea);
            render(questions, index, questionArea, answersArea);
        } else {
            gameOver(questionArea, answersArea)
            button.classList.add('hide');
        }
    }
})

