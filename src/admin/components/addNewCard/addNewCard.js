import React from 'react'
import { FiPlus } from 'react-icons/fi'

import './addNewCard.scss'

const AddNewCard = () => {


    return (
        <div className="addNewCard_container" onClick={() => alert('test')}>
            <FiPlus size={60} className="plus_icon" />
            <p style={{ color: '#C6C5C5', fontSize: 14 }}>Add more</p>
        </div>
    )
}

export default AddNewCard
