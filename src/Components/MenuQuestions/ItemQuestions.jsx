import React from 'react'
import ItemList from './ItemList'

const ItemQuestions = ({ author, handleSelect, list_items }) => {

    return (
        <div className="menuquestions--item">
            <h2> Author: {author} </h2>
            <ul className="menuquestions--bank-questions">
                {
                    list_items.map( element => (
                        <ItemList 
                            key={element.id}
                            id={element.id}
                            name={author}
                            text={element.text}
                            handleSelect={handleSelect}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemQuestions