import React, { useEffect, useRef, useCallback } from 'react'
import { useState } from 'react';
import axios from '../../http-common'
import Select from 'react-select'
import { motion } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import { IoMdImages } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux';
import GalleryImapeView from '../components/NewDataForm/config/galleryForms/galleryImageView';
import AddNewCategory from '../components/NewDataForm/config/galleryForms/addNewCategory';
import EditCategories from '../components/NewDataForm/config/galleryForms/editCategories';
import PopUp from '../components/popUp/popup';


const Gallery = () => {
    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState(1)
    const [display, setDisplay] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [popUpOpen, setPopUp] = useState(false)
    const [uploadFilesTo, setUploadFilesTo] = useState('')
    const { categoryList, currentCategory, to, data } = useSelector(state => state.getCategory)

    const { files } = useSelector(state => state.getFile)


    const getCategoryList = async () => {
        try {
            const res = await axios.get(`gallery/category`)
            console.log('Getting and setting category list: ')
            dispatch({ type: 'setCategoryList', categoryList: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    const getImagesOfCategory = async (category) => {
        try {
            const res = await axios.get(`gallery/category/${category}`,)
            console.log('Getting and setting category images:')
            dispatch({ type: 'setCategoryData', data: res.data })
            // console.log('Dispatch data complete!', data)
        } catch (err) {
            console.log(err)
        }
    }

    const onSelectionChange = async (value) => {
        setDisplay(false)
        console.log('Getting Current category', value.value)
        getImagesOfCategory(value.value)
        dispatch({ type: 'setCurrentCategory', currentCategory: value.value })
        dispatch({ type: 'setCategoryPath', path: value.path })
        // dispatch({ type: 'setPathToUpload', uploadFilesTo: `media/gallery/${value.value}` })
        setUploadFilesTo(value.value)
        console.log('Setting up current category')
        setRefresh(refresh + 1)
        setTimeout(() => setDisplay(true), 200)

    }

    const uploadMultipleImages = async () => {
        const fd = new FormData()
        // fd.append('images', files);
        for (const file of files) {
            fd.append('images', file)
        }
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        try {
            const res = await axios.post(`/media/multiple/${uploadFilesTo}`, fd, config)
            // console.log('here is what I am saying', res.data)
            dispatch({ type: 'success', msg: 'Upload Successful' })
            setPopUp(false)
            getCategoryList()
            getImagesOfCategory(currentCategory)
            setRefresh(refresh + 1)
        } catch (err) {
            console.log(err)
        }
    }
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        const fulltype = acceptedFiles[0].type
        const typeSplit = fulltype.split('/')
        console.log(typeSplit[0])
        if (typeSplit[0] === "video" || typeSplit[0] === "image") {
            dispatch({ type: "setMultipleFiles", files: acceptedFiles })
            setPopUp(true)
            console.log('accepted')
        } else {
            dispatch({ type: 'error', msg: 'Images or Videos Only' })
            console.log('denied')
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    useEffect(() => {
        getCategoryList()
        getImagesOfCategory(currentCategory)
        setTimeout(() => setDisplay(true), 400)
    }, [refresh])

    console.log(files, uploadFilesTo)
    return (
        <div>
            <p style={{ color: 'rgba(0, 0, 0, 0.294)', fontSize: 20 }}>Filter</p>
            <div className="gallery_taxonomies">
                <div className="selection_container">
                    <Select
                        options={categoryList}
                        defaultValue={categoryList[1]}
                        placeholder="Select Category"
                        color="#4BB18F"
                        onChange={(value) => onSelectionChange(value)}
                        theme={theme => ({
                            ...theme,
                            borderRadius: 8,
                            padding: 5,
                            height: 50,
                            colors: {
                                ...theme.colors,
                                primary25: '#50dfaf33',
                                primary: '#4BB18F',
                                primary50: "50dfaf33"
                            },
                        })} />
                </div>
                <AddNewCategory getStatus={(e) => setIsOpen(e)} onRefresh={() => setRefresh(refresh + 1)} />
                <EditCategories addNewCategoryBtn={isOpen} onRefresh={() => setRefresh(refresh + 1)} />
            </div>
            <br />
            <br />
            <PopUp show={popUpOpen} onCancel={() => setPopUp(false)} onSave={uploadMultipleImages} y='-90%'>
                <GalleryImapeView local={true} display={display} data={files} />
            </PopUp>
            <motion.div className="gallery_addImages" {...getRootProps()}
                initial={{ border: 'none', borderRadius: 20 }}
                animate={{ border: isDragActive ? '#4BB18F 2px dashed' : 'rgba(0, 0, 0, 0.200) 2px dashed' }}>
                <input {...getInputProps()} accept="video/*,image/*" id="add-image-gallery" name="images" />
                <span>
                    <IoMdImages color={isDragActive ? 'rgb(75, 177, 143)' : 'rgba(0, 0, 0, 0.228)'} size={80} htmlFor="add-image-gallery" />
                </span>
                {isDragActive ? <p style={{ color: 'rgba(0, 0, 0, 0.428)' }}>Drop Images Here</p> :
                    <p style={{ color: 'rgba(0, 0, 0, 0.428)', fontSize: 14 }}>Drap and Drop New Images</p>}
            </motion.div>
            <GalleryImapeView display={display} data={data} disableClick={true} />
        </div>
    )
}

export default Gallery
