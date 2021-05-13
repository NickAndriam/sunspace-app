import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import './appCarousel.scss'
function AppCarousel({ children, autoPlay, arrowColor = "rgba(0, 0, 0, 0.406)", arrowSize = 50 }) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
        { width: 1600, itemsToShow: 4 }
    ];

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <RiArrowLeftSLine size={arrowSize} color={arrowColor} /> : <RiArrowRightSLine size={arrowSize} color={arrowColor} />
        return (
            <button className="appCarousel_arrow" onClick={onClick} disabled={isEdge}>
                { pointer}
            </button>

        )
    }
    return (
        <Carousel enableAutoPlay={autoPlay || false} itemsToShow={3} breakPoints={breakPoints} pagination={false} renderArrow={({ type, onClick, isEdge }) => myArrow({ type, onClick, isEdge })} className="appCarousel">
            {children}
        </Carousel>
    )
}

export default AppCarousel
