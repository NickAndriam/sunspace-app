import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { MdCheck } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import slugify from '@sindresorhus/slugify';
import axios from '../../../../../http-common'


const AddNewCategory = ({ getStatus, onRefresh }) => {
    const [openBtn, setOpenBtn] = useState(false)
    const dispatch = useDispatch()

    const { folderPath, value, label } = useSelector(state => state.getCategory)

    const inputVariants = {
        initial: { y: '-60%', width: 0 },
        animate: {
            width: 190,
            height: 10,
            opacity: openBtn ? 1 : 0,
            scale: openBtn ? 1 : 0,
            transition: {
                duration: 0.4,
                type: 'spring',
                mass: 0.5,
                bounce: 5,
                stiffness: 80

            }
        }
    }

    const btnVariants = {
        initial: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            x: '0%',
            y: '-32%',
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.047) 0 0px 1px',
            height: 50,
            borderRadius: 10,
            scale: 1

        },
        animate: {
            x: openBtn ? '110%' : '0%',
            display: openBtn ? 'none' : 'flex',
            scale: openBtn ? 0.8 : 1,
            transition: {
                duration: 0.3,
                type: 'spring',
                mass: 0.2,
                stiffness: 80
            }
        }
    }
    const onSaveAndCancelVariants = {
        initial: {
            display: 'none',
            alignItems: 'center',
            justifyContent: 'flex-start',
            x: '0%',
            y: '-32%',
            width: 0,
            height: 50,
            borderRadius: 10,
            opacity: 1,
            scale: 0.7
        },
        animate: {
            x: openBtn ? '110%' : '0%',
            display: openBtn ? 'flex' : 'none',
            scale: openBtn ? 1 : 0.7,
            width: openBtn ? 200 : 0,

            transition: {
                duration: 0.3,
                type: 'spring',
                mass: 0.2,
                stiffness: 120
            }
        }
    }

    const onButtonClick = () => {
        setOpenBtn(!openBtn);
        getStatus(true)
    }
    const onAddNewCategory = async () => {
        try {
            if (value !== '') {
                await axios.post(`gallery/newCategory/${value}`)
                await axios.post(`gallery/newCategoryDB`, { value, label, path: folderPath })
                dispatch({ type: 'success', msg: 'New Category Added' })
                console.log('Successfully added new category called: ' + label + ' in ' + folderPath)
                document.getElementById('category_input').value = ''
                setOpenBtn(false)
                getStatus(false)
                onRefresh()
            } else {
                dispatch({ type: 'error', msg: 'Empty Field' })
                getStatus(true)
                setOpenBtn(true)


            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <motion.div style={{ marginLeft: 15, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <motion.div>
                <motion.div variants={inputVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <input required type="text"
                        id="category_input"
                        className="addnew_input"
                        placeholder={`Add a new category...`}
                        onChange={(e) => dispatch({ type: 'addNewCategory', value: slugify(e.target.value), label: e.target.value, folderPath: `/media/gallery/${slugify(e.target.value)}` })}

                    />
                </motion.div>
            </motion.div>
            <motion.div className="gallery_addCategory"
                variants={btnVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                onClick={onButtonClick}>
                <GrAdd style={{ marginLeft: 10 }} color="#4BB18F" />
                <p style={{ color: 'black', fontSize: 13 }}>Add New Category</p>
            </motion.div>
            <motion.div className="addNewCategorySave_save"
                variants={onSaveAndCancelVariants}
                initial='initial'
                animate='animate'
                exit='exit'
            >
                <div className="icon" onClick={onAddNewCategory} style={{ backgroundColor: '#4BB18F', width: 60, height: 40, borderRadius: 10, marginRight: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MdCheck color="white" size={22} style={{ marginTop: -3 }} className="category_icons" />
                </div>
                <div className="icon" onClick={() => (setOpenBtn(false), getStatus(false))} style={{ backgroundColor: '#FF676C', width: 50, height: 40, borderRadius: 10, marginRight: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CgClose color="white" size={20} style={{ marginTop: -3 }} />
                </div>

            </motion.div>
        </motion.div>
    )
}

export default AddNewCategory
