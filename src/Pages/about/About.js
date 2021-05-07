import React, { useState, useEffect, useRef } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { motion } from 'framer-motion'


import './about.scss'

import BottomContentHolder from '../../Components/BottomContentHolder/BottomContentHolder'
import HeaderContent from '../../Components/HeaderContent/HeaderContent'
import MapPort from '../../Components/Map/Map'
import AppCarousel from '../../Components/AppCarousel/AppCarousel'


function About({ breakpoints, currentBreakpoint }) {
    const [ready, setReady] = useState(true)
    const [showMap, setShowMap] = useState(false)
    const cb = breakpoints[currentBreakpoint];

    const headerList = { title: 'Get to Know Us', subtitle: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Quisque velit nisi, pretium ut lacinia in, elementum id enim.' }
    const aboutCardList = [
        { id: 1, title: 'Who We Are', desc: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta.Donec rutrum congue leo eget malesuada.Sed porttitor lectus nibh.Donec sollicitudin molestie malesuada.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.Cras ultricies ligula sed magna dictum porta.Donec rutrum congue leo eget malesuada.Sed porttitor lectus nibh.Donec sollicitudin molestie malesuada.' },
        { id: 2, title: 'Our Vision', desc: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta.Donec rutrum congue leo eget malesuada.Sed porttitor lectus nibh.Donec sollicitudin molestie malesuada.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.Cras ultricies ligula sed magna dictum porta.Donec rutrum congue leo eget malesuada.Sed porttitor lectus nibh.Donec sollicitudin molestie malesuada.' },
        { id: 3, title: 'Our Mission', desc: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta.Donec rutrum congue leo eget malesuada.Sed porttitor lectus nibh.Donec sollicitudin molestie malesuada.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.Cras ultricies ligula sed magna dictum porta.Donec rutrum congue leo eget malesuada.Sed porttitor lectus nibh.Donec sollicitudin molestie malesuada.' }
    ]
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        scrollToTop()
    }, [])


    const AboutCard = ({ title, desc }) => {
        return (
            <motion.div
                className="aboutCard_container">
                <h3 >{title}</h3>
                <p className="aboutCard_p">{desc}</p>
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
            <HeaderContent y={0} title={headerList.title} subtitle={headerList.subtitle} />

            <BottomContentHolder y={cb <= 400 ? 0 : -40}>
                <AppCarousel arrowColor="#4bb18f37">
                    {aboutCardList.map(card => (
                        <AboutCard title={card.title} desc={card.desc} key={card.id} />
                    ))}
                </AppCarousel>

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