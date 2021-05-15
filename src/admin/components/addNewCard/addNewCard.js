import React, { useState, useCallback } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { useDropzone } from 'react-dropzone'


import './addNewCard.scss'

const AddNewCard = ({ onClick, onOpen, children, width, height, justABtn = false }) => {

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
            <div {...getRootProps()} className="addNewCard_container" onClick={onClick} style={{ width, height }}>
                <FiPlus size={60} className="plus_icon" />
                <input {...getInputProps()} accept="video/*,image/*" id="add-image-gallery" name="images" />
                <p style={{ color: '#C6C5C5', fontSize: 14 }}>Add More</p>
            </div>
            <>
                {/* {children} */}
            </>
        </>
    )
}

export default AddNewCard
