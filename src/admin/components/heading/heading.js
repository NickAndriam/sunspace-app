import React from 'react'
import './heading.scss'


const Heading = ({ title, lineWidth }) => {

    return (
        <div className="heading_container">
            <p className="heading_text">{title || 'Header'}</p>
            <div className="heading_line" style={{ width: lineWidth }} />
        </div>
    )
}

export default Heading
