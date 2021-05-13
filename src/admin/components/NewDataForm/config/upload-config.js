import React, { useState, useEffect } from 'react'

import PopUp from '../../popUp/popup'
import { FiPlus } from 'react-icons/fi'
import axios, { API_URL } from '../../../../http-common'
import { uploadActions } from './uploadActions'
import { ImageForm } from './homeForms'


export const ImageUpload = ({ uploadTo, onSave, children }) => {
    return (
        <>
            <>{children}</>
        </>
    )
}


export const ContentUpload = () => {
    let [isVisible, setVisibility] = useState(false)
    return (
        <>
            <PopUp show={isVisible} onCancel={() => setVisibility(false)}>
                <h4>New title:</h4>
                <input type="text" className="addnew_input" placeholder={`Enter new title here...`} />
                <h4>New Content:</h4>
                <textarea type="text" className="addnew_input" placeholder={`Enter new title here...`} />
            </PopUp>
            <div className="addNewCard_container" onClick={() => setVisibility(true)}>
                <FiPlus size={60} className="plus_icon" />
                <p style={{ color: '#C6C5C5', fontSize: 14 }}>Add Content</p>
            </div>
        </>
    )
}


export const NewsUpload = () => {
    let [isVisible, setVisibility] = useState(false)
    return (
        <>
            <PopUp show={isVisible} onCancel={() => setVisibility(false)}>
                <h4>New title:</h4>
                <input type="text" className="addnew_input" placeholder={`Enter new title here...`} />
                <h4>Description:</h4>
                <textarea type="text" className="addnew_input" placeholder={`Enter new title here...`} />
                <h4>More Content:</h4>
                <textarea type="text" className="addnew_input" placeholder={`Enter new title here...`} />
                <h4>Add Image</h4>
                <div style={{ display: 'flex' }}>
                    <label for="add-image" className="addNewCard_container" style={{ margin: 0, marginBottom: 30 }}>
                        <FiPlus size={60} className="plus_icon" />
                        <p style={{ color: '#C6C5C5', fontSize: 14 }}>Add Image</p>
                        <input type='file' placeholder="Add more" id="add-image" style={{ display: 'none' }} />
                    </label>
                    <div className="addNewCard_image"></div>
                </div>
            </PopUp>
            <div className="addNewCard_container" onClick={() => setVisibility(true)}>
                <FiPlus size={60} className="plus_icon" />
                <p style={{ color: '#C6C5C5', fontSize: 14 }}>Add News</p>
            </div>
        </>
    )
}