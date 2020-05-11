import React, { useState } from 'react'
import './style.css'

import Questions from './Questions'
import Result from './Result'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

import Status from '../Status/Status'

const Quiz = ({ questions, backHome }) => {

    // Global Variables
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ listQuestions, setListQuestions ] = useState(questions)
    const [ checkQuestion, setCheckQuestion ] = useState(false)
    const [ wrongQuestions, setWrongQuestions ] = useState(0)
    const [ correctQuestions, setCorrectQuestions ] = useState(0)
    const [ finishQuiz, setFinishQuiz ] = useState(false)
    const [ lastButton, setLastButton ] = useState(null)
    const [ firstButton, setFirstButton ] = useState(null)

    const HandleCheckAnswer = e => {

        if (!checkQuestion) {

            if ( listQuestions[currentQuestion].answer === parseInt(e.target.name)) {
                e.target.className += ' correct'
                setCorrectQuestions(correctQuestions + 1)
                setLastButton(e.target)
            } else {
                e.target.className += ' wrong'
                let correctOption = document.getElementsByName(listQuestions[currentQuestion].answer)[0]
                correctOption.className += ' correct'
                setWrongQuestions(wrongQuestions + 1)
                setLastButton(correctOption)
                setFirstButton(e.target)
            }
            
            setCheckQuestion(true)
        }
    }

    const HandleNextQuestion = e => {

        if ( listQuestions.length - 1 > currentQuestion ) {
            if (lastButton != null){
                lastButton.className = 'button-void'
                setLastButton(null)
            }

            if (firstButton != null){
                firstButton.className = 'button-void'
                setFirstButton(null)
            }

            setCurrentQuestion(currentQuestion + 1)
            setCheckQuestion(false)
        } else {
            setFinishQuiz(true)
        }
    }

    const ReseltComponent = () => {
        setCurrentQuestion(0)
        setCheckQuestion(false)
        setWrongQuestions(0)
        setCorrectQuestions(0)
        setFinishQuiz(false)
        setLastButton(null)
        setFirstButton(null)
    }

    const HandleAgainQuiz = () => {
        ReseltComponent()
        setListQuestions( listQuestions.sort(() => { return Math.random() - 0.5 }))
    }

    const HandleBackHome = () => {
        ReseltComponent()
        backHome()
    }

    return (
        <div className="quiz--container">
            <div className="quiz--wrapper">
                {
                    !finishQuiz && 
                    <React.Fragment>
                        <Status
                            number_question_current = { currentQuestion + 1 }
                            total_number_questions = { listQuestions.length }
                            correct = { correctQuestions }
                            wrong = { wrongQuestions } 
                        />
                        <Questions 
                            question = { listQuestions[currentQuestion] }
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
                    </React.Fragment> 
                }
                {
                    finishQuiz && 
                    <Result 
                        correct={correctQuestions} 
                        wrong={wrongQuestions}
                        again={HandleAgainQuiz}
                        home={HandleBackHome}
                    />
                }
            </div>
        </div>
    )
}

export default Quiz