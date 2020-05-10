import React from 'react'

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import wrongIcon from '../../Images/icons/wrong.svg'
import correctIcon from '../../Images/icons/correct.svg'

const Result = ({ wrong, correct, again, home }) => {

    return (
        <div className="result--wrapper">
            <h2>Quiz Result</h2>
            <p>Questions {wrong} <img src={wrongIcon} alt="icon wrong question"/></p>
            <p>Questions {correct} <img src={correctIcon} alt="icon wrong question"/></p>
            <p>Total <span>{correct + wrong}</span></p>

            <ButtonPrimary
                name='btn-again'
                value='Try again'
                onClick={again} 
                width={'200px'}
            />

            <ButtonPrimary
                name='btn-back-home'
                value='Back Homepage'
                onClick={home} 
                width={'200px'}
            />
        </div>
    )
}

export default Result