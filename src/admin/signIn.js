import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import './signIn.scss'

import bg from '../Assets/bg/large.jpg'
import logo from '../Assets/logo/logo.jpg'
import AppInput from './components/appInput/appInput'
import AppButton from './components/appButton/appButton'
import { Link, Route, Router } from 'react-router-dom'
import AppAdmin from './app'
import Home from './pages/home'
import ContentHolder from './components/contentHolder/contentHolder'

const SignIn = () => {

    const SignInMain = () => {
        return (
            <>
                <motion.svg viewBox="0 0 1920 1080" height="1024" className="svg_admin"
                    initial={{ x: '100%' }}
                    animate={{ x: 0, transition: { duration: 1, mass: 0.1 } }}
                    exit={{ x: '100%', transition: { duration: 1, mass: 0.1 } }}>
                    <path d="M1084.05,0h836V1080H1084.05s176.48-303.82,176.48-573.82S1084.05,0,1084.05,0Z" fill="white" />
                </motion.svg>
                <motion.div className="signin_motto_container"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0, transition: { duration: 1.2, mass: 1, delay: 0.2, staggerDirection: 0.2 } }}
                    exit={{ x: '-100%', transition: { duration: 1, mass: 0.1 } }}>
                    <p className="signin_motto">Vestibulum ac diam sit
                    Amet quam
                    Cehicula
                Elementum</p>
                </motion.div>
                <motion.div className="signin_content"
                    initial={{ x: '100%' }}
                    animate={{ x: 0, transition: { duration: 1, mass: 1, delay: 0.3, staggerChildren: 0.2 } }}
                    exit={{ x: '100%', transition: { duration: 1, mass: 0.1 } }}>
                    <img src={`${logo}`} className="signin_logo" />
                    <AppInput type="email" placeholder="Username" />
                    <AppInput type="password" placeholder="Password" />
                    <Link to='/admin/home' style={{ textDecoration: 'none' }}>
                        <AppButton title="Sign In" width={250} />
                    </Link>
                </motion.div>
            </>
        )
    }
    return (
        <>
            <div className="signIn_container" style={{ backgroundImage: `url(${bg})` }}>
                <div className="layer" />
                <AppAdmin />
                <Route exact path='/admin' component={SignInMain} />
            </div>
        </>
    )
}

export default SignIn
