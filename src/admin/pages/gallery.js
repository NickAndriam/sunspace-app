import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import axios from '../../http-common'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import GalleryImapeView from '../components/NewDataForm/config/galleryForms/galleryImageView';
import AddNewCategory from '../components/NewDataForm/config/galleryForms/addNewCategory';
import EditCategories from '../components/NewDataForm/config/galleryForms/editCategories';


const Gallery = () => {
    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState(1)
    const [display, setDisplay] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { categoryList, currentCategory } = useSelector(state => state.getCategory)


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
        console.log('Setting up current category')
        setRefresh(refresh + 1)
        setTimeout(() => setDisplay(true), 200)

    }


    useEffect(() => {
        getCategoryList()
        getImagesOfCategory(currentCategory)
        setTimeout(() => setDisplay(true), 400)
    }, [refresh])

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
            <GalleryImapeView display={display} />
        </div>
    )
}

export default Gallery
