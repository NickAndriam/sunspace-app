import React from 'react'
import { Route } from 'react-router-dom'
import Gallery from '../Pages/gallery/Gallery'
import FullImage from '../Components/FullImage/FullImage'

const GalleryRoutes = (
    <>
        <Route
            exact
            path="/gallery"
            component={Gallery}
        />
        <Route
            exact
            path="/gallery/image"
            component={FullImage}
        />
    </>
)


export default GalleryRoutes
