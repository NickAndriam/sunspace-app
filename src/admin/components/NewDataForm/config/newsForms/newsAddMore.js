import React, { useState, useEffect } from 'react'
import Heading from '../../../heading/heading'
import AddNewCard from '../../../addNewCard/addNewCard'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../../../../http-common'
import { motion } from 'framer-motion'
import { MdDelete } from 'react-icons/md'
import { BsCardImage } from 'react-icons/bs'
import GalleryImageView from '../galleryForms/galleryImageView'
import { Route } from 'react-router'

const defaultValue = [{ id: 1, description: 'desc' }]
const NewsAddMore = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.getNews)

    const [isFocused, setIsFocus] = useState(false)
    const [display, setDisplay] = useState(false)
    const [descriptions, setDescriptions] = useState(defaultValue)
    const [refresh, setRefresh] = useState(1)
    const { id } = useSelector(state => state.getterForIDs)




    const onGettingAllData = async () => {
        const res = await axios.get('/news/getList')
        const myData = res.data

        const description = myData[0].description
        dispatch({ type: 'setNewsContent', data: myData })
        function numberToArray(item) {
            let array = item.toString().split(",");//stringify the number, then make each digit an item in an array
            return array.map(x => parseInt(x));//convert all the items back into numbers
        }
        console.log('description in the DB ', description)
        onGettingDescriptions(description)
    }
    const onGettingDescriptions = async (ids) => {
        const res = await axios.get(`/news/getNewsDescription/ids=${ids}`)
        // console.log(res.data)
        setDescriptions(res.data)
        setTimeout(() => { setDisplay(true) }, 50)
        dispatch({ type: 'setDescription', description: res.data })
    }

    const onAddMoreDesc = (e) => {
        e.preventDefault()
        setRefresh(refresh + 1)
        const appendData = { id: descriptions.length + 1, description: 'just a test' }
        const temp = descriptions
        console.log(temp)
        const newData = temp.push(appendData)
        console.log(newData)
        // dispatch({ type: 'setDescription', description: newData })
        console.log('New Data: ', newData)
    }

    const onDelete = () => {
        console.log('deleted')
    }


    return (
        <div style={{ width: '80%', height: '100%', overflowY: 'scroll', marginLeft: '5%' }}>
            <h3>Add New:</h3>
            <p style={{ color: "rgba(0, 0, 0, 0.446)", fontSize: 14 }}>Title</p>
            <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input news_input" placeholder={`Enter new title`} />
            <p style={{ color: "rgba(0, 0, 0, 0.446)", fontSize: 14 }}>Short Description:</p>
            <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input news_input" placeholder={`Enter new short description`} />
            <h4>Content</h4>
            {descriptions.map((list, index) => (
                <div key={index} style={{ position: 'relative' }}>
                    <p style={{ color: "rgba(0, 0, 0, 0.446)", fontSize: 13 }}>Section {index}</p>
                    <div style={{ position: 'absolute', right: '2%', top: '25%' }} id={list.id} onClick={onDelete}>
                        <MdDelete size={20} className="news_addMore" />
                    </div>
                    <motion.textarea
                        // value={desc.description}
                        initial={{ height: '2em' }}
                        id={`news_description_`}
                        required
                        onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })}
                        type="text"
                        className="addnew_input news_input"
                        placeholder={`Enter new short content`}
                        whileHover={{ height: '10em' }}
                        transition={{ duration: 0.4, ease: 'easeInOut', mass: 0.4, type: 'spring' }}

                    />

                </div>
            ))}
            <div style={{ width: '80%', display: 'flex', justifyContent: 'space-evenly' }}>
                <div onClick={onAddMoreDesc} className="icon">
                    <p style={{ color: 'black', fontSize: 16 }}>+ Add Section</p>
                </div>
                <div onClick={onAddMoreDesc} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <BsCardImage size={15} color="grey" className="icon" />
                    <p style={{ color: 'black', fontSize: 16 }} className="icon">Add Images</p>
                </div>
            </div>
            <GalleryImageView></GalleryImageView>
        </div>
    )
}

export default NewsAddMore
