import React, { useState, useContext, useEffect } from 'react'

import classes from './HomePage.module.css'
import Todo from '../components/Todo/Todo.js'

import { GlobalContext } from '../context/GlobalContext';


export default function HomePage() {
    const [nomeTask, setNome ] = useState('');

    const {setCountTask, todoList, setTodoList, countId, setCountId} = useContext(GlobalContext);
    
  
    function adicionarTarefa(e){
        e.preventDefault();
        if(nomeTask.length > 2){
            setCountId(state => state + 1);
            setCountTask(state => state + 1);
            setTodoList([...todoList, 
                { 
                    id: countId,
                    name: nomeTask,
                    isActive: false
                }
            ]);
            setNome('');
        }
    }
    return (
        <>

            <div className={classes.container}>
                
                <form className={classes.form}>
                    <input className={classes.input} value={nomeTask} type="text" placeholder="Adicionar nova tarefa..." onChange={ e => { setNome(e.target.value) }}/>
                    <button className={classes.button} onClick={(e) => adicionarTarefa(e) }> + </button>
                </form>

                <div className={classes.tarefas}>

                    <ul>
                        {todoList.map((element, key) => (
                            <Todo key={key} element={element} />
                        ))}
                    </ul>
                    
                </div>
            </div>
        </>
    )
    
}
