class Card{

    constructor(){
        this.container = document.getElementById('main');
    }

    createOptions(buttons, type_button){
        const parent = document.createElement('div');
        parent.setAttribute('class', 'card-body')
        parent.setAttribute('id', 'card');
        buttons.map(function(elemento){
            parent.innerHTML += `<button id="${elemento.id}" class="${type_button}">${elemento.text}</button>`;
        })
        return parent;
    }

    addNextButton(parent){
        parent.innerHTML += `<button id="btn-next" class="btn ">Siguiente pregunta</button>`;
    }

    setCardSelector(buttons, title = 'Seleccione la asignatura',name = 'selector-subject', time_create = 0){
        const body = this.createOptions(buttons, 'btn');
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', name);

        const header = document.createElement('div');
        header.setAttribute('class', 'card-header');
        header.innerHTML = `<h3>${title}</h3>`;

        card.appendChild(header);
        card.appendChild(body);

        //this.container.innerText = "";
        this.container.appendChild(card);
    }

    editCardQuestion(buttons, text_question, num_question){

        const quiz = document.getElementById('quiz');

        const question = document.createElement('div');
        question.setAttribute('id', 'question');
        question.innerText = text_question;

        const body = this.createOptions(buttons, 'btn btn-answer text-left');
        body.insertBefore(question,body.firstChild);
        //body.innerHTML += `<button id="btn-next-question" class="btn">Siguiente</button>`;

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', 'quiz');

        const header = document.createElement('div');
        header.setAttribute('class', 'card-header');
        header.innerHTML = `<h3 id="num-question">Pregunta #${num_question}</h3>`;

        quiz.appendChild(header);
        quiz.appendChild(body);
    }

    setCardQuestion(buttons, text_question, num_question){

        const body = this.createOptions(buttons, 'btn btn-answer text-left');
        const question = document.createElement('div');
        question.setAttribute('id', 'question');
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

        //this.container.innerText = "";
        this.container.appendChild(card);
    }

    setAnimation(element, value = 'in', delay = 0, question = 0){
        if (value === 'in'){
            TweenMax.from(element, 2, {
                y: 100,
                opacity: 0,
                ease: Expo.easeInOut,
                delay: delay
            });
        } else if (value === 'out') {
            TweenMax.to(element, 2, {
                y: 50,
                opacity: 0,
                ease: Expo.easeInOut
            });
            if (question == 0){    
                window.setTimeout(function(){
                    let child = document.querySelector(element);
                    let parent = child.parentNode;
                    parent.removeChild(child);
                }, 1500);
            } else if (question == 1){
                window.setTimeout(function(){
                    let parent = document.querySelector(element);
                    parent.innerHTML = "";
                }, 1500);
            }
        }
    }

}

export default Card;