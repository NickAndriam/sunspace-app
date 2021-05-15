import React, { useEffect, useState } from 'react'
import Heading from '../../../heading/heading'
import AppCard from '../../../appCard/appCard'
import AddNewCard from '../../../addNewCard/addNewCard'
import axios from '../../../../../http-common'
import { useDispatch, useSelector } from 'react-redux'
import NewsList from './newsList'
import { Route } from 'react-router'

const NewsHeader = () => {
    const dispatch = useDispatch()
    const { data, title, description, featuredImage, images } = useSelector(state => state.getNews)
    const [headers, setHeaders] = useState([])

    const onGettingAllData = async () => {
        const res = await axios.get('/news/getList')
        const myData = res.data

        const description = myData[0].description
        dispatch({ type: 'setNewsContent', data: myData })

        function numberToArray(item) {
            let array = item.toString().split(",");//stringify the number, then make each digit an item in an array
            return array.map(x => parseInt(x));//convert all the items back into numbers
        }
        // onGettingDescriptions(description)
    }
    // const onGettingDescriptions = async (ids) => {
    //     const res = await axios.get(`/news/getNewsDescription/ids=${ids}`)
    //     // console.log(res.data)
    // }

    useEffect(() => {
        onGettingAllData()
    }, [1])

    return (
        <div>
            <Heading />
            <div style={{ display: 'flex' }}>
                <AppCard
                    type='title'
                    title="Title"
                    from='/news/getHeader'
                    tableName='news_header'
                    send='/news/updateNewsSingleCard'
                >
                    <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new...`} />
                </AppCard>
                <AppCard
                    type='subtitle'
                    title="Subtitle"
                    from='/news/getHeader'
                    tableName="news_header"
                    send='/news/updateNewsSingleCard' >
                    <input required onChange={(e) => dispatch({ type: 'setSingleForm', content: e.target.value, to: '/media' })} type="text" className="addnew_input" placeholder={`Enter new...`} />
                </AppCard>
            </div>
            {/* <NewsList /> */}
            {/* <Heading title="Contact Us / Location" lineWidth="70%" />
            <div style={{ display: 'flex' }}>
                <AppCard title="Contact Us" />
                <AppCard title="Location" buttonWidth={200} cardWidth={220} btnTitle="Update Location" />
            </div> */}
        </div>
    )
}

export default NewsHeader


