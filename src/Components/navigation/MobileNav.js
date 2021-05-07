import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { IoIosArrowForward } from 'react-icons/io'

import './mobileNav.scss'
import logo from '../../Assets/logo/logo.jpg'

export default function MobileNav() {
    const location = useLocation()
    const pathname = location.pathname
    const [openButton, setOpenButton] = useState(true)
    const [openNav, setOpenNav] = useState(false)
    const [bgIndex, setBgIndex] = useState(0)
    const { home, about, gallery, news } = useSelector(state => state.navigation)
    const navState = [
        { name: "About Us", to: '/about', id: 1, active: about },
        { name: "Gallery", to: '/gallery', id: 2, active: gallery },
        { name: "News", to: '/news', id: 3, active: news },
    ]

    const bgColor = ['rgba(0,0,0,0)', "#4bb18f", "#217aa5", "#979b03"]

    const navIconVariants = {
        initial: {
            scale: 1
        },
        animate: {
            scale: openButton ? 1 : 0
        },
        exit: {
            scale: 0
        }
    }
    const navBarVariants = {
        initial: {
            scale: 0,
            width: 60,
            height: 60,
        },
        animate: {
            scale: 1,
            width: ['10%', '88%'],
            height: 60,
            transition: {
                duration: 0.3,
                type: 'spring',
                mass: 0.25,
                stiffness: 200,
                delayChildren: 1
            }

        },
        exit: {
            scale: 1,
            width: 60,
            height: 60,
        }
    }

    const onClickAnimation = () => {
        setOpenButton(!openButton)
        setOpenNav(!openNav)

    }

    useEffect(() => {
        switch (pathname) {
            case '/':
                return (
                    setBgIndex(0)
                );
            case '/about':
                return (
                    setBgIndex(1)
                );
            case '/gallery':
                return (
                    setBgIndex(2)
                );
            case '/news':
                return (
                    setBgIndex(3)
                );
            default:
                return (
                    setBgIndex(0)
                );
        }
    }, [pathname])



    return (
        <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '0%', backgroundColor: bgColor[bgIndex] }}
            className="mobileNav_container"
        >

            <Link to="/">
                <motion.div
                    initial={{ y: '-100%' }}
                    animate={{ y: openNav ? '-100%' : '0%' }}
                    transition={{ duration: 0.25, bounceStiffness: 200 }}
                    className="logo_container">
                    <img src={logo} alt="logo" className="logo_image" />
                </motion.div>
            </Link>
            <motion.svg
                variants={navIconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                xmlns="http://www.w3.org/2000/svg"
                width="74.31" height="56.962"
                viewBox="0 0 74.31 56.962"
                className="mobileNav_SVG_container"
                onClick={() => onClickAnimation()}>
                <g id="burger" transform="translate(1.5 1.5)">
                    <path id="Path_2" d="M4.5,18H75.81" transform="translate(-4.5 8.981)" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path id="Path_3" d="M4.5,9H75.81" transform="translate(-4.5 -9)" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path id="Path_4" d="M4.5,27H75.81" transform="translate(-4.5 26.962)" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
            </motion.svg>
            {
                openNav &&
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                    </motion.div>
                    <motion.div
                        variants={navBarVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        className="mobile_navBar"
                    >
                        <div className="mobileNav_closeIcon_container" onClick={() => (setOpenNav(false), setOpenButton(true))}>
                            <IoIosArrowForward size={20} color={pathname === '/' ? 'grey' : bgColor[bgIndex]} className="mobileNav_closeIcon" />
                        </div>
                        {
                            navState.map(e => (
                                <Link to={`${e.to}`} className="mobile_navBar_li" key={e.id} style={{ backgroundColor: e.active ? bgColor[bgIndex] : 'white' }}>
                                    <motion.p
                                        animate={{ opacity: openNav ? [0, 1] : 0, transition: { duration: 1 } }}
                                        style={{ color: e.active ? 'white' : 'black' }}
                                        className="mobile_navBar_p"
                                    >{e.name}</motion.p>
                                </Link>
                            ))
                        }
                    </motion.div>
                </>
            }
        </motion.div>
    )
}
