import React from 'react'
import './appInput.scss'

const AppInput = (props) => {
    return (
        <>
            <input {...props} className="appInput" />
            <div className="appInput_underline" />
        </>
    )
}

export default AppInput
