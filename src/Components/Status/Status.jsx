import React from 'react'

const Status = ({ number_question_current = 2, total_number_questions = 30, correct = 2, wrong = 0}) => {

    return (
        <div className="bar-wrapper">
            <div className="bar-questions">
                <h2>
                    #{number_question_current} <p>of {total_number_questions}</p>
                </h2>
            </div>

            <div className="bar-summary">
                <div className="summary-correct">
                    <img src={CorrectIcon} alt="icon question correct"/>
                    <p>{correct}</p>
                </div>
                <div className="summary-wrong">
                    <img src={WrongIcon} alt="icon question correct"/>
                    <p>{wrong}</p>
                </div>
            </div>
        </div>
    )
}

export default Status