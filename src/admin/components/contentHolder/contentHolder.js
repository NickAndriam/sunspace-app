import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { motion } from 'framer-motion'
import { VscLoading } from 'react-icons/vsc'

import NavAdmin from '../navAdmin/navAdmin'
import './contentHolder.scss'

const ContentHolder = ({ children }) => {
    const location = useLocation()
    const url = location.pathname.split('/')
    const pathname = url[2]

    let [isVisible, setVisibility] = useState(false)
    let [loading, setLoaing] = useState(false)

    useEffect(() => {
        const onSwitch = async () => {
            switch (pathname) {
                case 'home':
                case 'about':
                case 'gallery':
                case 'news':
                    return await setVisibility(true);
                default:
                    return await (setVisibility(false))
            }
        };
        onSwitch()
    }, [pathname])

    useEffect(() => {
        setTimeout(() => { setLoaing(true) }, 600)
    }, [pathname])
    return (
        <>
            <motion.div className="contentHolder_container"
                initial={{ scale: 0 }}
                animate={{ scale: isVisible ? 1 : 0, transition: { duration: 1, type: 'spring', stiffness: 100, mass: 0.3 } }}
                exit={{ scale: 0 }}
            >
                <div className="contentHolder_sides">
                    <NavAdmin />
                    <div className="content_content">
                        {loading ?
                            <>{children}</> :
                            <motion.div className="loading_screen_container"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                exit={{ opacity: 0 }}>
                                <VscLoading size={100} color="#4BB18F" className="loading_screen" />
                            </motion.div>
                        }
                    </div>
                </div>

            </motion.div>

        </>
    )
}

export default ContentHolder
