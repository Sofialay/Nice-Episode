import React from 'react'
import '../styles/generic.scss'

function Button({ text, type }) {
    return (
        <button className={`btn ${type || 'default'}`}>
            { text }
        </button>
    )
}

export default Button