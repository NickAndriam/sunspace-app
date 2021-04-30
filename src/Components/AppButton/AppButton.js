import React from 'react'
import { Link } from 'react-router-dom'
import './appButton.scss'
export default function AppButton({ width = 120, height = 45, title, bg, to, onClick }) {
    console.log(to)
    return (

        <Link to={`${to}` || "/"}
            onClick={() => onClick}
            className="appButton_container"
            style={{ width, height, title, backgroundColor: bg, textDecoration: 'none' }}>
            <h3 style={{ fontSize: 15, color: "white" }}>{title}</h3>
        </Link>
    )
}
