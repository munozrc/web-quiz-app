import Quiz from './Quiz.js'

const quiz = new Quiz();

quiz.loadFiles();

window.onload = function (){
    quiz.loopMain();
};


