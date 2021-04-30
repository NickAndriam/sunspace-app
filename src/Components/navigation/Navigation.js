import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { withBreakpoints } from 'react-breakpoints'

import './navigation.scss'

import logo from '../../Assets/logo/logo.jpg'
import MobileNav from './MobileNav';


function Navigation(props, { color = "#4BB18F" }) {
    const dispatch = useDispatch()
    const location = useLocation()
    const pathname = location.pathname
    const [isVisible, setVisible] = useState(true)
    const { home, about, gallery, news } = useSelector(state => state.navigation)
    let navListState = [home, about, gallery, news]

    const [underlineIndex, setUnderlineIndex] = useState(0)
    const [bg, setBg] = useState('transparent')
    const [navOpen, setNavOpen] = useState(false)

    const path = "M0,0H1921.006V128.971s-481.619,29.285-961.87,29.285S0,128.971,0,128.971Z"

    const colors = [
        'transparent', '#4BB18F', '#217AA5', '#979B03'
    ]
    const positionVal = [
        { p: 0, color: 'transparent' },
        { p: 390, color: 'white' },
        { p: 780, color: 'white' },
        { p: 1145, color: 'white' },
    ]

    const [index, setIndex] = useState((0))
    const navList = [
        { name: 'Home', id: 'home', to: '/' },
        { name: 'About Us', id: 'about', to: '/about' },
        { name: 'Gallery', id: 'gallery', to: '/gallery' },
        { name: 'News', id: 'news', to: '/news' }
    ]
    const { breakpoints, currentBreakpoint } = props

    const cb = breakpoints[currentBreakpoint]
    const mobile = breakpoints.mobileLandscape

    useEffect(() => {
        switch (pathname) {
            case '/':
                return (
                    dispatch({ type: 'home' }),
                    setUnderlineIndex(0),
                    setIndex(0),
                    setNavOpen(false)
                )
            case '/about':
                return (
                    dispatch({ type: 'about' }),
                    setUnderlineIndex(1),
                    setIndex(1),
                    setBg(colors[0]),
                    setNavOpen(true)
                )
            case '/gallery':
                return (
                    dispatch({ type: 'gallery' }),
                    setUnderlineIndex(2),
                    setIndex(2),
                    setBg(colors[1]),
                    setNavOpen(true)

                )
            case '/news':
                return (
                    dispatch({ type: 'news' }),
                    setUnderlineIndex(3),
                    setIndex(3),
                    setBg(colors[2]),
                    setNavOpen(true)
                )
        }

    }, [pathname])

    const navSVGVariants = {
        initial: { y: '-100%' },
        animate: {
            y: isVisible ? 0 : '-100%',
            fill: 'none',
            transition: { duration: 1, type: 'spring' }
        },
    }

    const underlineVariants = {
        initial: { x: '0%' },
        animate: {
            x: `${positionVal[index].p}%`,
            backgroundColor: `${positionVal[index].color}`,
            transition: {
                duration: 0.18, type: 'spring', stiffness: 120, bounce: 0.1, mass: 0.5
            }
        }
    }

    return (
        <>
            {
                cb > mobile ?
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' }}>

                        <motion.svg
                            variants={navSVGVariants}
                            initial='initial'
                            animate='animate'
                            viewBox="0 0 1921.006 175.53"
                            className="navigation_main_container">

                            <motion.path
                                animate={navOpen ? { y: '0%', fill: `${colors[index]}`, transition: { duration: 0.4 } } : { y: '-100%', transition: { duration: 0.1 } }}
                                d={path}
                            />
                        </motion.svg>

                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 0.25, bounceStiffness: 200 }}
                            className="logo_container">
                            <img src={logo} alt="logo" className="logo_image" />
                        </motion.div>
                        <motion.div
                            className="nav_bar"
                            style={{ position: 'fixed', top: 0, zIndex: 400 }}>
                            {
                                navList.map(e => (
                                    <Link to={e.to} className="nav_text" key={e.id}>
                                        <motion.p
                                            initial={{ opacity: 0, scale: 1 }}
                                            animate={navListState[index] ? { opacity: 1, scale: 1.15 } : { opacity: 1, scale: 1 }}
                                            transition={{ duration: 2, type: 'spring', stiffness: 100 }}
                                            exit={{ opacity: 0 }}
                                            id={e.id}
                                            className={pathname === e.to ? "nav_text_bold" : "nav_text_p"}
                                        >{e.name}</motion.p>
                                    </Link>
                                ))
                            }

                        </motion.div>
                        <motion.div className="nav_underline_container">
                            <motion.div
                                variants={underlineVariants}
                                initial='initial'
                                animate='animate'
                                className="nav_underline"
                            />
                        </motion.div>
                        {/* <motion.svg
                            viewBox="0 0 1920 1080"
                            className="path_anime"
                        >
                        </motion.svg> */}
                    </div> :
                    <MobileNav />
            }
        </>
    )
}
export default withBreakpoints(Navigation)