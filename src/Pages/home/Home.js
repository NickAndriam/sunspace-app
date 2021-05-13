import React, { useEffect, useState } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { motion } from 'framer-motion'
import axios, { API_URL } from '../../http-common'

import './home.scss'

//sponsors
import innergy from '../../Assets/logo/innergy.png'
import erasmus from '../../Assets/logo/erasmus.png'
import iv from '../../Assets/logo/iv.jpg'
import cmu from '../../Assets/logo/cmu.jpg'
import AppCarousel from '../../Components/AppCarousel/AppCarousel'

function Home({ breakpoints, currentBreakpoint }) {
    const cb = breakpoints[currentBreakpoint]
    const [data, setData] = useState([
        { id: 1, motto: '', partner_name: "", url: '', size: 0 },
    ])

    const [sponsorsList, setSponsorList] = useState([])

    const getLogo = async () => {
        await axios.get('/home/partnersList').then(res => {
            if (res.status === 200) {
                setSponsorList(res.data)
                console.log(res.data)
            }
        })
    }

    const getData = async () => {
        try {
            await axios.get('/home').then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setData(res.data)
                }
            })
        } catch (e) {
            console.log(e)
        }
    };
    useEffect(() => {
        getData()
        getLogo()
    }, [])




    const Sponsors = () => {
        return (
            <>
                <motion.div className="sponsors_box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {
                        cb > breakpoints.mobileLandscape ?
                            <div className="sponsors_container">
                                {
                                    sponsorsList.map(sponsor => (
                                        <img src={`${API_URL}/${sponsor.url}`} alt={sponsor.id} height={68} key={sponsor.id} />
                                    ))
                                }
                            </div> :
                            <div className="sponsors_container">
                                <AppCarousel autoPlay={true}>
                                    {
                                        sponsorsList.map(sponsor => (
                                            <img src={`${API_URL}/media/logo/${sponsor.url}`} alt={sponsor.id} height={sponsor.size} key={sponsor.id} />
                                        ))
                                    }
                                </AppCarousel>

                            </div>
                    }
                </motion.div>
                {
                    cb > breakpoints.mobileLandscape ?
                        <p className="sponsors_txt">Our Partners:</p>
                        :
                        <div className="sponsors_txt_box" >
                            <p style={{ color: '#707070' }}>Partners</p>
                        </div>
                }
            </>
        )
    }
    const Watch = () => {
        return (
            <>
                <div className="watch_container">
                    <p className="time">12:00</p>
                    <p className="date">Saturday, 6 March</p>
                </div>
            </>
        )
    }
    return (
        <motion.div
            className="home_main_container"
        // style={{backgroundImage: `url(${})`}}
        // exit={{ opacity: 0, transition: { duration: 0.4, mass: 0.2 } }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8 } }}
                // exit={{ opacity: 0, transition: { duration: 0.6 } }}

                className="bg-image" />
            <div className="layer" />
            <div className="home_svg_holder">
                <div className="home_svg_background" />
                {
                    cb > breakpoints.mobileLandscape ? (
                        <svg className="home_bottom_box" viewBox="0 0 1922.013 471.52">
                            <path id="home_bottom_box" d="M0,807.456s821.381,34.259,1152.169-65.5,439.346-137.38,558.291-135.3,211.553,41.368,211.553,41.368V1077.01L0,1078.1Z" transform="translate(0 -606.579)" fill="#fff" />
                        </svg>
                    ) : (
                        <svg className="home_bottom_box" viewBox="0 0 427.722 340.413">
                            <path d="M0,693.7s107.567,61.61,214.5,61.61S427.722,693.7,427.722,693.7v339.744L0,1034.111Z" transform="translate(0 -693.698)" fill="#fff" />
                        </svg>
                    )
                }

            </div>


            {/* motto and watch */}
            <div className="home_motto_watch_container">
                <div className="home_motto">

                    <motion.p style={{ lineHeight: 2.5 }}><span className="quote">“</span>{data[0].motto}<span className="quote">”</span> </motion.p>
                </div>
                <Watch />
            </div>
            <Sponsors />
        </motion.div>
    )
}

export default withBreakpoints(Home)


