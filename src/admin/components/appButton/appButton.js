import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './appButton.scss'
import { Link } from 'react-router-dom'

const AppButton = ({ title = 'Click me', bg, link = false, to, padding, icon, width, onClick, ...otherProps }) => {


    return (
        <div className="admin_appButton_container"
            style={{ backgroundColor: bg, padding: padding, width: width }}>
            {
                link ?
                    <Link to={to} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {icon}
                        <p style={{ fontSize: 14 }}>{title}</p>
                    </Link> :
                    <div style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={onClick}>
                        {icon}
                        <p style={{ fontSize: 14 }}>{title}</p>
                    </div>

            }
        </div>
    )
}

export default AppButton
