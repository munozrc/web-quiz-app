import React, { useState } from 'react'
import './style.css'

import Questions from './Questions'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

const Quiz = ({ questions }) => {

    // Global Variables
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ checkQuestion, setCheckQuestion ] = useState(false)

    const HandleCheckAnswer = e => {

        if (!checkQuestion) {

            if ( questions[currentQuestion].answer === parseInt(e.target.name)) {
                e.target.className += ' correct'
            } else {
                e.target.className += ' wrong'
                document.getElementsByName(questions[currentQuestion].answer)[0].className += ' correct'
            }
    
            setCheckQuestion(true)
        }
    }

    const HandleNextQuestion = e => {

        if ( currentQuestion <= questions.length ) {
            setCurrentQuestion(currentQuestion + 1)
            setCheckQuestion(false)
        } else {
            console.log('END QUIZ')
        }
    }

    return (
        <div className="quiz--container">
            <div className="quiz--wrapper">
                <Questions 
                    question = { questions[currentQuestion] }
                    onClick = { HandleCheckAnswer }
                />
                {
                    checkQuestion && 
                    <ButtonPrimary 
                        name='next-question'
                        value='Siguiente'
                        onClick={HandleNextQuestion}
                    />
                }
            </div>
        </div>
    )
}

export default Quiz