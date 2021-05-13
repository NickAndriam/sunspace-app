import React, { useState, useEffect } from 'react'

import PopUp from '../../../popUp/popup'
import { FiPlus } from 'react-icons/fi'
import { VscDebugRestart } from 'react-icons/vsc'
import axios, { API_URL } from '../../../../../http-common'
import { useDispatch, useSelector } from 'react-redux'
import AppButton from '../../../appButton/appButton'
import { motion } from 'framer-motion'
// import { uploadActions } from '../uploadActions'


export const PartnerImageForm = () => {

    const [imageURL, setImageURL] = useState('')
    const [image, setImage] = useState('')
    const [preview, setPreview] = useState(false);
    const { file } = useSelector(state => state.getFile)
    const dispatch = useDispatch()

    const handleImageUpload = async (e) => {
        const file = await e.target.files[0]
        if (e.target.files.length >= 1) {
            dispatch({ type: 'setFile', file: file })
            setTimeout(() => { setPreview(true) }, 300)
        }
    }
    const clearImage = () => {
        setImage('')
        setPreview(false)

    }
    return (
        <>
            <h4>Add Image</h4>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label htmlFor="add-image" className="addNewCard_container" style={{ margin: 0, marginBottom: 30 }}>
                    <FiPlus size={60} className="plus_icon" />
                    <p style={{ color: '#C6C5C5', fontSize: 14 }}>Add Image</p>
                    <input type='file' accept="video/*,image/*" onChange={handleImageUpload} id="add-image" style={{ display: 'none' }} name="image" />
                </label>
                {preview ?
                    <>
                        <div>
                            <motion.img alt="image"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1, transition: { mass: 0.4 } }}
                                src={URL.createObjectURL(file) || '#'}
                                width={140} height="100%"
                                id='preview_output'
                                style={{ marginLeft: 30, marginRight: 40 }} />
                        </div>
                        <VscDebugRestart color="white" onClick={clearImage} className="restore_icon" />
                        {/* <AppButton onClick={clearImage} title="clear" bg="#FF676C" /> */}
                    </>
                    : ''}
            </div>
            <p style={{ color: "rgba(0, 0, 0, 0.446)", fontSize: 10 }}>Size: 140px X 80px | Limit: 30mb</p>
        </>
    )
}