import React, { useState } from 'react'
import Header from '../components/Header/Header'
import classes from './HomePage.module.css'
import Todo from '../components/Todo/Todo.js'


export default function HomePage() {

    const [count, setCount ] = useState(0);

    const [nomeTask, setNome ] = useState('');
    const [todoComponent, setComponent ] = useState([])

    const data = {
        nome: nomeTask,
    }
    
    function removeCount(){
        setCount(count-1);
    }
    function adicionarTarefa(data){
        
        if(data.nome){
            setCount(count+1);
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
                    <input className={classes.input} type="text" id="input" placeholder="Adicionar nova tarefa..." onChange={ e => { setNome(e.target.value) }}/>
                    <button className={classes.button} onClick={(e) => {e.preventDefault(); adicionarTarefa(data) }}> + </button>
                </form>

                <div className={classes.tarefas}>

                    <ul>
                        {todoComponent.map((element, key) => (
                            <Todo key={key} title={element} removeCount={removeCount} />
                        ))}
                    </ul>
                    
                </div>
            </div>
        </>
    )
    
}
