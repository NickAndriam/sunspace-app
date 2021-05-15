import React, { useEffect, useState } from 'react'
import Heading from '../components/heading/heading'
import AppCard from '../components/appCard/appCard'
import AddNewCard from '../components/addNewCard/addNewCard'
import axios from '../../http-common'
import { useDispatch, useSelector } from 'react-redux'
import NewsList from '../components/NewDataForm/config/newsForms/newsList'
import { Route } from 'react-router'
import NewsHeader from '../components/NewDataForm/config/newsForms/newsHeader'
import NewsAddMore from '../components/NewDataForm/config/newsForms/newsAddMore'
import NewsEditForm from '../components/NewDataForm/config/newsForms/newsEditForm'

const News = () => {

    return (
        <div>
            <Route path='/admin/news/edit/:post' component={NewsEditForm} />
            <Route path='/admin/news/add-new' component={NewsAddMore} />
            <Route exact path='/admin/news/'>
                <NewsHeader />
                <NewsList />
            </Route>
            {/* <Route exact path='/admin/news/add-new' component={NewsList} /> */}
        </div>
    )
}

export default News


