import React from 'react'
import axios from 'axios'

export const data = axios.get('/api')
    .then(res => {
        return res.data
    })


