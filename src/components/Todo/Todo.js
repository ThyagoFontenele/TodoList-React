import React, { useState } from 'react'
import classes from './Todo.module.css'

import Lixeira from '../../assets/icons/trash/trash@2x.png'

export default function Todo({title, removeCount}){

    const [slowStyle, setSlowStyle] = useState();

    const estilo = {
        opacity: 0,
        display: 'none'
    }
    return(
        <>
            <li className={classes.container} style={slowStyle}>

                <label className={classes.switch}>
                    <input type="checkbox" name="checkbox" className={classes.checkbox}/>
                    <span className={classes.text}>{title}</span>
                </label>
                <img src={Lixeira} alt="ExcluirTask" className={classes.trash} onClick={ () => { 
                    setSlowStyle(estilo);
                    removeCount();
                }}/>

            </li>
        </>
    )
}