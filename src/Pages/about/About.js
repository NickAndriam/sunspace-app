import React, { useState, useEffect, useRef } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { motion } from 'framer-motion'


import './about.scss'

import BottomContentHolder from '../../Components/BottomContentHolder/BottomContentHolder'
import HeaderContent from '../../Components/HeaderContent/HeaderContent'
import MapPort from '../../Components/Map/Map'


function About({ breakpoints, currentBreakpoint }) {
    const [ready, setReady] = useState(true)
    const [showMap, setShowMap] = useState(false)
    const cb = breakpoints[currentBreakpoint];




    const AboutCard = () => {
        return (
            <motion.div

                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [5, 0], opacity: 1, transition: { duration: 1 } }}
                initial={{ y: [0, 5], opacity: 0 }}
                className="aboutCard_container">
                <h3 style={{ textAlign: 'center' }}>Who We Are</h3>
                <p className="aboutCard_p" >Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                Cras ultricies ligula sed magna dictum porta.
                Donec rutrum congue leo eget malesuada.
                Sed porttitor lectus nibh.
                Donec sollicitudin molestie malesuada.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                Cras ultricies ligula sed magna dictum porta.
                Donec rutrum congue leo eget malesuada.
                Sed porttitor lectus nibh.
Donec sollicitudin molestie malesuada.</p>
            </motion.div>
        )
    }

    const ContactUs = () => {
        return (
            <motion.div className="contactUs_container">
                <h3 className="about_contactUs_title">Contact Us</h3>
                <p className="contactUs_p">Address: red porttitor lectus nibh. Vestibulum ante ipsum</p>
                <p className="contactUs_p">Email: justanemail@email.cpm</p>
                <p className="contactUs_p">Tel: +66 90-654-4972</p>
                <p className="contactUs_p">Fax: 053-207-8904</p>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 1 }}
            // animate={ready ? { overflowY: 'hidden' } : { overflowY: '' }}
            exit={{ opacity: 1 }}
            onAnimationComplete={() => setReady(false)}
            transition={{ duration: 0.3 }}
            className="about_container"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.7, type: 'spring', stiffness: 300 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="about_button">
                {/* <p className="about_boutton_txt">About Us</p> */}
            </motion.div>
            <HeaderContent y={0} title="Get to Know Us" subtitle="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Quisque velit nisi, pretium ut lacinia in, elementum id enim." />
            <BottomContentHolder y={cb <= 400 ? -40 : 0}>
                <div className="aboutCardHolder">
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                </div>
                <div className="contactUs_map_container">
                    <ContactUs />
                    {showMap &&
                        <motion.div
                            className="about_map"
                            initial={{ opacity: 0, height: 0, width: 0 }}
                            animate={{ opacity: 1, height: 400, width: 400, transition: { delay: 1, type: 'spring', stiffness: 50 } }}
                        >
                            {/* <MapPort /> */}
                        </motion.div>
                    }
                </div>
            </BottomContentHolder>
        </motion.div>
    )
}

export default withBreakpoints(About)