import React, {useEffect} from 'react'
import {dataJson} from '../data/db.js' 

export default () => {
    useEffect(() => {
        // getData()
        localStorage.setItem('data', JSON.stringify(dataJson))
     }, [])

    return(
        <h1>Main</h1>
    )
}