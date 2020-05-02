import React from 'react'
import './Card.css'

const Card = ({ title, img , handleOnClick }) => {

    return (
        <div className="card-container">
            <div className="card-body" onClick={handleOnClick}>
                <div className="card-image">
                    <img src={img} alt={title} className="card-img"/>
                </div>
                
                <h3 className="card-title">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default Card