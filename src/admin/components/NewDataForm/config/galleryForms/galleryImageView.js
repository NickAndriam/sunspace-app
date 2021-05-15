
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { CustomGallery, DefaultLayout } from 'react-photoswipe-gallery'
import axios, { API_URL } from '../../../../../http-common'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import ImageCard from '../../../../../Components/ImageCard/ImageCard'


const GalleryImageView = ({ display, data, local = false, url, disableClick = false }) => {

    const [deletionHide, setdeletionHide] = useState(false)

    const { currentCategory, path } = useSelector(state => state.getCategory)
    const { refresh } = useSelector(state => state.getRefresh)
    const layoutRef = useRef()
    let imageURL = `${API_URL}${path}`
    const dispatch = useDispatch()

    const onDeletingImage = async (image) => {
        // console.log({ image, currentCategory })
        try {
            setdeletionHide(true)
            const res = await axios.delete(`/media/deleteSingleImage/${currentCategory}/${image}`)
            dispatch({ type: 'success', msg: 'Image Deleted' })
            setTimeout(() => { dispatch({ type: 'refresh' }) }, 50)
        } catch (err) {
            dispatch({ type: 'error', msg: 'Could Not Delete' })
        }
    }

    // console.log(refresh)
    return (
        <>
            <CustomGallery ui={PhotoswipeUIDefault} layoutRef={layoutRef} >
                <motion.div style={{ display: 'flex', width: '100%', overflowX: 'hidden', flexWrap: 'wrap' }}
                >
                    {
                        display && data.length >= 1 ?
                            data.map((image, index) => (
                                local ? (
                                    <ImageCard
                                        disabled={disableClick}
                                        display={display}
                                        key={index}
                                        src={URL.createObjectURL(image)}
                                        thumbnail={URL.createObjectURL(image)}
                                        original={URL.createObjectURL(image)}
                                    />) : (
                                    <ImageCard
                                        display={display}
                                        key={index}
                                        id={image}
                                        src={`${imageURL}/${image || 'img.jpg'}`}
                                        thumbnail={`${imageURL}/${image || 'img.jpg'}`}
                                        original={`${imageURL}${image || 'img.jpg'}`}
                                        onDelete={(e) => onDeletingImage(e.currentTarget.id)}

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
