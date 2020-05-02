import React from 'react'
import './Header.css'

import IconAdd from '../../Images/icons/add.png'

const Header = ({ location = 'Home' }) => {

    return (
        <React.Fragment>
            <div className="hero-author">
                <p className="author-name">
                    by <a href="https://github.com/iamcarlosmunoz">@iamcarlosmunoz</a>
                </p>
            </div>

            <div className="hero-section">
                <div className="hero-logo">
                    <h1 className="hero-title">Quiz App</h1>
                    <p className="hero-location">
                        {location}</p>
                </div>

                <div className="add-section">
                    <img src={IconAdd} alt="icon add"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header