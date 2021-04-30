import React, { useEffect, useLayoutEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Route } from 'react-router-dom'


import BottomContentHolder from '../../Components/BottomContentHolder/BottomContentHolder'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import './gallery.scss'
import HeaderContent from '../../Components/HeaderContent/HeaderContent'
import ImageCard from '../../Components/ImageCard/ImageCard'
import FullImage from '../../Components/FullImage/FullImage'
import AppCarousel from '../../Components/AppCarousel/AppCarousel';

export default function Gallery() {

    const galleryVariant = {
        initial: {},
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5
            },
            exit: { opacity: 0 }
        }
    }

    const MainGallery = () => {
        return (
            <motion.div
                variants={galleryVariant}
                initial='initial'
                animate='animate'
                className="gallery_container"
            >
                <HeaderContent subtitle="Enjoy Our Gallery" y={-80} />
                <BottomContentHolder y={-200} >
                    <h2 className="gallery_content_title">Image from the field</h2>
                    <AppCarousel>
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </AppCarousel>

                </BottomContentHolder>
            </motion.div >
        )
    }
    return (
        <>
            <Route exact path='/gallery/preview' component={FullImage} />
            <Route exact path='/gallery' component={MainGallery} />
        </>
    )
}
