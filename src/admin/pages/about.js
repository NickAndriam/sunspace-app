import React, { useEffect, useState } from 'react'
import Heading from '../components/heading/heading'
import AppCard from '../components/appCard/appCard'
import AddNewCard from '../components/addNewCard/addNewCard'
import AboutBody from '../components/NewDataForm/config/aboutForms/aboutBody.js'
import { useDispatch } from 'react-redux'
import axios from '../../http-common'

const About = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <Heading />
            <div style={{ display: 'flex' }}>
                <AppCard
                    type='title'
                    title="Title"
                    from='/about/aboutHeader'
                    tableName='about_header'
                    send='/about/updateAboutSingleCard' >
                    <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new...`} />
                </AppCard>
                <AppCard
                    type='subtitle'
                    title="Subtitle"
                    from='/about/aboutHeader'
                    tableName="about_header"
                    send='/about/updateAboutSingleCard' >
                    <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new...`} />
                </AppCard>
            </div>
            <AboutBody />
            <Heading title="Contact Us / Location" lineWidth="70%" />
            <div style={{ display: 'flex' }}>
                <AppCard
                    type='details'
                    title="Contact Us"
                    from='/about/aboutInfo'
                    tableName="about_info"
                    send='/about/updateAboutSingleCard' >
                    <textarea required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new...`} />
                </AppCard>
                <AppCard
                    type='subtitle'
                    title="Location"
                    from='/about/aboutInfo'
                    tableName="about_info"
                    send='/about/updateAboutSingleCard'
                    buttonWidth={200}
                    cardWidth={220}
                    btnTitle="Update Location">
                    <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new...`} />
                </AppCard>
            </div>
        </div>
    )
}

export default About

