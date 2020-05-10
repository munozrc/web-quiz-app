import React from 'react'
import ButtonVoid from '../ButtonVoid/ButtonVoid'

const Questions = ({ question, onClick }) => {

    let counter = 0

    return (
        <div className="quiz--question">
            <h2 className="quiz--question--title">{ question.question }</h2>
            <ul>
                {
                    question.options.map( option => (
                        <li key = { option + counter } >
                            <ButtonVoid 
                                name = { counter++ }
                                value = { option }
                                onClick = { onClick }
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Questions