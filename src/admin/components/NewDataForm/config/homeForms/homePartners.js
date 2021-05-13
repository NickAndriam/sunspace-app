import React, { useEffect, useState } from 'react'
import axios, { API_URL } from '../../../../../http-common'
import Heading from '../../../heading/heading'
import AppCard from '../../../appCard/appCard'
import AddNewCard from '../../../addNewCard/addNewCard'
import { motion } from 'framer-motion'
import { PartnerImageForm } from './PartnerImageForm'
import PopUp from '../../../popUp/popup'
import { useDispatch, useSelector } from 'react-redux'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const HomePartners = () => {
    const [isVisible, setVisibility] = useState(false)
    const [sponsorsList, setSponsorsList] = useState([])
    const [refresh, setRefresh] = useState(1)
    const [deleted, setDeleted] = useState(false)

    const dispatch = useDispatch()
    //Single image from input
    const { file } = useSelector(state => state.getFile)

    //---------------------------------Partners ---------------------------

    //DISPLAY LIST OF PARTNERS
    const getLogoList = async () => {
        await axios.get('/home/partnersList').then(res => {
            if (res.status === 200) {
                setSponsorsList(res.data)
            }
        })
    }

    useEffect(() => {
        getLogoList()
    }, [refresh])

    const onDeletingSponsors = async (id, url) => {
        const newURL = url.split('/')
        try {
            await axios.delete(`/home/delete-logo-from-db/${id}`)
            await axios.delete(`/media/deleteLogo/${newURL[2]}`)
            setDeleted(true)
            getLogoList()
            setRefresh(refresh + 1)
            console.log('Image deleted!')
            dispatch({ type: 'success', msg: 'Image Deleted' })
        } catch (err) {
            console.log(err)
        }
    }



    //-------------------- UPLOAD TO SERVER &&  DATABASE ----------------------------//

    // SEND IMAGE TO SERVER
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
            addNewPartner(res.data.url);
            getLogoList()
        } catch (err) {
            console.log(err)
        }
    }

    // SEND IMAGE -URL- TO DATABASE
    const addNewPartner = async (url) => {
        await axios.post('/home/addNewPartner', { url })
        console.log("Submitted to DB ", url)
    }



    //----------------------------ON SUMBIT---------------------------------  

    const onSumbitNewImage = () => {
        setVisibility(false)
        console.log('Submition in process');
        uploadActions(file, 'media/addLogo');
        console.log('Submition Complete!');
        dispatch({ type: 'success', msg: 'Saved' })
        setRefresh(refresh + 1)

    }

    //-----------------------------------------------------------------------------------//
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const newList = reorder(sponsorsList, result.source.index, result.destination.index)

        setSponsorsList(newList)
        let idList = newList.map(list => list.id, 1)
        console.log(newList)
        console.log(idList)
    }
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
    }

    return (
        <div>
            <div style={{ marginLeft: 10 }}>
                <Heading title="Add or Delete Sponsors" lineWidth="0%" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '95%', justifyContent: 'space-between' }}>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable" direction="horizontal">
                        {provided => (
                            <div ref={provided.innerRef} style={{ display: 'flex', margin: 10, width: '100%', overflow: 'scroll', padding: 10, }} >
                                {
                                    sponsorsList.map((sponsor, index) => (
                                        <Draggable key={sponsor.id} draggableId={sponsor.url} index={index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div content={sponsor} displayposition={index + 1}>
                                                        <AppCard cardWidth={130} customize withDelete key={sponsor.id} onDelete={() => onDeletingSponsors(sponsor.id, sponsor.url)}>
                                                            {<motion.div initial={{ width: '0%', opacity: 0 }} animate={{ width: '98%', opacity: 1, transition: { delay: 0.5, duration: 0.3, mass: 0.4 } }} className="home_sponsors_img" style={{ backgroundImage: `url(${API_URL}/${sponsor.url})` }} />}
                                                        </AppCard>
                                                    </div>
                                                </div>

                                            )}
                                        </Draggable>
                                    ))
                                }

                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <AddNewCard onOpen={() => setVisibility(true)} height={120} width={160}>
                    <PopUp show={isVisible} onCancel={() => setVisibility(false)} onSave={onSumbitNewImage}>
                        <PartnerImageForm />
                    </PopUp>
                </AddNewCard>
            </div>

        </div >
    )
}

export default HomePartners

