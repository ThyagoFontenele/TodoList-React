import React, { useState } from 'react'
import Header from '../components/Header/Header'
import classes from './PageHome.module.css'
import Todo from '../components/Todo/todo'


export default function PageHome() {

    const [count, setCount ] = useState(0);

    const [nomeTask, setNome ] = useState('');
    const [todoComponent, setComponent ] = useState([])

    const data = {
        nome: nomeTask,
    }

    function increment() { setCount(count+1) }

    
    function AdicionarTarefa(data){
        
        if(data.nome){
            increment();
            const input = document.getElementById('input');
            input.value = '';
            setNome('');
            setComponent([...todoComponent, nomeTask])
        }
    }
    
   
    return (
        <>

            <div className={classes.container}>
                <Header count={count}/>
                
                <form className={classes.form}>
                    <br />
                    <input className={classes.input} type="text" id="input" placeholder="Adicionar novo todo..." onChange={ e => { setNome(e.target.value) }}/>
                    <button className={classes.button} onClick={(e) => {e.preventDefault(); AdicionarTarefa(data) }}> + </button>
                </form>

                <div className={classes.tarefas}>

                    <ul>
                        {todoComponent.map(element => (
                            <Todo title={element}/>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}