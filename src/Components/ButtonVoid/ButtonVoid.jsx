import React from 'react'
import './style.css'

const ButtonPrimary = ({name, value, onClick, width = '100%'}) => (
    <button
        className="button-void"
        name={name}
        onClick={onClick}
        style={{width: width}}
    >{value}</button>
)

export default ButtonPrimary