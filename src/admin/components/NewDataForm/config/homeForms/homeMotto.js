import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios, { API_URL } from '../../../../../http-common'
import Heading from '../../../../components/heading/heading'
import AppButton from '../../../appButton/appButton'
import PopUp from './../../../popUp/popup'

const HomeMotto = () => {
    const [isVisible, setVisibility] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [singleValue, setSingleValue] = useState('')
    const dispatch = useDispatch()

    const { content, to } = useSelector(state => state.getFile)

    //---------------------------------Motto ---------------------------
    const HomeSection = ({ title, onButtonClick, btnTitle, textWidth, data }) => {
        return (
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row', width: '92%' }}>
                <span style={{ width: '70%' }}>
                    <Heading title={title} lineWidth="100%" textWidth={textWidth} />
                </span>
                <span style={{ width: '20%' }}>
                    <AppButton bold title={btnTitle || "Edit"} padding="2px 30px 2px 30px" borderRadius={18} onClick={onOpeningMotto} />
                </span>
            </div>
        )
    }

    const onOpeningMotto = () => {
        onGetMotto()
        setVisibility(true)
    }
    const onGetMotto = async () => {
        console.log('Getting Data...')
        const res = await axios.get('/home/motto')
        const data = res.data
        setSingleValue(data[0].motto)
    }
    const onSave = async () => {
        console.log('Updating Data...')
        try {
            if (content === '') {
                dispatch({ type: 'error', msg: 'Empty Field' });
            } else {
                const res = await axios.put('/home/updateHomeMotto', { motto: content });
                dispatch({ type: 'success', msg: 'Updated' });
                setVisibility(false);
                setRefresh(refresh + 1)
            }
        } catch (err) {
            dispatch({ type: 'error', msg: 'Failed to Save' })
        }
    }
    return (
        <div>
            <HomeSection title="Update Motto" btnTitle="Update" textWidth='40%' onButtonClick={() => alert('update motto')} />
            <PopUp show={isVisible} onSave={onSave} onCancel={() => setVisibility(false)}>
                <h4>New Motto</h4>
                <p style={{ color: "rgba(0, 0, 0, 0.446)", fontSize: 14 }}>{singleValue}</p>
                <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new motto`} />
            </PopUp>
            <br />
        </div >
    )
}

export default HomeMotto

