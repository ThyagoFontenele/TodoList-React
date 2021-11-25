import React from 'react'
import './todo.css'

import Lixeira from '../../assets/icons/trash/trash@2x.png'
export default function todo({title, array, removerTarefa}){
    
    return(
        <>
            <li class='container'>

                <label class='switch'>
                    <input type="checkbox" name="checkbox" class='checkbox' content="d"/>
                    <span class='text'>{title}</span>
                </label>
                <img src={Lixeira} alt="ExcluirTask" class='trash' onClick={ () => { let index = array.indexOf(title); removerTarefa(index ,array);  }  }/>

            </li>
        </>
    )
}