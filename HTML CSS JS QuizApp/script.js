const textA = document.querySelector("#a-text");
const textB = document.querySelector("#b-text");
const textC = document.querySelector("#c-text");
const textD = document.querySelector("#d-text");
const answers = document.querySelectorAll(".answer-radio");
const textQuestion = document.querySelector("#question-text");

let corretAnswerAmount =0;

const quizData = [
    {
    question : "My name is ?",
    a:"Fevzi",
    b:"Berkay",
    c:"Cem",
    d:"Deniz",
    correct:"a"

    },
    {
        question : "How old am I",
        a:"25",
        b:"22",
        c:"20",
        d:"17",
        correct:"b"
        }
]

const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex =0;
const currentQuestion = quizData[currentQuestionIndex];





function loadQuestion(){
    const currentQuestion = quizData[currentQuestionIndex];
    textQuestion.innerText = currentQuestion.question;
    textA.innerText = currentQuestion.a;
    textB.innerHTML = currentQuestion.b;
    textC.innerHTML = currentQuestion.c;
    textD.innerHTML = currentQuestion.d;
}

loadQuestion();

function nextQuestion(){

    let isCorrect = false;

    answers.forEach(answer => {
        if(answer.checked){
            if(answer.value = currentQuestion.correct){
                isCorrect = true;
            }
        }
    });

    if(isCorrect){
        corretAnswerAmount++;
    }

    if(currentQuestionIndex+1 >= quizData.length){
        alert(`Quiz is over , you have ${corretAnswerAmount} correct answers!`);
    }else{
        currentQuestionIndex++;
        loadQuestion();  
    }
      
    
}

nextButton.addEventListener('click' , nextQuestion);

answers.forEach(answer => {
    if(answer.checked){
        console.log(answer.value);
    }
});

