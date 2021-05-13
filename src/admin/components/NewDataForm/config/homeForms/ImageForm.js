import React, { useState, useEffect } from 'react'

import PopUp from '../../../popUp/popup'
import { FiPlus } from 'react-icons/fi'
import axios, { API_URL } from '../../../../../http-common'
import { useDispatch, useSelector } from 'react-redux'
import AppButton from '../../../appButton/appButton'
// import { uploadActions } from '../uploadActions'


export const ImageForm = ({ children, handleNewImage, uploadTo, onSave }) => {
    const [isVisible, setVisibility] = useState(false)
    const [image, setImage] = useState('')
    const [preview, setPreview] = useState(false);
    const [imageName, setImageName] = useState('')

    const dispatch = useDispatch()
    const handleImageUpload = (e) => {
        setImage(e.target.files[0])
        setPreview(true)
    }
    const clearImage = () => {
        setPreview(false)
        setImage('')
    }
    const setName = (e) => {
        // set
    }

    const uploadActions = async (image, uploadTo = '') => {
        const fd = new FormData()
        fd.append('image', image);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        try {
            const res = await axios.post(uploadTo, fd, config)
            // console.log('here is what I am saying', res.data)
            setImageName(res.data.name)
            dispatch({ type: 'new_name', payload: res.data.name })

        } catch (err) {
            console.log(err)
        }
    }
    const handleSumbit = () => {
        uploadActions(image, uploadTo)
        setPreview(false)
        setImage(false)
        handleNewImage()
        console.log('here we are')
        onSave()
    }
    return (
        <>
            <div className="addNewCard_container" onClick={() => setVisibility(true)}>
                <FiPlus size={60} className="plus_icon" />
                <p style={{ color: '#C6C5C5', fontSize: 14 }}>Add more</p>
            </div>
            <PopUp show={isVisible} onCancel={() => setVisibility(false)} onSave={handleSumbit}>
                <h4>Add Image</h4>
                <input type="text" className="addnew_input" placeholder={`Enter new name`} onChange={(e) => setName(e.target.value)} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="add-image" className="addNewCard_container" style={{ margin: 0, marginBottom: 30 }}>
                        <FiPlus size={60} className="plus_icon" />
                        <p style={{ color: '#C6C5C5', fontSize: 14 }}>Add Image</p>
                        <input type='file' accept="png jpg jpeg" onChange={handleImageUpload} id="add-image" style={{ display: 'none' }} name="image" />
                    </label>
                    {preview ?
                        <>
                            <img src={URL.createObjectURL(image)} alt="image" width={140} height={120} />
                            {/* {children} */}
                            <AppButton title="Clear Image" onClick={clearImage} />
                        </>
                        : ''}
                </div>
            </PopUp>
        </>
    )
}