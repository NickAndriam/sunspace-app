import React from 'react'
import { Route } from 'react-router'
import ContentHolder from './components/contentHolder/contentHolder'
import Home from './pages/home'
import News from './pages/news'
import Gallery from './pages/gallery'
import About from './pages/about'


const AppAdmin = () => {
    return (
        <>

            {/* <ContentHolder > */}
            <Route exact path='/admin/home' component={Home} />
            <Route exact path='/admin/about' component={About} />
            <Route exact path='/admin/gallery' component={Gallery} />
            <Route path='/admin/news' component={News} />
            {/* </ContentHolder> */}
        </>
    )
}

export default AppAdmin
