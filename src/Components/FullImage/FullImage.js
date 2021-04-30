import React from 'react'
import { motion } from 'framer-motion'

import './fullImage.scss'
import large from '../../Assets/bg/large.jpg'

function FullImage() {
    const fullImageVariants = {
        initial: { scale: 0.3, y: '100%', opacity: 0, borderRadius: 50 },
        animate: { scale: 1, y: '0%', opacity: 1, borderRadius: [200, 0], transition: { duration: 0.6 } },
        exit: { scale: 0.3, y: '100%', opacity: 0, borderRadius: 50, transition: { duration: 0.4 } }
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
