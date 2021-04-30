import React from 'react'
import { motion } from 'framer-motion'

import './headerContent.scss'

export default function HeaderContent({ y, title, subtitle }) {
    const headerContent_variants = {
        initial: {
            y: y,
            opacity: 0,
        },
        animate: {
            y: [40, y],
            opacity: 1,
            transition: { duration: 0.4, type: 'spring', stiffness: 100 }
        },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    }

    return (

        <motion.div
            variants={headerContent_variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="headerContent_container">
            <h2>{title}</h2>
            <p className="headerContent_container_subtitle">{subtitle}</p>
        </motion.div>
    )
}





