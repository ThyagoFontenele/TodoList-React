import React from 'react'
import classes from './todo.css'
import Lixeira from '../../assets/icons/trash/trash.png'
import Lixeira2x from '../../assets/icons/trash/trash@2x.png'
export default function todo({title}){

    return(
        <>
            <li className={classes.container}>
                <input type="checkbox" className={classes.check} />
                <label>{title}</label>
                <img src={Lixeira} alt="ExcluirTask" />
            </li>
        </>
    )
}