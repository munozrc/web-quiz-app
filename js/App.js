let num_question = 1;
let score = 0;
let questions;
let current_question;
let btn_correct;
let btn_wrong;

function load(){
  document.getElementById("redes2-btn").addEventListener("click", function(){loadQuestions(1)});
  document.getElementById("semiprog2-btn").addEventListener("click", function(){loadQuestions(2)});

  document.getElementById("a-btn").addEventListener("click", function(){checkAnswer(0,document.getElementById("a-btn"))});
  document.getElementById("b-btn").addEventListener("click", function(){checkAnswer(1,document.getElementById("b-btn"))});
  document.getElementById("c-btn").addEventListener("click", function(){checkAnswer(2,document.getElementById("c-btn"))});
  document.getElementById("d-btn").addEventListener("click", function(){checkAnswer(3,document.getElementById("d-btn"))});
  document.getElementById("e-btn").addEventListener("click", function(){checkAnswer(4,document.getElementById("e-btn"))});
  document.getElementById("next-btn").addEventListener("click", function(){createQuestions()});
}

function loadQuestions(num){

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      questions = JSON.parse(this.responseText).sort(function(){return Math.random() - 0.5});;
      createQuestions(questions);
    }
  };

  switch(num){
    case 1:
      document.getElementById("title-page").innerText = "Redes de computadores II";
      xmlhttp.open("GET", "questions-redes2.json", true);
      break;
    case 2:
      document.getElementById("title-page").innerText = "Redes de computadores II";
      xmlhttp.open("GET", "questions-redes2.json", true);
      break;
  }

  xmlhttp.send();
  document.getElementById("selector-class").className += "d-none";
  document.getElementById("selector-question").classList.remove("d-none");
}

function createQuestions(){

  if (num_question <= questions.length){
    
    current_question = questions[num_question - 1];

    if (num_question > 1){
      document.getElementById("next-btn").className += " d-none";

      document.getElementById("background").className = "normal";
  
      btn_correct.classList.remove("btn-success");
      btn_correct.className += " btn-outline-primary";
  
      if (btn_wrong != null){
        btn_wrong.classList.remove("btn-danger");
        btn_wrong.className += " btn-outline-primary";
      }
    }
  
    document.getElementById("num-question").innerText = "Pregunta #" + num_question;
    document.getElementById("question").innerText = current_question.question;
    document.getElementById("a-btn").innerText = current_question.options[0];
    document.getElementById("b-btn").innerText = current_question.options[1];
    document.getElementById("c-btn").innerText = current_question.options[2];
    document.getElementById("d-btn").innerText = current_question.options[3];
    document.getElementById("e-btn").innerText = current_question.options[4];
  
    num_question++;
  } else {
    showResult();
  }
}

function checkAnswer(option, btn){

  document.getElementById("next-btn").classList.remove("d-none");

  if (current_question.answer == option){
    document.getElementById("background").className = "correct";
    btn.classList.remove("btn-outline-primary");
    btn.className += " btn-success";
    btn_correct = btn;
    score++;
  } else {
    document.getElementById("background").className = "wrong";
    btn.classList.remove("btn-outline-primary");
    btn.className += " btn-danger";
    btn_wrong = btn;

    switch(current_question.answer){
      case 0:
        btn_correct = document.getElementById("a-btn");
        break;
      case 1:
        btn_correct = document.getElementById("b-btn");
        break;
      case 2:
        btn_correct = document.getElementById("c-btn");
        break;
      case 3:
        btn_correct = document.getElementById("d-btn");
        break;
      case 4:
        btn_correct = document.getElementById("e-btn");
        break;
    }

    btn_correct.classList.remove("btn-outline-primary");
    btn_correct.className += " btn-success";
  }
}

function showResult(){
  document.getElementById("selector-question").className += " d-none";
  document.getElementById("background").className = "normal";
  document.getElementById("show-score").classList.remove("d-none");
  document.getElementById("score").innerText = score + " / " + (num_question - 1);
  console.log(score);
}

document.addEventListener("DOMContentLoaded", load, false);