import React, { useState } from 'react'
import './styles.css'

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import ItemQuestions from './ItemQuestions'

const MenuQuestions = ({ authors, location, addQuestions}) => {

    const [ questions, setQuestions ] = useState([])

    const handleSelect = e => {

        let check
        let id
        let name

        if (e.target.className === 'no-check' || e.target.className === 'active')
            check = e.target
        else
            check = e.target.lastChild
        
        if (check.className === 'active') {
            check.className = 'no-check'
            id = check.getAttribute('id')
            name = check.getAttribute('name')
            let filter_question = questions.filter(element => (element.id === id && element.name === name))
            setQuestions(questions.filter(element => element !== filter_question[0]))
        } else {
            check.className = 'active'
            id = check.getAttribute('id')
            name = check.getAttribute('name')
            setQuestions(questions.concat([{id, name}]))
        }
    }

    const handleOnClick = () => {
        questions.map( element => (
            addQuestions(element.id, element.name)
        ))
    }

    return (
        <div className="menuquestions--container">
            <div className="menuquestions--wrapper">
                <h1 className="menuquestions--title">Seleccione las preguntas</h1>
                <div className="menuquestions--container-items">
                    {
                        authors.map(element => (
                            <ItemQuestions 
                                key={element.id}
                                author={element.name}
                                list_items={location === 'Redes de Computadores II' ? element.subject.redes : element.subject.semiprog}
                                handleSelect={handleSelect}
                            />
                        ))
                    }
                </div>
            </div>

            <ButtonPrimary
                name='continue'
                value='Continuar'
                onClick={handleOnClick}
            />
        </div>
    )
}

export default MenuQuestions