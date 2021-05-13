import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiCheckDoubleFill, } from 'react-icons/ri'
import { MdErrorOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import './notification.scss'

const Notification = () => {

    const { isOpen, msg, status } = useSelector(state => state.getNotification)
    const { content } = useSelector(state => state.getFile)
    const dispatch = useDispatch()
    // const isOpen = true
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => (
                dispatch({ type: 'close', msg }),
                dispatch({ type: 'resetForm', content: '', to: '' })
            ), 1500)

        }
    }, [isOpen])
    return (

        <motion.div className="notification_container"
            initial={{ y: '-150%' }}
            animate={
                {
                    y: isOpen ? '50%' : '-150%',
                    transition: { mass: 0.3, stiffness: 120, duration: 0.8 }
                }
            }>


            <div className="notification_box" style={{ backgroundColor: status === 1 ? '#16c961' : '#ff676c' }}>
                {status === 1 ?
                    <RiCheckDoubleFill size={30} color="white" /> :

                    <MdErrorOutline size={30} color="white" style={{ marginRight: 10 }} />
                }
                <p style={{ color: 'white', fontSize: 13, marginLeft: 5 }}>{msg}</p>
            </div>
        </motion.div>
    )
}

export default Notification
