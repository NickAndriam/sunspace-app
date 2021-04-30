import React from 'react'
import { motion } from 'framer-motion'

import './fullImage.scss'
import large from '../../Assets/bg/large.jpg'

function FullImage() {
    const fullImageVariants = {
        initial: { opacity: 0, x: '100%' },
        animate: { scale: 1, x: '0%', opacity: 1, transition: { duration: 0.4 } },
        exit: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
    }
    return (
        <motion.div
            variants={fullImageVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className="fullImage_container">
            <img src={large} alt="large" width="100%" />
        </motion.div>
    )
}

export default FullImage
