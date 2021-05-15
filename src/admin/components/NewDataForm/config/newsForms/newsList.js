import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

import Heading from '../../../heading/heading'
import AppCard from '../../../appCard/appCard'
import AddNewCard from '../../../addNewCard/addNewCard'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../../../../http-common'
import PopUp from '../../../popUp/popup'
import { motion } from 'framer-motion'
import GalleryImageView from '../galleryForms/galleryImageView'
import NewsAddMore from './newsAddMore'
import AppButton from '../../../appButton/appButton'

import { VscLoading } from 'react-icons/vsc'
import { MdDelete } from 'react-icons/md'

// const defaultValue = [{ id: 1, description: 'desc' }]
const NewsList = () => {
    const dispatch = useDispatch()
    const { description } = useSelector(state => state.getNews)


    const [isFocused, setIsFocus] = useState(false)
    const [display, setDisplay] = useState(false)
    const [descriptions, setDescriptions] = useState([])
    const [refresh, setRefresh] = useState(1)
    const [newsLists, setNewsLists] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useSelector(state => state.getterForIDs)

    const onGettingAllData = async () => {
        const res = await axios.get('/news/getList')
        const myData = res.data
        console.log("Data is", myData)
        setNewsLists(myData)
        if (myData.length >= 1) {
            setLoading(false)
        }
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


    useEffect(() => {
        onGettingAllData()

    }, [1])
    return (
        <div>
            <Heading title="News" lineWidth="90%" />
            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/admin/news/add-new" style={{ textDecoration: 'none' }}>
                    <AddNewCard onClick={() => window} />
                </Link>
                {loading ?
                    (
                        <motion.div className="loading_screen_container_sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            exit={{ opacity: 0 }}>
                            <VscLoading size={40} color="#4BB18F" className="loading_screen" />
                        </motion.div>
                    )
                    : (
                        <>
                            {
                                newsLists.map((list, index) => (
                                    <div key={index}>
                                        <AppCard
                                            customize
                                            onDataUpdate={() => console.log('update')}
                                            withMultipleContent
                                            title="The Importance of Greenhouse"
                                            cardWidth={200}
                                            tableName="about_body"
                                            withBtn={false}
                                            noSubtitle
                                        >   <p style={{ color: 'rgba(0,0,0,0.5', fontSize: 16 }}>Title</p>
                                            <Link to={`/admin/news/edit/${list.id}`} style={{ textDecoration: 'none' }} onClick={() => dispatch({ type: 'setCurrentPostToEdit', data: list })}>
                                                <AppButton title="Edit" borderRadius={20} width={100} />
                                            </Link>
                                        </AppCard>
                                    </div>
                                ))}
                        </>
                    )}
            </div>
        </div>
    )
}

export default NewsList
