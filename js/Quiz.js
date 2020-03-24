import Card from './Card.js';

const UI = new Card();
var questions_redes = [];
var questions_semiprog = [];
var num_question = 1;
var select_option = false;
var score = 0;

class Quiz {

    loadFiles(){
        // CARGAR ARCHIVOS -- TEMPORAL
        this.getFile('questions/carlos/questions-redes2.json', 'redes');
        this.getFile('questions/yiner/questions-redes2.json', 'redes');

        this.getFile('questions/carlos/questions-semiprog2.json', 'semiprog');
        this.getFile('questions/yiner/questions-semiprog2.json', 'semiprog');
    }

    loopMain(){
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

                    //PRIMERA PREGUNTA
                    createQuestion(num_question, selected_questions);

                    const card_question = document.getElementById('quiz').addEventListener('click', function(e){ 
                        
                        if (e.target.id === '0' || e.target.id === '1' || e.target.id === '2' || e.target.id === '3' || e.target.id === '4'){
                            console.log('check question');
                            checkAnswer(num_question, selected_questions,parseInt(e.target.id));
                        }

                        if (select_option === true && e.target.id === 'btn-next') { // YA RESPONDIO LA PREGUNTA
                            console.log('next question');
                            num_question++;
                            editQuestion(num_question, selected_questions);
                        }

                        console.log('puntaje = ' + score);
                    });

                });
            } else {
                // SI NO HAY OPCIONES DE BANCO DE PREGUNTAS
                console.log('LOLs');
            }
        });

        function createQuestion(num_question, array_questions){
            var current = array_questions[num_question - 1];
            var buttons = [];
            var count = 0;
            current.options.map(function(element){
                buttons.push({id: count, text: element});
                count++;
            });

            score = 0; // REINICAR PUNTAJE
            
            UI.setCardQuestion(buttons, current.question, num_question);
            UI.setAnimation('#quiz','in',1.2);
        }
    
        function editQuestion(num_question, array_questions){
            if (num_question < array_questions.length){
                var current = array_questions[num_question - 1];
                var buttons = [];
                var count = 0;
                current.options.map(function(element){
                    buttons.push({id: count, text: element});
                    count++;
                });
                UI.setAnimation('#quiz','out',1.2,1);
                window.setTimeout(function(){
                    UI.editCardQuestion(buttons, current.question, num_question);
                    // ANIMACION
                    TweenMax.to('#quiz', 2, {
                        y: 0,
                        opacity: 1,
                        ease: Expo.easeInOut,
                        delay: 0
                    });
                }, 1500);
            }
        }
    
        function checkAnswer(num_question, array_questions, option){
            if (select_option === false){
                let button_select = document.getElementById(option);
                if (array_questions[num_question - 1].answer === option){ // ASERTO
                    button_select.className = 'btn text-left correct';
                    score++;
                } else {
                    button_select.className = 'btn text-left wrong';
                    document.getElementById(array_questions[num_question - 1].answer).className = 'btn text-left correct';
                }
    
                select_option = true;
            
                UI.addNextButton(button_select.parentNode);
            }
        }
    }

    // FUNCIONES 
    getFile(URL, subject){
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

}

export default Quiz;