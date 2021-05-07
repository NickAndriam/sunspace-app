import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AppButton from '../appButton/appButton'
import './appCard.scss'



const AppCard = ({ buttonWidth = 100, cardWidth = 150, title = "Title", btnTitle }) => {
    let [isVisible, setVisibility] = useState(false)
    let [showIcon, setShowIcon] = useState(false)

    const PopUp = () => {

        const inputTitle = title.toLowerCase()

        return (
            <div className="appCardPopUp_container"
            >
                <motion.div className="appCardPopUp"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { type: 'spring', stiffness: 120, duration: 0.5, mass: 0.3, bounce: 0.2 } }}
                    exit={{ scale: 0 }}>
                    <h3>Current {inputTitle}:</h3>
                    <p style={{ color: 'rgba(0, 0, 0, 0.331)', fontSize: 16 }}>Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit
                        amet, consectetur adip.</p>
                    <h3>New {inputTitle}:</h3>
                    <input type="text" className="addnew_input" placeholder={`Enter new ${inputTitle} here...`} />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
                        <AppButton title="Save" bg="#4BB18F" width={120} />
                        <AppButton title="Cancel" bg="#D6D6D6" width={100} onClick={() => setVisibility(false)} />
                    </div>
                </motion.div>
            </div>
        )
    }
    return (
        <>
            {isVisible && <PopUp />}
            <motion.div className="appCard_container"
                onHoverStart={() => setShowIcon(true)}
                onHoverEnd={() => setShowIcon(false)}
                onClick={() => setShowIcon(!showIcon)}

                animate={{ width: cardWidth, transition: { duration: 0.4 } }}

            >
                <p style={{ color: '#848383', fontSize: 16 }}>{title}</p>
                <AppButton title={btnTitle || "Edit"} padding="px 0px 0px 0px" width={buttonWidth} onClick={() => setVisibility(true)} />
                {showIcon && <motion.p className="deleteCard_icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.4 } }}
                    exit={{ opacity: 0 }}
                    onClick={() => alert('deleted')}
                >x</motion.p>}
            </motion.div>
        </>
    )
}

export default AppCard
