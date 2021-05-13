
import React, { useRef, useState, useCallback } from 'react'
import { CustomGallery, DefaultLayout } from 'react-photoswipe-gallery'
import { API_URL } from '../../../../../http-common'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { IoMdImages } from 'react-icons/io'
import { useDropzone } from 'react-dropzone'

import ImageCard from '../../../../../Components/ImageCard/ImageCard'


const GalleryImageView = ({ display }) => {

    const { data, path } = useSelector(state => state.getCategory)
    const layoutRef = useRef()
    let imageURL = `${API_URL}${path}`
    const dispatch = useDispatch()

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        const fulltype = acceptedFiles[0].type
        const typeSplit = fulltype.split('/')
        console.log(typeSplit[0])
        if (typeSplit[0] === "video" || typeSplit[0] === "image") {
            console.log('accepted')
        } else {
            dispatch({ type: 'error', msg: 'Images or Videos Only' })
            console.log('denied')
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <>
            <CustomGallery ui={PhotoswipeUIDefault} layoutRef={layoutRef} >
                <motion.div style={{ display: 'flex', width: '100%', overflowX: 'hidden', flexWrap: 'wrap' }}
                >
                    {
                        display && data.length >= 1 ?
                            data.map(image => (
                                <ImageCard
                                    display={display}
                                    key={image}
                                    src={`${imageURL}/${image || 'img.jpg'}`}
                                    thumbnail={`${imageURL}/${image || 'img.jpg'}`}
                                    original={`${imageURL}${image || 'img.jpg'}`}
                                />
                            )) : (
                                <motion.div className="gallery_add_images" {...getRootProps()}
                                    initial={{ border: 'none', borderRadius: 20 }}
                                    animate={{ border: isDragActive ? '#4BB18F 2px dashed' : 'none' }}>
                                    <input {...getInputProps()} accept="video/*,image/*" id="add-image-gallery" name="images" />
                                    <span>
                                        <IoMdImages color={isDragActive ? 'rgb(75, 177, 143)' : 'rgba(0, 0, 0, 0.228)'} size={140} htmlFor="add-image-gallery" />
                                    </span>
                                    {isDragActive ? <p style={{ color: 'rgba(0, 0, 0, 0.428)' }}>Drop Images Here</p> :
                                        <p style={{ color: 'rgba(0, 0, 0, 0.428)' }}>Drap and Drop New Images</p>}
                                </motion.div>

                            )
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
