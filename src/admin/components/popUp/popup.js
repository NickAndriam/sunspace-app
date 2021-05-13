import React, { useState } from 'react'

import './popup.scss'
import { motion } from 'framer-motion'
import AppButton from '../appButton/appButton'
import { useLocation } from 'react-router'
const PopUp = ({ children, show = false, onSave, onCancel }) => {
    const location = useLocation()
    const url = location.pathname.split('/')
    const pathname = url[2]

    return (
        <>
            { show &&
                <div className="appCardPopUp_container">
                    <motion.div className="appCardPopUp"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { type: 'spring', stiffness: 120, duration: 0.5, mass: 0.3, bounce: 0.2 } }}
                        exit={{ scale: 0 }}>
                        {children}
                        <div style={{ display: 'flex', width: '95%', justifyContent: 'flex-end' }}>
                            <AppButton title="Save" bg="#4BB18F" width={120} onClick={onSave} />
                            <AppButton title="Cancel" bg="#D6D6D6" width={100} onClick={onCancel} />
                        </div>
                    </motion.div>
                </div>
            }
        </>
    )
}

export default PopUp
