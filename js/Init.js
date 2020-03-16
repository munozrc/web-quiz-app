import Card from './Card.js';

const UI = new Card();

window.onload = function (){

    let buttons = [
        {id: 'btn-redes', text:'Redes de computadores II'},
        {id: 'btn-semiprog', text:'Seminario de programacion II'}
    ];

    UI.setCardSelector(buttons);

    const subject = document.getElementById('selector-subject').addEventListener('click', function(e){
        if (e.target.id === 'btn-redes'){
            // CODIGO TEMPORAL
            console.log('redes');
            let buttons = [
                {id: 'btn-a', text: 'A. si'},
                {id: 'btn-b', text: 'B. si'},
                {id: 'btn-c', text: 'C. si'},
                {id: 'btn-d', text: 'D. si'},
                {id: 'btn-e', text: 'E. si'}
            ]
            UI.setCardQuestion(buttons, "Esta es una preguntas",1);
        } else if (e.target.id === 'btn-semiprog'){
            console.log('semiprog');
        }
    });
};
