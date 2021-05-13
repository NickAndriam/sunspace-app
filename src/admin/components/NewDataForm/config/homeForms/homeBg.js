import React, { useEffect, useState } from 'react'
import axios, { API_URL } from '../../../../../http-common'
import Heading from './../../../heading/heading'
import AppCard from '../../../appCard/appCard'
import bg from '../../../../../Assets/bg/large.jpg'
import { motion } from 'framer-motion'
import AppButton from '../../../../components/appButton/appButton'



const HomeBG = () => {

    //---------------------------------Functions ---------------------------
    //ADD


    const HomeSection = ({ title, onButtonClick, btnTitle, textWidth }) => {
        return (
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row', width: '92%' }}>
                <span style={{ width: '70%' }}>
                    <Heading title={title} lineWidth="100%" textWidth={textWidth} />
                </span>
                <span style={{ width: '20%' }}>
                    <AppButton bold title={btnTitle || "Edit"} padding="2px 30px 2px 30px" borderRadius={18} onClick={onButtonClick} />
                </span>
            </div>
        )
    }
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <AppCard customize title="Title" cardWidth="90%" padding={15} margin={20}>
                    <motion.div initial={{ width: '0%', opacity: 0 }} animate={{ width: '98%', opacity: 1, transition: { delay: 0.5, duration: 0.3, mass: 0.4 } }} className="home_bg" style={{ backgroundImage: `url(${bg})` }} />
                </AppCard>
            </div>
            <HomeSection title="Edit Background Image" onButtonClick={() => alert('Update Bg')} textWidth='60%' />
            <br />

        </div >
    )
}

export default HomeBG

