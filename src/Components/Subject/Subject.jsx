import React from 'react'
import './Subject.css'
import Card from '../Card/Card'

import ImgNetwork from '../../Images/icons/domain.svg'
import ImgIOT from '../../Images/icons/electronics.svg'

const Subject = () => {

    const HandleOnClick = () => {
        console.log("YEI!!")
    }

    return (
        <div className="subject-wrapper">
            <div className="subject-container">
                <h1 className="subject-title">
                    Seleccione la asignatura
                </h1>
                <div className="subject-card-container">
                    <Card
                        title="Redes de Computadores II"
                        img={ImgNetwork}
                        handleOnClick={HandleOnClick}
                    />
                    <Card
                        title="Seminario de Programación II"
                        img={ImgIOT}
                        handleOnClick={HandleOnClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Subject