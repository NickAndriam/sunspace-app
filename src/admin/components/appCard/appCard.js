import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from '../../../http-common'
import { useDispatch, useSelector } from 'react-redux'
import AppButton from '../appButton/appButton'
import PopUp from '../popUp/popup'
import './appCard.scss'



const AppCard = (
    { ref,
        children,
        buttonWidth = 100,
        cardWidth = 150,
        title = "Title",
        desc = "...",
        btnTitle, padding,
        margin,
        opacity,
        customize = false,
        withDelete,
        onDelete,
        deleted,
        from = '',
        send = '',
        type = 'Loading...',
        tableName = '',
        withMultipleContent = false,
        data = [],
        cardId = 1,
        onDataUpdate
    }) => {

    let [isVisible, setVisibility] = useState(false)
    let [showIcon, setShowIcon] = useState(false)
    const [singleValue, setSingleValue] = useState('')
    const inputTitle = title.toLowerCase()
    const [refresh, setRefresh] = useState(false)

    const dispatch = useDispatch()

    const { content } = useSelector(state => state.getFile)

    const onOpeningCard = () => {
        setVisibility(true)
        if (withMultipleContent) {
            onDataUpdate()

        } else {
            onGettingData()
        }

    }
    const onGettingData = async () => {
        console.log('Getting Data...')
        const res = await axios.get(`${from}`)
        const data = res.data
        setSingleValue(data[0][`${type}`])
        console.log(data[0][`${type}`])
    }


    const onSave = async () => {
        console.log('Updating Data...')
        try {
            if (content === '') {
                dispatch({ type: 'error', msg: 'Empty Field' });
            } else {
                const res = await axios.put(`${send}`,
                    { content: withMultipleContent ? content : content, id: cardId, table_name: tableName, column_name: type });
                dispatch({ type: 'success', msg: 'Updated' });
                setVisibility(false);
                setRefresh(refresh + 1)
            }
        } catch (err) {
            dispatch({ type: 'error', msg: 'Failed to Save' })
        }
    }

    return (
        <>
            {
                customize ?
                    <>
                        <motion.div className="appCard_container"
                            ref={ref}
                            onHoverStart={() => setShowIcon(true)}
                            onHoverEnd={() => setShowIcon(false)}
                            onClick={() => setShowIcon(!showIcon)}
                            initial={{ padding, margin }}
                            animate={{ width: cardWidth, opacity: deleted ? 0 : 1, padding, margin, transition: { duration: 0.2 } }}
                            style={{ margin }} >
                            {showIcon && (withDelete ? <motion.p className="deleteCard_icon"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                                exit={{ opacity: 0 }}
                                onClick={onDelete}
                            >x</motion.p> : '')}
                            {children}
                        </motion.div>
                    </>
                    :
                    <>
                        <motion.div className="appCard_container"
                            ref={ref}
                            onHoverStart={() => setShowIcon(true)}
                            onHoverEnd={() => setShowIcon(false)}
                            onClick={() => setShowIcon(!showIcon)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, width: cardWidth, transition: { duration: 0.4, mass: 1, stiffness: 100 } }} >
                            <p style={{ color: '#848383', fontSize: 16, pointerEvents: 'inherit' }}>{title}</p>
                            <AppButton title={btnTitle || "Edit"} padding="px 0px 0px 0px" width={buttonWidth} onClick={onOpeningCard} />
                            {showIcon && <motion.p className="deleteCard_icon"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                                exit={{ opacity: 0 }}
                                onClick={onDelete}
                            >x</motion.p>}
                        </motion.div>

                        <PopUp show={isVisible} onSave={onSave} onCancel={() => setVisibility(false)}>
                            <h4>New {inputTitle}:</h4>
                            <p style={{ color: "rgba(0, 0, 0, 0.446)", fontSize: 14 }}>{withMultipleContent ? desc : singleValue}</p><br />
                            {children}
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
                            </div>
                        </PopUp>
                    </>
            }
        </>
    )
}

export default AppCard



// {textArea ?
//     <textarea required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new ${inputTitle}`} />
//     :
//     <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new ${inputTitle}`} />

// }