import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { motion } from 'framer-motion'

import NavAdmin from '../navAdmin/navAdmin'
import './contentHolder.scss'

const ContentHolder = ({ children }) => {
    const location = useLocation()
    const url = location.pathname.split('/')
    const pathname = url[2]

    let [isVisible, setVisibility] = useState(false)

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
                        {children}
                    </div>
                </div>

            </motion.div>

        </>
    )
}

export default ContentHolder
