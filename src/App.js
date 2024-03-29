import React, { useEffect, useState } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import axios from 'axios'

import './App.scss';

import Navigation from './Components/navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import BottomSVG from './Components/BottomSVG/BottomSVG';

import Home from './Pages/home/Home'
import Gallery from './Pages/gallery/Gallery'
import About from './Pages/about/About'
import News from './Pages/news/News'
import SignIn from './admin/signIn'
import Notification from './admin/components/notification/notification'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Notification />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={true}>
              <Switch location={location} key={location.pathname} >
                <Route path='/about' component={About} />
                <Route path='/news' component={News} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/admin' component={SignIn} />
                <Route exact path='/' component={Home} />
                {/* <Route path="*">
                  <p>Not found</p>
                </Route> */}
              </Switch>
            </AnimatePresence>
          )}
        />
        <Header />
        <BottomSVG />
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default withBreakpoints(App);