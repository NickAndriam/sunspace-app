import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AiFillCloseCircle } from 'react-icons/ai'

import './slideDown.scss'
import AppButton from '../appButton/appButton'

const SlideDown = ({ show = false, onClose, children }) => {

    const [isOpenBtn, setOpenBtn] = useState(false)

    const slideDownVariants = {
        initial: {
            y: '-100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingTop: 30
        },
        animate: {
            y: show ? '0%' : '-100%',
            transition: {
                duration: 0.4,
                type: 'spring',
                mass: 0.1,
                stiffness: 90
            }
        },
    }
    const slideDownVariantsContainer = {
        initial: {
            // y: '-100%',
            // display: 'none',
            transition: {
                duration: 0.5,
                type: 'spring',
                mass: 0.1,
                stiffness: 120
            }
        },
        animate: {
            // y: show ? '0%' : '-100%',
            display: show ? 'flex' : 'none',
            transition: {
                duration: 0.5,
                type: 'spring',
                mass: 0.3,
                stiffness: 120
            }
        },
    }
    return (
        <>
            {show &&
                <motion.div className="slideDown_main_container"
                    variants={slideDownVariantsContainer}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <motion.div className="slideDown_container"
                        variants={slideDownVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit">
                        {children}
                        <div style={{ position: 'fixed', top: '2%', right: '5%' }}>
                            <AiFillCloseCircle size={20} className="slideDown_close" onClick={onClose} />
                        </div>
                    </motion.div>
                </motion.div>
            }
        </>
    )
}

export default SlideDown
