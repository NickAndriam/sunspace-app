import React from 'react'
import Heading from '../components/heading/heading'
import AppCard from '../components/appCard/appCard'
import AddNewCard from '../components/addNewCard/addNewCard'

const About = () => {
    return (
        <div>
            <Heading />
            <div style={{ display: 'flex' }}>
                <AppCard title="Title" />
                <AppCard title="Subtitle" />
            </div>
            <Heading title="Body" />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <AppCard title="Who We Are" />
                <AppCard title="Our Vision" />
                <AppCard title="Our Mission" />
                <AddNewCard />
            </div>
            <Heading title="Contact Us / Location" lineWidth="70%" />
            <div style={{ display: 'flex' }}>
                <AppCard title="Contact Us" />
                <AppCard title="Location" buttonWidth={200} cardWidth={220} btnTitle="Update Location" />
            </div>
        </div>
    )
}

export default About

