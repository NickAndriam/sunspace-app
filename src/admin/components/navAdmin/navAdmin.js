import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { BsInfoCircle } from 'react-icons/bs'
import { IoIosImages } from 'react-icons/io'
import { FaRegNewspaper, FaEye } from 'react-icons/fa'

import './navAdmin.scss'
import logo from '../../../Assets/logo/logo.jpg'
import AppButton from '../appButton/appButton'


const NavAdmin = () => {
    let location = useLocation()
    let url = location.pathname.split('/')
    let pathname = url[2]

    return (
        <div className="navAdmin_container">
            <img src={`${logo}`} className="navAdmin_logo" />
            <div className="navAdmin_lists">


                <Link to="/admin/home" className="navAdmin_list" style={{ textDecoration: 'none' }}>
                    <FaHome color={pathname === 'home' ? '#4BB18F' : '#aeaeae'} size={28} />
                    {pathname === 'home' ?
                        <h2 className="navAdmin_text_bold">Home</h2> :
                        <p className="navAdmin_text">Home</p>}
                </Link>
                <Link to="/admin/about" className="navAdmin_list" style={{ textDecoration: 'none' }}>
                    <BsInfoCircle color={pathname === 'about' ? '#4BB18F' : '#aeaeae'} size={28} />
                    {pathname === 'about' ?
                        <h2 className="navAdmin_text_bold">About Us</h2> :
                        <p className="navAdmin_text">About Us</p>}
                </Link>
                <Link to="/admin/gallery" className="navAdmin_list" style={{ textDecoration: 'none' }}>
                    <IoIosImages color={pathname === 'gallery' ? '#4BB18F' : '#aeaeae'} size={28} />
                    {pathname === 'gallery' ?
                        <h2 className="navAdmin_text_bold">Gallery</h2> :
                        <p className="navAdmin_text">Gallery</p>}
                </Link>
                <Link to="/admin/news" className="navAdmin_list" style={{ textDecoration: 'none' }}>
                    <FaRegNewspaper color={pathname === 'news' ? '#4BB18F' : '#aeaeae'} size={28} />
                    {pathname === 'news' ?
                        <h2 className="navAdmin_text_bold">News</h2> :
                        <p className="navAdmin_text">News</p>}
                </Link>

                <div style={{ position: 'absolute', bottom: '7%', display: 'flex' }}>
                    <AppButton link={true} to={pathname === 'home' ? '/' : `/${pathname}`} title="View Site" bg="#3b9779" padding="0px 15px 0px 15px" icon={<FaEye color="white" />} />
                    <AppButton link={true} to='/admin' title="Log Out" bg="#FF666C" padding="0px 5px 0px 5px" />
                </div>
            </div>
        </div>
    )
}

export default NavAdmin
