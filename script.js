// get elements on page

let startButton = document.querySelector('.start-btn');

let startButtonWrapper = document.querySelector(".start-button-wrapper")

let quizRules = document.querySelector('.quizRule-wrapper')

let goToquestions = document.querySelector('.goToQuestionsBtn')

let questionsContainer = document.querySelector('.questions-container')

let quitButton = document.querySelector('.exitBtn')



// Start Quiz button
startButton.addEventListener('click', e=>{
    e.preventDefault()
   startButtonWrapper.style.display = "none";

   quizRules.style.display ="block"
})

goToquestions.addEventListener('click', e=>{
    e.preventDefault()
     quizRules.style.display ="none";
     questionsContainer.style.display = "block";
})


quitButton.addEventListener('click', e=>{
    e.preventDefault()
    quizRules.style.display = "none";
    startButtonWrapper.style.display = 'block'
})
