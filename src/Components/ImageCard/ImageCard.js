import React, { useState } from 'react'

import './imageCard.scss'

import { Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import coffee from '../../Assets/images/coffee.png'
import { motion } from 'framer-motion'


const ImageCard = ({ disabled = false, display = "false", height = 340, width = 250, src, thumbnail, original }) => {

    return (
        <>
            {display &&
                <motion.div>

                    <Item
                        original={src || coffee}
                        thumbnail={thumbnail || coffee}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            disabled ? (
                                <motion.div className="imageCard_container"
                                    ref={ref}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.5, mass: 0.6, staggerChildren: 0.2 } }}
                                >
                                    <div style={{ backgroundImage: `url(${src || <h2>test</h2>})` }} className="imgCard" />

                                </motion.div>) : (
                                <motion.div className="imageCard_container"
                                    ref={ref} onClick={open}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.5, mass: 0.6, staggerChildren: 0.2 } }}
                                >
                                    <div style={{ backgroundImage: `url(${src || <h2>test</h2>})` }} className="imgCard" />

                                </motion.div>)


                        )}
                    </Item>
                </motion.div>
            }
        </>
    )
}

{/* <div className="image_ribbon">
<p style={{ fontSize: 12 }}>{desc || "Hello from the field"}</p>
</div> */}
export default ImageCard

