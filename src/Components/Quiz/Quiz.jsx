import React from 'react'
import './style.css'

import ButtonVoid from '../ButtonVoid/ButtonVoid'

const Quiz = () => {

    return (
        <div className="quiz--container">
            <div className="quiz--wrapper">
                <div className="quiz--question">
                    <h2 className="quiz--question--title">Si un usuario desea tener acceso a una red de datos como Internet, barata, con un ancho de banda aceptable y que no impida el uso independiente del teléfono. es posible mediante:</h2>
                    <ul>
                        <li><ButtonVoid 
                            name={'0'}
                            value={'A. Fibra óptica.'}
                        /></li>
                        <li><ButtonVoid 
                            name={'0'}
                            value={'B. Fibra óptica.'}
                        /></li>
                        <li><ButtonVoid 
                            name={'0'}
                            value={'C. Fibra óptica.'}
                        /></li>
                        <li><ButtonVoid 
                            name={'0'}
                            value={'D. Fibra óptica.'}
                        /></li>
                        <li><ButtonVoid 
                            name={'0'}
                            value={'E. Fibra óptica.'}
                        /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Quiz