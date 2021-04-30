import React, { useEffect, useState } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
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

function App() {
  const { home } = useSelector(state => state.navigation)
  return (
    <>
      <Router>
        <Navigation />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false}>
              <Switch location={location} key={location.pathname} >
                <Route path='/about' component={About} />
                <Route path='/news' component={News} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/' component={Home} />
                <Route path="*">
                  <p>Not found</p>
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
        <Header />
        <BottomSVG />
        <Footer />
      </Router>
    </>
  );
}

export default withBreakpoints(App);
