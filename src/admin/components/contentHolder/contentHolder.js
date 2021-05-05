import React from 'react'
import { motion } from 'framer-motion'
import NavAdmin from '../navAdmin/navAdmin'
import './contentHolder.scss'

const ContentHolder = ({ children }) => {
    return (
        <motion.div className="contentHolder_container"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 1, type: 'spring', stiffness: 100, mass: 0.3 } }}
            exit={{ scale: 0 }}
        >
            <div className="contentHolder_sides">
                <NavAdmin />
                <div className="content_content">
                    {children}
                </div>
            </div>

        </motion.div>
    )
}

export default ContentHolder
