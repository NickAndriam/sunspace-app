import React from 'react'
import { Route } from 'react-router-dom'
import About from '../Pages/about/About'

const AboutRoutes = (
    <Route
        exact
        path="/about"
        component={About}
    />
)


export default AboutRoutes
