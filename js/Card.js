class Card{

    constructor(){
        this.container = document.getElementById('main');
    }

    createOptions(buttons, type_button){
        const parent = document.createElement('div');
        parent.setAttribute('class', 'card-body')
        buttons.map(function(elemento){
            parent.innerHTML += `<button id="${elemento.id}" class="${type_button}">${elemento.text}</button>`;
        })
        return parent;
    }

    setCardSelector(buttons){

        const body = this.createOptions(buttons, 'btn');
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', 'selector-subject');

        const header = document.createElement('div');
        header.setAttribute('class', 'card-header');
        header.innerHTML = `<h3>Seleccione la asignatura</h3>`;

        card.appendChild(header);
        card.appendChild(body);

        //this.container.innerText = "";
        this.container.appendChild(card);
    }

    setCardQuestion(buttons, text_question, num_question){

        const body = this.createOptions(buttons, 'btn btn-answer text-left');
        const question = document.createElement('div');
        question.setAttribute('id', 'question');
        console.log(question);
        question.innerText = text_question;
        body.insertBefore(question,body.firstChild);
        //body.innerHTML += `<button id="btn-next-question" class="btn">Siguiente</button>`;

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', 'quiz');

        const header = document.createElement('div');
        header.setAttribute('class', 'card-header');
        header.innerHTML = `<h3 id="num-question">Pregunta #${num_question}</h3>`;

        card.appendChild(header);
        card.appendChild(body);

        this.container.innerText = "";
        this.container.appendChild(card);
    }

    setAnimation(element, value = 'in'){

        if (value === 'in'){
            TweenMax.from(element, 2, {
                y: 100,
                opacity: 0,
                ease: Expo.easeInOut
            });
        } else if (value === 'out') {
            TweenMax.to(element, 2, {
                y: 100,
                opacity: 0,
                ease: Expo.easeInOut
            });
        }
    }

}


export default Card;