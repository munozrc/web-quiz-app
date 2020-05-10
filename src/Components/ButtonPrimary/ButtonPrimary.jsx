import React from 'react'
import './style.css'

const ButtonPrimary = ({name, value, onClick, width = '150px'}) => (
    <button
        className="button-primary"
        name={name}
        onClick={onClick}
        style={{width: width}}
    >{value}</button>
)

export default ButtonPrimary