import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { withBreakpoints } from 'react-breakpoints'
import { motion } from 'framer-motion'


import './news.scss'
import BottomContentHolder from '../../Components/BottomContentHolder/BottomContentHolder'
import HeaderContent from '../../Components/HeaderContent/HeaderContent'
import ImageCard from '../../Components/ImageCard/ImageCard'
import AppButton from '../../Components/AppButton/AppButton'
import greenhouse from '../../Assets/images/green-house.jpg'


function News(props) {
    const { breakpoints, currentBreakpoint } = props
    const [mobile, setMobile] = useState(false)
    const cb = breakpoints[currentBreakpoint]

    useEffect(() => {
        cb < 700 ? setMobile(true) : setMobile(false)
    }, [cb])


    const NewsCard = () => {
        return (
            <>
                <div className="newsCard_container">
                    <div style={{ width: 400 }}>
                        {!mobile ? <h3 style={{ color: '#8E9108' }}>Greenhouse will save lives!</h3> : ''}
                        <p style={{ color: '#6E6E6E', fontSize: 14 }}>Sed porttitor lectus nibh. Vestibulum ante ipsum
                        orci luctus et ultrices posuere cubilia Curae;
                        Donec velit neque, auctor sit amet aliquam vel,
                        ullamcorper sit amet ligula.
                        Curabitur aliquet quam id dui posuere blandit.
                        Curabitur aliquet quam id dui posuere blandit.
Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                        <AppButton bg="#A1A500" title="Read more" to={`/news/post`} />
                    </div>
                    <div style={{ background: `url(${greenhouse})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="news_thumbnail" />
                    {mobile ? <h3 style={{ color: '#8E9108', alignSelf: 'self-start' }}>Greenhouse will save lives!</h3> : ''}
                </div>
            </>
        )
    }
    const NewsDetail = (props) => {
        return (
            <>
                <div className="newsDetail_container">
                    <HeaderContent y={0} title="Greenhouse save lives" subtitle="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Quisque velit nisi, pretium ut lacinia in, elementum id enim." />
                    <BottomContentHolder>
                        <div className="newsCardDetail_container">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ background: `url(${greenhouse})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="news_thumbnail" />
                                <p style={{ color: '#A0A0A0', fontSize: 12, textAlign: 'center', width: 380 }}>Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id blandit vivamus magna justo.</p>
                            </div>
                            <div style={{ width: 380, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <h3 style={{ color: '#8E9108' }}>Greenhouse will save lives!</h3>
                                <p className="news_desc_txt">Sed porttitor lectus nibh. Vestibulum ante ipsum
                                orci luctus et ultrices posuere cubilia Curae;
                                Donec velit neque, auctor sit amet aliquam vel,
                                ullamcorper sit amet ligula.
                                Curabitur aliquet quam id dui posuere blandit.
                                Curabitur aliquet quam id dui posuere blandit.
    Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                                <p className="news_desc_txt">Sed porttitor lectus nibh. Vestibulum ante ipsum
                                orci luctus et ultrices posuere cubilia Curae;
                                Donec velit neque, auctor sit amet aliquam vel,
                                ullamcorper sit amet ligula.
                                Curabitur aliquet quam id dui posuere blandit.
                                Curabitur aliquet quam id dui posuere blandit.
    Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                            </div>
                        </div>
                        <div className="news_main_desc">
                            <p className="news_desc_txt desc_width" >Sed porttitor lectus nibh. Vestibulum ante ipsum
                            orci luctus et ultrices posuere cubilia Curae;
                            Donec velit neque, auctor sit amet aliquam vel,
                            ullamcorper sit amet ligula.
                            Curabitur aliquet quam id dui posuere blandit.
                            Curabitur aliquet quam id dui posuere blandit.
    Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                            <p className="news_desc_txt desc_width" >Sed porttitor lectus nibh. Vestibulum ante ipsum
                            orci luctus et ultrices posuere cubilia Curae;
                            Donec velit neque, auctor sit amet aliquam vel,
                            ullamcorper sit amet ligula.
                            Curabitur aliquet quam id dui posuere blandit.
                            Curabitur aliquet quam id dui posuere blandit.
    Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                        </div>
                    </BottomContentHolder>
                </div>

            </>
        )
    };

    const MainNews = () => {
        return (
            <motion.div className="news_container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <HeaderContent y={0} title="Our Latest News" subtitle="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Quisque velit nisi, pretium ut lacinia in, elementum id enim." />

                <BottomContentHolder>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </BottomContentHolder>
            </motion.div>
        )
    }

    return (
        <>

            <Route exact path='/news/post' component={NewsDetail} />
            <Route exact path='/news' component={MainNews} />
        </>
    )
}

export default withBreakpoints(News);