import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './appButton.scss'
import { Link } from 'react-router-dom'

const AppButton = ({ title = 'Click me', bg, link = false, to, bold = false, padding, icon, width, borderRadius, onClick, ...otherProps }) => {


    return (
        <div className="admin_appButton_container"
            style={{ backgroundColor: bg, padding: padding, width: width, borderRadius: borderRadius }} onClick={onClick} >
            {
                link ?
                    <Link to={to} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {icon}
                        <p style={{ fontSize: 14 }}>{title}</p>
                    </Link> :
                    // <div style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    //     {icon}
                    //     <p style={{ fontSize: 14 }}>{title}</p>
                    // </div>
                    (
                        bold ?
                            <button className="admin_appButton_style_bold" {...otherProps} style={{ backgroundColor: bg, width: width }} >{title}</button>
                            :
                            <button className="admin_appButton_style" {...otherProps} style={{ backgroundColor: bg, width: width }} >{title}</button>
                    )}
        </div>
    )
}

export default AppButton
