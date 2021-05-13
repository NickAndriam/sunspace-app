import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiDeleteBin2Fill, RiEdit2Line, RiCheckFill } from 'react-icons/ri'
import axios from '../../../../../http-common'
import { AiFillDelete } from 'react-icons/ai'
import SlideDown from '../../../slideDown/slideDown'
import { useDispatch, useSelector } from 'react-redux'
import slugify from '@sindresorhus/slugify'

const EditCategories = ({ addNewCategoryBtn, onRefresh }) => {

    const [isOpenBtn, setOpenBtn] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [isDisabled, setDisabled] = useState(true)
    const dispatch = useDispatch()

    const { label, value, newPath, oldPath, categoryList, id } = useSelector(state => state.getCategory)
    const oldArrays = categoryList

    const btnVariants = {
        initial: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            x: '0%',
            y: '-13%',
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.047) 0 0px 1px',
            height: 50,
            borderRadius: 10,
            scale: 1,
            marginLeft: 15

        },
        animate: {
            x: addNewCategoryBtn ? '110%' : '0%',
            display: addNewCategoryBtn ? 'none' : 'flex',
            scale: addNewCategoryBtn ? 0.8 : 1,
            transition: {
                duration: 0.3,
                type: 'spring',
                mass: 0.3,
                stiffness: 100
            }
        }
    }
    const categoryListVariants = {
        initial: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.100) 0 0px 10px',
            height: 50,
            borderRadius: 10,
            scale: 1,
            marginLeft: 10,
            width: '90%'

        },
        animate: {
            transition: {
                duration: 0.3,
                type: 'spring',
                mass: 0.2,
                stiffness: 80
            }
        }
    }


    const onClose = () => {
        let elements = document.getElementsByTagName("input");
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].type == "text") {
                elements[i].value = "";
            }
            setOpenBtn(false)
            onRefresh()
        }
    }
    const onSave = async () => {
        try {
            if (label === "" || undefined) {
                dispatch({ type: 'error', msg: "Empty Field" })
            } else {
                dispatch({ type: 'success', msg: "Category Updated" })
                await axios.put('/gallery/updateCategoryName', { label, value, oldPath, newPath, id })
            }
        } catch (err) {
            console.log(err)
        }
        onRefresh()
    }
    const onDelete = async (e) => {
        let currentId = e.currentTarget.id
        let currentValue = e.currentTarget.getAttribute('name')
        try {
            await axios.delete(`/gallery/deleteCategory/${currentId}/${currentValue}`)
            dispatch({ type: 'success', msg: "Category Deleted" })
        } catch (err) {
            dispatch({ type: 'error', msg: "Server Error!" })
            console.log(err)
        }
        onRefresh()
    }



    const onGettingInput = (e) => {
        const oldValue = e.target.name
        const value = e.target.value
        const currentId = e.target.id
        dispatch({ type: 'setSelectedCategory', value: slugify(value), label: value, newPath: `/media/gallery/${slugify(value)}`, oldPath: `/media/gallery/${oldValue}`, id: currentId })
    }
    const onFocused = (e) => {
        e.preventDefault()
        const currentId = e.target.id
        console.log(oldPath)
        dispatch({ type: 'setSelectedCategory', id: currentId })
    }

    // console.log({ label, value, newPath, oldPath, id })

    return (
        <div>
            <motion.div className="gallery_addCategory"
                variants={btnVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                onClick={() => setOpenBtn(true)}
            >
                <RiEdit2Line style={{ marginLeft: 10 }} color="#4BB18F" />
                <p style={{ color: 'black', fontSize: 13 }}>Edit Categories</p>
            </motion.div>
            <SlideDown show={isOpenBtn} onClose={onClose}>
                {categoryList.map(list => (
                    <motion.div key={list.id}
                        style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '5px 10px 5px 10px' }}
                    >
                        <motion.div className="category_card"
                            variants={categoryListVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            <input id={list.id} name={list.value} type="text" className="category_input" placeholder={list.label} onChange={onGettingInput} onFocus={onFocused} />

                            <div style={{ display: 'flex', width: '30%', height: 50, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <>
                                    <div id={list.id} name={list.value} onClick={onSave} className="icon">
                                        <RiCheckFill className="category_green_icon icon" size={22} />
                                    </div>
                                    <div id={list.id} name={list.value} onClick={onDelete} className="icon" >
                                        <AiFillDelete className="category_red_icon icon" size={22} />
                                    </div>
                                </>
                            </div>

                        </motion.div>
                    </motion.div>
                ))}

            </SlideDown>
        </div>
    )
}

export default EditCategories
