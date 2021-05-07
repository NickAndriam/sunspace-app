import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { BsInfoCircle } from 'react-icons/bs'

import './fullImage.scss'
import large from '../../Assets/bg/large.jpg'

function FullImage() {
    const [showDesc, setDesc] = useState(false)

    const fullImageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2, mass: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.4 } }
    }
    return (
        <motion.div
            variants={fullImageVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className="fullImage_container">
            <img src={large} alt="large" width="100%" />
            <p className="fullimage_close_button" onClick={() => window.history.back()}>x</p>
            <motion.div className="fullimage_desc"
                initial={{ y: '100%' }}
                animate={{ y: showDesc ? '0%' : '85%', transition: { duration: 0.5, mass: 0.5, bounce: 3 } }}>
                {showDesc ?
                    <RiArrowDownSLine color="white" size={40} className="fullimage_arrowbuttons" onClick={() => setDesc(!showDesc)} />
                    :
                    <BsInfoCircle color="white" size={25} className="fullimage_info" onClick={() => setDesc(!showDesc)} />
                }
                <p style={{ width: '80%' }}>Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
            </motion.div>
        </motion.div>
    )
}

export default FullImage
