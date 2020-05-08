import React from 'react'
import './styles.css'

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

const MenuQuestions = () => {

    const handleSelect = e => {
        let check
        if (e.target.className === 'no-check' || e.target.className === 'active')
            check = e.target
        else
            check = e.target.lastChild
        
        if (check.className === 'active') {
            check.className = 'no-check'
        } else {
            check.className = 'active'
        }

        console.log(check)
    }

    return (
        <div className="menuquestions--container">
            <div className="menuquestions--wrapper">
                <h1 className="menuquestions--title">Seleccione las preguntas</h1>
                <div className="menuquestions--container-items">
                    <div className="menuquestions--item">
                        <h2> Author: Carlos Muñoz </h2>
                        <ul className="menuquestions--bank-questions">
                            <li onClick={handleSelect} id='list'>
                                <p> REDES P13 (Tema 9)</p><span className="no-check"> </span>
                            </li>
                            <li onClick={handleSelect}>
                                <p> REDES P14 (Tema 9)</p><span className="no-check"> </span>
                            </li>
                            <li onClick={handleSelect}>
                                <p> REDES P15 (Tema 9)</p><span className="no-check"> </span>
                            </li>
                            <li onClick={handleSelect}>
                                <p> REDES P16 (Tema 9)</p><span className="no-check"> </span>
                            </li>
                        </ul>
                    </div>
                    <div className="menuquestions--item">
                        <h2> Author: David Chicumque </h2>
                        <ul className="menuquestions--bank-questions">
                            <li onClick={handleSelect}>
                                <p> REDES P13 (Tema 9)</p><span className="no-check"> </span>
                            </li>
                            <li onClick={handleSelect}>
                                <p> REDES P14 (Tema 9)</p><span className="no-check"> </span>
                            </li>
                            <li onClick={handleSelect}>
                                <p> REDES P15 (Tema 9)</p><span className="no-check"> </span>
                            </li>
                            <li onClick={handleSelect}>
                                <p> REDES P16 (Tema 9)</p><span className="no-check"> </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ButtonPrimary
                name='continue'
                value='Continuar'
            />
        </div>
    )
}

export default MenuQuestions