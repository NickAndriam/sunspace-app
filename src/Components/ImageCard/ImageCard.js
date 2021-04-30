import React, { useState } from 'react'
import { motion as m, useSpring } from 'framer-motion'

import './imageCard.scss'
import image from '../../Assets/bg/large.jpg'
import { Link } from 'react-router-dom'

function ImageCard({ height = 340, width = 250, url }) {
    const imageCardVariant = {
        animate: {
            width,
            height,
            borderRadius: 25,
            transition: { duration: 0.2 }
        }
    }
    return (
        <>
            <Link to='gallery/image'>
                <m.img
                    src={url || image}
                    alt="image"
                    className="imgCard"
                />
            </Link>
        </>
    )
}

export default ImageCard

