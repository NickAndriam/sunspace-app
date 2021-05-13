import React from 'react'
import { } from 'react-icons'

import './footer.scss'
export default function Footer({ data }) {
    return (
        <div className="footer_container">
            <p id="footer_txt">© 2021 SUNSpACe. All rights reserved.</p>
            <p id="footer_txt">Privacy Policy | {data}</p>
        </div>
    )
}
