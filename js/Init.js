import Card from './Card.js';

const UI = new Card();

window.onload = function (){

    // CARGAR BOTONES DE SELECCION DE ASIGNATURA
    UI.setCardSelector([
        {id: 'btn-redes', text:'Redes de computadores II'},
        {id: 'btn-semiprog', text:'Seminario de programacion II'}
    ]);

    // ASIGNAR ANIMACION A SELECTOR SUBJECT
    UI.setAnimation('.card');

    const subject = document.getElementById('selector-subject').addEventListener('click', function(e){
        let subtitle = '';
        if (e.target.id === 'btn-redes'){
            // ASIGNAR SUBTITULO
            subtitle = "Redes de computadores II";
        } else if (e.target.id === 'btn-semiprog'){
            // ASIGNAR SUBTITULO
            subtitle = "Seminario de programacion II";
        }
        document.getElementById('subtitle').innerText = subtitle;
    });
};

// FUNCIONES 
function getFile(URL){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var questions = JSON.parse(this.responseText).sort(function(){return Math.random() - 0.5});
        }
    };
    xmlhttp.open("GET", URL, true);
    xmlhttp.send();
}
