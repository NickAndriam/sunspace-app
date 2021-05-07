import React, { useEffect, useLayoutEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, Route, useLocation } from 'react-router-dom'

import BottomContentHolder from '../../Components/BottomContentHolder/BottomContentHolder'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import './gallery.scss'
import HeaderContent from '../../Components/HeaderContent/HeaderContent'
import ImageCard from '../../Components/ImageCard/ImageCard'
import FullImage from '../../Components/FullImage/FullImage'
import AppCarousel from '../../Components/AppCarousel/AppCarousel';

export default function Gallery() {
    const location = useLocation()
    const url = location.pathname.split('/')


    const galleryVariant = {
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5
            },
            exit: { opacity: 0 }
        }
    }


    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        scrollToTop()
    }, [1])


    const MainGallery = () => {
        return (
            <motion.div
                // variants={galleryVariant}
                animate='animate'
                className="gallery_container"
            >
                <HeaderContent subtitle="Enjoy Our Gallery" y={-60} />
                <BottomContentHolder y={-200} >
                    <div className="gallery_content_container">
                        <div className="gallery_content_heading">
                            <h2 className="gallery_content_title" style={{ color: '#3885B1' }}>Image from the field</h2>
                            <Link to="/gallery/field" style={{ textDecoration: 'none' }}>
                                <p className="gallery_content_seeAll" color="blue">See all</p>
                            </Link>
                        </div>
                        <AppCarousel arrowColor="#2179a5ba">
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                        </AppCarousel>

                        <div className="gallery_content_heading">
                            <h2 className="gallery_content_title" style={{ color: '#3885B1' }}>Image from the greenhouse</h2>
                            <Link to="/gallery/field" style={{ textDecoration: 'none' }}>
                                <p className="gallery_content_seeAll" color="blue">See all</p>
                            </Link>
                        </div>
                        <AppCarousel arrowColor="#2179a5ba">
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                        </AppCarousel>

                    </div>
                </BottomContentHolder>
            </motion.div >
        )
    }

    const SeeAll = () => {
        return (
            <>
                <HeaderContent subtitle="Pictures from the field" y={-80} />
                <BottomContentHolder y={-120}>
                    <p onClick={() => window.history.back()} className="backButton" style={{ marginTop: -100 }}>{"< Go Back"}</p>
                    <div className="seeAll_container">
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        {/* <button onClick={() => scrollToTop()}>test</button> */}
                    </div>
                    {/* <ImageCard /> */}
                </BottomContentHolder>
            </>
        )
    }
    return (
        <>
            <Route exact path='/gallery/:category' component={SeeAll} />
            <Route exact path='/gallery/preview/:id' component={FullImage} />
            <Route exact path='/gallery' component={MainGallery} />
        </>
    )
}
