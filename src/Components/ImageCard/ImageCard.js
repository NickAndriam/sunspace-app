import React, { useState } from 'react'

import './imageCard.scss'
import { RiCloseCircleFill } from 'react-icons/ri'
import { Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import coffee from '../../Assets/images/coffee.png'
import useLongPress from '../hooks/useLongPress'
import { motion } from 'framer-motion'


const ImageCard = ({ id, disabled = false, display = "false", height = 340, width = 250, src, thumbnail, original, onDelete }) => {
    const [isHovered, setHover] = useState(false)

    const onLongPress = () => {
        setHover(true)
    };

    const onClick = () => {
    }


    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
    return (
        <>
            {display &&

                <motion.div
                    onHoverStart={() => setHover(true)}
                    onHoverEnd={() => setHover(false)}
                    onMouseOver={() => setHover(true)}
                // onMouseOut={() => setHover(false)}
                >

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

                                </motion.div>
                            ) : (
                                <div style={{ position: 'relative' }} >
                                    <motion.div className="imageCard_container"
                                        // {...longPressEvent(onLongPress, open, defaultOptions)}
                                        onClick={open}
                                        ref={ref}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { duration: 0.5, mass: 0.6, staggerChildren: 0.2 } }}
                                    >
                                        <div style={{ backgroundImage: `url(${src || <h2>test</h2>})` }} className="imgCard" />

                                    </motion.div>
                                    {isHovered &&
                                        <motion.div id={id}
                                            className="imageCard_close icon"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            onClick={onDelete}>
                                            <RiCloseCircleFill size={22} className="imageCard_icon" />
                                        </motion.div>
                                    }
                                </div>
                            )

                        )}
                    </Item>
                    {/* {isHovered &&
                       
                    } */}
                </motion.div>
            }
        </>
    )
}

{/* <div className="image_ribbon">
<p style={{ fontSize: 12 }}>{desc || "Hello from the field"}</p>
</div> */}
export default ImageCard

