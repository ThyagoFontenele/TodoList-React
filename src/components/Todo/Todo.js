import React, { useState } from 'react'
import classes from './Todo.module.css'

import Lixeira from '../../assets/icons/trash/trash@2x.png'

export default function Todo({title, array, removerTarefa}){

    const [slowStyle, setSlowStyle] = useState();

    const estilo = {
        transition: 'all 300ms',
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

                    const index = array.indexOf(title);
                    const checkboxs = document.querySelectorAll('.checkbox');

                    for (let i = index; i < checkboxs.length; i++) { // Esse for é para não ter problema com checked
                        if(checkboxs[i+1] !== undefined) {
                            if(checkboxs[i+1].checked === true){ 
                                checkboxs[i].checked = true;
                            }else{
                                checkboxs[i].checked = false;
                            }
                        }
                    }
                    setSlowStyle(estilo);
                    setTimeout(function() {
                        removerTarefa(index ,array)
                        setSlowStyle();
                    }, 300);
                }}/>

            </li>
        </>
    )
}