import React, { useState, useEffect } from 'react'
import Heading from '../../../heading/heading'
import AddNewCard from '../../../addNewCard/addNewCard'
import { useDispatch, useSelector } from 'react-redux'
import axios, { API_URL } from '../../../../../http-common'
import { motion } from 'framer-motion'
import { MdDelete } from 'react-icons/md'
import { BsCardImage } from 'react-icons/bs'
import GalleryImageView from '../galleryForms/galleryImageView'
import { Route, useParams } from 'react-router'

const defaultValue = [{ id: 1, description: 'desc' }]
const NewsEditForm = () => {

    const dispatch = useDispatch()
    const { data, currentSequence, currentSections } = useSelector(state => state.getNews)

    const [isFocused, setIsFocus] = useState(false)
    const [sections, setSections] = useState([])
    const [display, setDisplay] = useState(false)
    const [descriptions, setDescriptions] = useState(defaultValue)
    const [refresh, setRefresh] = useState(1)
    const { id } = useSelector(state => state.getterForIDs)

    function isNumeric(num) {
        return !isNaN(num)
    }

    const findSpecificArrayById = (arr, id) => {
        const found = arr.find(sec => sec.id === id)
        return found;
    }

    const sectionPlaceholder = (arr, id) => {
        const value = findSpecificArrayById(arr, id)
        return value.sections
    }

    const onGettingAllNeededData = async () => {
        // const res = await axios.get('/news/getList')
        const sequencesData = data.sequences
        console.log(data)
        const sequenceSplit = sequencesData.split(`,`)
        dispatch({ type: 'setCurrentSequence', currentSequence: sequenceSplit })
        let newVal = sequenceSplit.filter(Number)
        let secIds = newVal.join()
        onGettingSections(secIds)
    }


    const onGettingSections = async (ids) => {
        const res = await axios.get(`/news/getNewsSection/ids=${ids}`)
        console.log(res.data)
        setSections(res.data)
        dispatch({ type: 'setSections', currentSections: res.data })
        // console.log(findSpecificArrayById(currentSections, 1).sections)
        // console.log(sectionPlaceholder(currentSections, 1))
        if (res.data !== undefined) {
            await setTimeout(() => { setDisplay(true) }, 100)
        } else {
            setDisplay(false)
        }


    }


    const onAddMoreSection = (e) => {
        const oldData = currentSequence
        const newData = "1"
        oldData.push(newData)
        dispatch({ type: 'setCurrentSequence', currentSequence: oldData })
    }

    const onAddImages = () => {
        // e.preventDefault()
        const newData = "image.jpeg"
        const oldData = currentSequence
        oldData.push(newData)
        dispatch({ type: 'setCurrentSequence', currentSequence: oldData })
        // console.log({ oldData })

    }




    const onDelete = () => {
        console.log('deleted')
    }

    useEffect(() => {
        console.log(data)
        if (data !== null) {
            console.log(data)
            onGettingAllNeededData()
        } else {
            console.log('no data found')
        }
    }, [1])

    // console.log(currentSections)
    return (
        <div className="newsEditForm_container">
            <h3>Edit:</h3>
            {display ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p style={{ color: "rgba(0, 0, 0, 0.446)", fontSize: 14 }}>Title</p>
                    <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input news_input" placeholder={`${data.title || 'Title'}`} />
                    <p style={{ color: "rgba(0, 0, 0, 0.446)", fontSize: 14 }}>Short Description:</p>
                    <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input news_input" placeholder={`${data.short_desc || 'Short Description'}`} />
                    <h4>Content</h4>

                    <div>
                        {
                            currentSequence.map((list, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <p style={{ color: "rgba(0, 0, 0, 0.446)", fontSize: 13 }}>Section {index + 1}</p>

                                    {
                                        isNumeric(list) ?
                                            (
                                                <>
                                                    <div style={{ position: 'absolute', right: '2%', top: '25%' }} id={list.id} onClick={onDelete}>
                                                        <MdDelete size={20} className="news_addMore" />
                                                    </div>
                                                    <motion.textarea
                                                        // value={desc.description}
                                                        initial={{ height: '2em' }}
                                                        id={`news_description_`}
                                                        required
                                                        rows={10}
                                                        onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })}
                                                        type="text"
                                                        className="addnew_input news_input"
                                                        placeholder={`${sectionPlaceholder(currentSections, parseInt(list))}`}
                                                        whileHover={{ height: '10em' }}
                                                        transition={{ duration: 0.4, ease: 'easeInOut', mass: 0.4, type: 'spring' }}

                                                    />
                                                </>
                                            )
                                            :
                                            (
                                                <div style={{ display: 'flex' }}>
                                                    <img style={{ height: 150, borderRadius: 20 }} src={`${API_URL}/media/news/${list}`} alt="list" />
                                                </div>
                                            )
                                    }


                                </div>
                            ))}
                    </div>
                </motion.div>
            ) : '...'}

            <div style={{ width: '80%', display: 'flex', justifyContent: 'space-evenly' }}>
                <div onClick={onAddMoreSection} className="icon">
                    <p style={{ color: 'black', fontSize: 16 }}>+ Add Section</p>
                </div>
                <div onClick={onAddImages} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <BsCardImage size={15} color="grey" className="icon" />
                    <p style={{ color: 'black', fontSize: 16 }} className="icon">Add Images</p>
                </div>
            </div>
        </div>
    )
}

export default NewsEditForm
