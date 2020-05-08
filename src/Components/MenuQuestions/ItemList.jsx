import React from 'react'

const ItemList = ( { id, name, text, handleSelect }) => (
    <li onClick={handleSelect}>
        <p> {text} </p><span className="no-check" name={name} id={id}> </span>
    </li>
)

export default ItemList