import React, { useState } from 'react'
import { motion as m, useSpring } from 'framer-motion'

import './imageCard.scss'
import image from '../../Assets/bg/large.jpg'
import { Link } from 'react-router-dom'

function ImageCard({ height = 340, width = 250, url, desc }) {
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
            <Link to='/gallery/preview/1' style={{ textDecoration: 'none' }}>
                <div className="imageCard_container">
                    {/* <m.img
                        src={url || image}
                        alt="image"
                        className="imgCard"
                    /> */}
                    <div style={{ backgroundImage: `url(${url || image}) ` }} className="imgCard">
                        <div className="image_ribbon">
                            <p style={{ fontSize: 12 }}>{desc || "Hello from the field"}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ImageCard

