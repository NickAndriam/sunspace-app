import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'



// import './map.scss'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapPort() {
    const abcd = "pk.eyJ1Ijoibmlja2FuZHJpYW0iLCJhIjoiY2tuYm1wajhjMDh4NzJucGgyaDZmNmI4bCJ9.5gFGc2OlM4U27l3gkuqXFQ"

    const container = useRef()

    useEffect(() => {
        mapboxgl.accessToken = abcd
        const map = new mapboxgl.Map({
            container: container.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-0.1404545, 51.5220163],
            zoom: 4
        })
        // map.addControl(new mapboxgl.NavigationControl())
    }, [])

    return (
        <div ref={container} style={{ width: 400, height: 400, borderRadius: 10 }}></div>
    )
}
