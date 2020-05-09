import React, { useState } from 'react'
import './styles.css'

import { REDES } from '../variables'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import ItemQuestions from './ItemQuestions'

const MenuQuestions = ({ authors, location, addQuestions, initQuiz}) => {

    const [ questions, setQuestions ] = useState([])

    const handleSelect = e => {

        let check

        if (e.target.className === 'no-check' || e.target.className === 'active')
            check = e.target
        else
            check = e.target.lastChild


        if (check.className === 'active') {
            check.className = 'no-check'
            let filter_question = questions.filter(element => (element.id === check.id && element.name === check.name))
            setQuestions(questions.filter(element => element !== filter_question[0]))
        } else {
            check.className = 'active'
            let id = check.getAttribute('id')
            let name = check.getAttribute('name')
            setQuestions(questions.concat([{id, name}]))
        }
    }

    const handleOnClick = () => {
        questions.map( element => (
            addQuestions(element.id, element.name)
        ))

        initQuiz(true)  // INICIAR QUIZ
    }

    return (
        <div className="menuquestions--container">
            <div className="menuquestions--wrapper">
                <h1 className="menuquestions--title">Seleccione las preguntas</h1>
                <div className="menuquestions--container-items">
                    {
                        authors.map(element => (
                            <ItemQuestions 
                                key = { element.id }
                                author = { element.name }
                                list_items = { location === REDES ? element.subject.redes : element.subject.semiprog } 
                                handleSelect = { handleSelect }
                            />
                        ))
                    }
                </div>
            </div>

            {
                questions.length > 0 &&
                <ButtonPrimary
                    name='continue'
                    value='Iniciar Quiz'
                    onClick={handleOnClick}
                />
            }
        </div>
    )
}

export default MenuQuestions