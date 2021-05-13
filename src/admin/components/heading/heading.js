import React from 'react'
import './heading.scss'


const Heading = ({ title, lineWidth, textWidth }) => {

    return (
        <div className="heading_container">
            <p className="heading_text" style={{ width: textWidth }}>{title || 'Header'}</p>
            <div className="heading_line" style={{ width: lineWidth }} />
        </div>
    )
}

export default Heading
