import React, { useState } from 'react'
import Proptypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    // const [inputValue, setInputValue] = useState(); Si lo dejo así me saldrá un error porque el estado inicial será undefined

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setCategories(cat => ([inputValue, ...cat]));
            setInputValue('');
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.protoTypes = {

    setCategories: Proptypes.func.isRequired
}
