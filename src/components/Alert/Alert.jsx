import React from 'react'

const Alert = ({message, onClose}) =>{
    return (
        <div>
            <div onClick={onClose}>
                <header>
                    <p>{message}</p>
                </header>
                <footer>
                    <button onClick={onClose}>Close</button>
                </footer>
            </div>
        </div>
    )
}

export default Alert;