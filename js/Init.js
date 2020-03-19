import Card from './Card.js';

const UI = new Card();
var questions_redes = [];
var questions_semiprog = [];

// CARGAR ARCHIVOS -- TEMPORAL
getFile('questions/carlos/questions-redes2.json', 'redes');
getFile('questions/yiner/questions-redes2.json', 'redes');

getFile('questions/carlos/questions-semiprog2.json', 'semiprog');
getFile('questions/yiner/questions-semiprog2.json', 'semiprog');

window.onload = function (){
    
    // CARGAR BOTONES DE SELECCION DE ASIGNATURA
    UI.setCardSelector([
        {id: 'btn-redes', text:'Redes de computadores II'},
        {id: 'btn-semiprog', text:'Seminario de programacion II'}
    ]);

    // ASIGNAR ANIMACION A SELECTOR SUBJECT
    UI.setAnimation('.card');

    const subject = document.getElementById('selector-subject').addEventListener('click', function(e){

        // MOSTRAR SUBTITULO
        let subtitle = '';
        if (e.target.id === 'btn-redes'){
            // ASIGNAR SUBTITULO
            subtitle = "Redes de computadores II";
        } else if (e.target.id === 'btn-semiprog'){
            // ASIGNAR SUBTITULO
            subtitle = "Seminario de programacion II";
        }
        document.getElementById('subtitle').innerText = subtitle;

        // SI HAY MAS OPCIONES DE SELECCION DE BANCO DE PREGUNTAS
        if ((e.target.id === 'btn-redes' && questions_redes.length > 1 ) || (e.target.id === 'btn-semiprog' && questions_semiprog.length > 1 )){
            // CREAR BOTONES DE SELECCION DE BANCO DE PREGUNTAS
            UI.setAnimation('#selector-subject', 'out'); // OCULTAR CARD ANTERIOR

            // CREAR SELECTOR DE BANCO DE PREGUNTAS
            UI.setCardSelector([
                {id: 'btn-option1', text:'Opcion 1'},
                {id: 'btn-option2', text:'Opcion 2'},
                {id: 'btn-all', text:'Todas las preguntas'}
            ], 'Seleccion de banco de preguntas','question_bank', 2000);

            // ANIMACION DE SELECTOR DE BANCO DE PREGUNTAS
            UI.setAnimation('#question_bank','in',1.2);

            const bank = document.getElementById('question_bank').addEventListener('click', function(e){
                
                var selected_questions = [];

                if (subtitle === 'Redes de computadores II'){
                    if (e.target.id === 'btn-option1'){
                        selected_questions = questions_redes[0];
                    } else if (e.target.id === 'btn-option2'){
                        selected_questions = questions_redes[1];
                    } else if (e.target.id === 'btn-all'){
                        selected_questions = questions_redes[0].concat(questions_redes[1]);
                    }
                } else if (subtitle === 'Seminario de programacion II'){
                    if (e.target.id === 'btn-option1'){
                        selected_questions = questions_semiprog[0];
                    } else if (e.target.id === 'btn-option2'){
                        selected_questions = questions_semiprog[1];
                    } else if (e.target.id === 'btn-all'){
                        selected_questions = questions_semiprog[0].concat(questions_semiprog[1]);
                    }
                }

                // ANIMAR SALIDA DEL CARD ANTERIOR
                UI.setAnimation('#question_bank', 'out');
                let num_question = 1;

                showQuestion(num_question, selected_questions);
            });
        } else {
            // SI NO HAY OPCIONES DE BANCO DE PREGUNTAS
            console.log('LOL');
        }
    });
};

// FUNCIONES 
function getFile(URL, subject){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var question = JSON.parse(this.responseText).sort(function(){return Math.random() - 0.5});
            if (subject === 'redes'){
                questions_redes.push(question);
            } else if (subject === 'semiprog'){
                questions_semiprog.push(question);
            }
        }
    };
    xmlhttp.open("GET", URL, true);
    xmlhttp.send();
}

function showQuestion(num_question, array_questions){
    if (num_question < array_questions.length){
        var current = array_questions[num_question - 1];
        var buttons = [];
        var count = 1;
        current.options.map(function(element){
            buttons.push({id: 'btn-'+count, text: element});
        });
        
        UI.setCardQuestion(buttons, current.question, num_question);
        UI.setAnimation('#quiz-'+num_question,'in',1.2);
    }
}
