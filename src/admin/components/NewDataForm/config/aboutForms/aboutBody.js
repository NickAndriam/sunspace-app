import React, { useEffect, useState } from 'react'
import Heading from '../../../heading/heading'
import AppCard from '../../../appCard/appCard'
import AddNewCard from '../../../addNewCard/addNewCard'
import { useDispatch } from 'react-redux'
import axios from '../../../../../http-common'

const AboutBody = () => {
    const dispatch = useDispatch()
    const [aboutList, setAboutList] = useState([
        { title: 'Loading', description: '' }
    ])

    const [refresh, setRefresh] = useState(1)
    const onGetAboutData = async () => {
        const res = await axios.get('/about/aboutBody')
        setAboutList(res.data)
        // console.log(res.data[0].description)

    }

    useEffect(() => {
        onGetAboutData()
    }, [refresh])

    return (
        <div>
            <Heading title="Body" />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {aboutList.map(list => (
                    <AppCard
                        onDataUpdate={() => setRefresh(refresh + 1)}
                        key={list.title}
                        withMultipleContent
                        data={aboutList[list.id]}
                        cardId={list.id}
                        type='description'
                        title={list.title}
                        desc={list.description}
                        send='/about/updateAboutSingleCard'
                        tableName="about_body">
                        <textarea required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new...`} />
                    </AppCard>
                ))}
                <AddNewCard image />
            </div>
        </div>
    )
}

export default AboutBody

