import React from 'react'
import './Subject.css'
import Card from '../Card/Card'
import { REDES, SEMIPROG } from '../variables'

import ImgNetwork from '../../Images/icons/domain.svg'
import ImgIOT from '../../Images/icons/electronics.svg'

const Subject = ({ handleChangeSubject }) => {

    return (
        <div className="subject-wrapper">
            <div className="subject-container">
                <h1 className="subject-title">
                    Seleccione la asignatura
                </h1>
                <div className="subject-card-container">
                    <Card
                        title={ REDES }
                        img={ImgNetwork}
                        handleOnClick={handleChangeSubject}
                    />
                    <Card
                        title={ SEMIPROG }
                        img={ImgIOT}
                        handleOnClick={handleChangeSubject}
                    />
                </div>
            </div>
        </div>
    )
}

export default Subject