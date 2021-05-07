import React from 'react'
import { motion } from 'framer-motion'
import './bch.scss'
function BottomContentHolder({ children, y = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0, 1], y: y, transition: { duration: 1.2, delayChildren: 1 } }}
            exit={{ opacity: 0 }}
            className="bch_container">
            {children}
        </motion.div>
    )
}

export default BottomContentHolder