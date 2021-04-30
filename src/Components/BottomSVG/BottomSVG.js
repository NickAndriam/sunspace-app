import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

import { interpolate } from 'flubber'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { withBreakpoints } from 'react-breakpoints'
import * as d3 from 'd3'


import './bottomsvg.scss'

function BottomSVG(props, { duration = 0.38, path }) {
    const [index, setIndex] = useState(0)
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const [sizeIndex, setsizeIndex] = useState(1)
    const location = useLocation()
    const url = location
    const pathname = url.pathname.split('/')
    const { breakpoints, currentBreakpoint } = props

    //breakpoints
    const cb = breakpoints[currentBreakpoint];
    const desktop = breakpoints.desktop;
    const tablet = breakpoints.tabletLandscape;
    const mobile = breakpoints.mobileLandscape;

    const [screenIndex, setScreenIndex] = useState(0)
    const pathsArray = [
        {
            //home
            d: ["M-.07,854.24c-.45-65.2,461.16,35.35,941.41,35.35s979.73-104.53,979.6-35.35c-.25,135.94,0,225.76,0,225.76H-.07S.85,987-.07,854.24Z",
                "M-.79,381.94c-.32-185.43,328.17,100.54,669.92,100.54s697.18-297.32,697.09-100.54c-.18,386.6,0,642.06,0,642.06H-.79S-.13,759.57-.79,381.94Z",
                "M0,765.6c-.1-45.74,102.75,24.81,209.75,24.81S428,717.06,428,765.6C427.94,861,428,924,428,924H0S.2,858.77,0,765.6Z"],
            viewBox: ["0 0 1920 1080", "0 0 1366 1024", "0 0 428 926"]

        },
        {

            //about
            d: ["M-.71,418.07c-.45-191.15,461.17,103.66,941.42,103.66s979.72-306.52,979.59-103.66c-.25,398.56,0,661.93,0,661.93H-.71S.21,807.4-.71,418.07Z",
                "M-.79,381.94c-.32-185.43,328.17,100.54,669.92,100.54s697.18-297.32,697.09-100.54c-.18,386.6,0,642.06,0,642.06H-.79S-.13,759.57-.79,381.94Z",
                "M-0.9,386.7c0-51.9,49.9-25.8,108.6-9.5c10.6,2.9,58.9,13.6,107.5,13.5c48.3-0.2,96.9-11.1,107.4-13.5c52.7-11.9,105.2-31.1,105.2,9.5c-0.1,298,0,539.3,0,539.3H-0.9C-0.9,926-0.6,677.8-0.9,386.7z"],
            viewBox: ["0 0 1920 1080", "0 0 1366 1024", "0 0 428 926"]

        },
        {
            //gallery
            d: ["M.29,298.85C-.16,77.43,487.13,262.2,967.39,262.2s954-198.33,953.91,36.65c-.25,461.65,0,781.15,0,781.15H.29S1.21,749.8.29,298.85Z",
                "M-.54,284.6c-.32-213,346.44-35.25,688.2-35.25s678.9-190.78,678.81,35.25c-.18,444.07,0,751.4,0,751.4H-.54S.12,718.38-.54,284.6Z",
                'M-0.4,286.7C-0.5,196,110.8,249.8,218,248.4c106.9-1.4,209.6-58,209.6,38.3c-0.1,378.4,0,640.3,0,640.3h-428 C-0.4,927-0.2,656.4-0.4,286.7z'],
            viewBox: ["0 0 1920 1080", "0 0 1366 1024", "0 0 428 926"]

        },
        {
            //news
            d: ["M-.07,401.84C-.52,206,461.09,508,941.34,508s979.73-314,979.6-106.2c-.25,408.33,0,678.16,0,678.16H-.07S.85,800.71-.07,401.84Z",
                "M-.54,316.6C-.86,112.32,327.63,427.38,669.38,427.38S1366.56,99.8,1366.47,316.6c-.18,425.94,0,707.4,0,707.4H-.54S.12,732.67-.54,316.6Z",
                "M-0.9,386.7c0-51.9,49.9-25.8,108.6-9.5c10.6,2.9,58.9,13.6,107.5,13.5c48.3-0.2,96.9-11.1,107.4-13.5c52.7-11.9,105.2-31.1,105.2,9.5c-0.1,298,0,539.3,0,539.3H-0.9C-0.9,926-0.6,677.8-0.9,386.7z"],
            viewBox: ["0 0 1920 1080", "0 0 1366 1024", "0 0 428 926"]

        }
    ]

    useEffect(() => {
        if (cb >= 500) {
            setScreenIndex(0)
        } else {
            setScreenIndex(2)
        }
    }, [cb])

    useEffect(() => {
        switch (pathname[1]) {
            case '':
                return (
                    dispatch({ type: 'home' }),
                    setIndex(0)

                )
            case 'about':
                return (
                    dispatch({ type: 'about' }),
                    setIndex(1)

                )
            case 'gallery':
                return (
                    dispatch({ type: 'gallery' }),
                    setIndex(2)
                )
            case 'news':
                return (
                    dispatch({ type: 'news' }),
                    setIndex(3)
                )
            default:
                return (
                    dispatch({ type: 'home' }),
                    setIndex(0)
                )
        }

    }, [url])


    useEffect(() => {
        pathname[1] !== '' ? setOpen(true) : setOpen(false)
    }, [pathname[1]])

    useEffect(() => {
        if (cb <= mobile) {
            setsizeIndex(2)
        } else if ((cb >= tablet) && (cb < desktop)) {
            setsizeIndex(1)
        } else if (cb >= desktop) {
            setsizeIndex(0)
        }
    }, [cb])


    const ref = useRef()
    const usePrev = (value) => {
        useEffect(() => {
            ref.current = value
        })
        return ref.current
    }
    const prevIndex = usePrev(pathsArray[index].d[screenIndex])
    const interpolator = interpolate(prevIndex || pathsArray[0].d[sizeIndex], pathsArray[index].d[screenIndex])
    //large screen
    d3.select('#svg_path').transition().duration(600).ease(d3.easeCircleInOut)
        .attrTween('d', () => { return interpolator })

    const bottomEnterExitVariants = {
        animate: {
            opacity: isOpen ? 1 : [1, 1, 1, 0.5, 0],
            // y: isOpen ? '0%' : '100%',
            transition: {
                duration: 0.7,
                type: 'spring',
                bounceStiffness: 200,

            }
        },

    }

    console.log(pathname)

    return (
        <>
            {
                cb >= 500 ? (
                    <motion.svg
                        variants={bottomEnterExitVariants}
                        initial='initial'
                        animate='animate'
                        className="bottom_svg"
                        viewBox="0 0 1920 1080"
                    >
                        <motion.path id="svg_path" fill="white"></motion.path>

                    </motion.svg>
                ) : (
                    <motion.svg
                        variants={bottomEnterExitVariants}
                        initial='initial'
                        animate='animate'
                        className="bottom_svg_sm"
                        viewBox="0 0 428 926"
                    >
                        <motion.path
                            id="svg_path"
                            fill="white"
                        ></motion.path>

                    </motion.svg>
                )
            }
        </>

    )
}


export default withBreakpoints(BottomSVG)