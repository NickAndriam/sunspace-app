import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './appCarousel.scss'
function AppCarousel({ children }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <Carousel
            draggable={true}
            responsive={responsive}
            infinite={true}
            // centerMode={true}
            containerClass="carousel-container"
            itemClass="item_class_test"
            sliderClass="slider_class_carousel"
            ssr={true}>
            {children}
        </Carousel>
    )
}

export default AppCarousel
