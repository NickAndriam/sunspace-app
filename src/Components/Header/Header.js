import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { withBreakpoints } from 'react-breakpoints'
import { interpolate } from 'flubber'
import * as d3 from 'd3'

import './header.scss'

function Header(props, { color = '#4BB18F', duration = 0.2, animate = false }) {

    const { breakpoints, currentBreakpoint } = props;
    const cb = breakpoints[currentBreakpoint];
    const desktop = breakpoints.desktop;
    const mobile = breakpoints.mobileLandscape;
    // const tablet = breakpoints.tabletLandscape;
    const [bg, setBg] = useState('#4BB18F')
    const [toggle, setToggle] = useState(false)
    const [index, setIndex] = useState(0)
    const location = useLocation()
    const url = location
    const pathname = url.pathname.split('/')

    const colors = [
        '#4BB18F', '#217AA5', '#979B03'
    ]

    const pathsArrays = [
        {
            d: ["M.78.45V895.09s464.12,109.73,944,109.73,975.39-109.73,975.39-109.73V.45Z",
                "M.74-.06v802.9s330.16,98.47,671.5,98.47,693.85-98.47,693.85-98.47V-.06Z",
                "M-.17.06V543.78S103.17,610.46,210,610.46s217.17-66.68,217.17-66.68V.06Z"],
            viewBox: ["0 0 1920 1080", "0 0 1366 1024", "0 0 428 926"]
        }
    ]
    const ref = useRef()
    const usePrev = (value) => {
        useEffect(() => {
            ref.current = value
        })
        return ref.current
    }

    const prevSVG = usePrev(pathsArrays[0].d[index])
    const interpolator = interpolate(prevSVG || pathsArrays[0].d[0], pathsArrays[0].d[index])
    d3.select("#header_SVG").transition().duration(300).ease(d3.easeElasticInOut)
        .attrTween('d', () => { return interpolator })

    useEffect(() => {
        pathname[1] === 'about' && setBg(colors[0])
        pathname[1] === 'gallery' && setBg(colors[1])
        pathname[1] === 'news' && setBg(colors[2])
        pathname[1] !== '' ? setToggle(true) : setToggle(false)
    }, [pathname[1]])

    useEffect(() => {
        if (cb <= mobile) {
            setIndex(2)
        } else if ((cb > mobile) && (cb < desktop)) {
            setIndex(1)
        } else if (cb >= desktop) {
            setIndex(0)
        }
    }, [cb])

    // console.log(prevSVG)
    const headerEnterExitVariants = {
        initial: {
            y: '-100%'
        },
        animate: {
            y: toggle ? '-10%' : '-100%',
            // opacity: toggle ? 1 : 0,
            transition: toggle ? { duration: 0.4, bounceStiffness: 2 } : { duration: 0.3, bounceStiffness: 2 }
        },

    }
    return (
        <>

            <motion.svg
                variants={headerEnterExitVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                viewBox={pathsArrays[0].viewBox[index]}
                className="header_container"
            >
                <motion.path
                    animate={{ width: '100%', fill: bg, transition: { duration: 0.3 } }}
                    fill={color}
                    id="header_SVG" />
            </motion.svg>
        </>
    )
}

export default withBreakpoints(Header)