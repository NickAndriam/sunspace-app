import React, { useEffect, useState } from 'react'
import axios, { API_URL } from '../../http-common'

import './styles.scss'
import HomeBG from '../components/NewDataForm/config/homeForms/homeBg'
import HomeMotto from '../components/NewDataForm/config/homeForms/homeMotto'
import HomePartners from '../components/NewDataForm/config/homeForms/homePartners'


const Home = () => {

    return (
        <div>
            <HomeBG />
            <HomeMotto />
            <br />
            <HomePartners />

        </div >
    )
}

export default Home

