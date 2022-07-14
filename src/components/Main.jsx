import React, {useEffect} from 'react'
import {dataJson} from '../data/db.js' 

export default () => {

    //Tiraba problemas de cors que no pude resolver en mi maquina asi que saque los datos de una constante local, de todas maneras esta la logica del fetch

    // fetch('http://localhost:80/api/autores.php', {mode: 'no-cors'})
    // .then(x => x.json())
    // .then(res => res)

    useEffect(() => {
        // Descomentar para fetch
        // const dataJson = getData()
        localStorage.setItem('data', JSON.stringify(dataJson))
     }, [])

    return(
        <div className="container my-5">
            <h1>Main</h1>
        </div>
    )
}