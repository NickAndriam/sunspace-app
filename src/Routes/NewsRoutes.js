import React from 'react'
import { Route } from 'react-router-dom'
import News, { NewsDetail } from '../Pages/news/News'

const NewsRoutes = (
    <>
        <Route
            exact
            path="/news"
            component={News}
        />
        <Route
            exact
            path="/news/post"
            component={NewsDetail}
        />
    </>
)


export default NewsRoutes
