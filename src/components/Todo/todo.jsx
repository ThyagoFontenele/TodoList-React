import React, { useState } from 'react'
import './Todo.css'

import Lixeira from '../../assets/icons/trash/trash@2x.png'

export default function Todo({title, array, removerTarefa}){

    const [slowStyle, setSlowStyle] = useState();
    const estilo = {
        transition: 'all 600ms',
        opacity: 0
    }
    return(
        <>
            <li class='container' style={slowStyle}>

                <label class='switch'>
                    <input type="checkbox" name="checkbox" class='checkbox'/>
                    <span class='text'>{title}</span>
                </label>
                <img src={Lixeira} alt="ExcluirTask" class='trash' onClick={ () => { 
                    let index = array.indexOf(title);
                    setSlowStyle(estilo);
                    let test = document.querySelectorAll('.checkbox');
                    test[index].checked = false;
                    setTimeout(function() {
                        removerTarefa(index ,array)
                        setSlowStyle();
                    }, 500);
                }}/>

            </li>
        </>
    )
}