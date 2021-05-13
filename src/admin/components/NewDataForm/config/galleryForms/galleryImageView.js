
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { CustomGallery, DefaultLayout } from 'react-photoswipe-gallery'
import { API_URL } from '../../../../../http-common'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import ImageCard from '../../../../../Components/ImageCard/ImageCard'


const GalleryImageView = ({ display, data, local = false, url, disableClick = "false" }) => {


    const { path } = useSelector(state => state.getCategory)
    const layoutRef = useRef()
    let imageURL = `${API_URL}${path}`
    const dispatch = useDispatch()


    return (
        <>
            <CustomGallery ui={PhotoswipeUIDefault} layoutRef={layoutRef} >
                <motion.div style={{ display: 'flex', width: '100%', overflowX: 'hidden', flexWrap: 'wrap' }}
                >
                    {
                        display && data.length >= 1 ?
                            data.map(image => (
                                local ? (
                                    <ImageCard
                                        disabled={disableClick}
                                        display={display}
                                        key={image}
                                        src={URL.createObjectURL(image)}
                                        thumbnail={URL.createObjectURL(image)}
                                        original={URL.createObjectURL(image)}
                                    />) : (
                                    <ImageCard
                                        display={display}
                                        key={image}
                                        src={`${imageURL}/${image || 'img.jpg'}`}
                                        thumbnail={`${imageURL}/${image || 'img.jpg'}`}
                                        original={`${imageURL}${image || 'img.jpg'}`}
                                    />
                                )
                            )) : ''
                    }
                </motion.div>
            </CustomGallery>
            <DefaultLayout
                shareButton={false}
                fullscreenButton={true}
                zoomButton={false}
                ref={layoutRef}

            />
        </>
    )
}

export default GalleryImageView
