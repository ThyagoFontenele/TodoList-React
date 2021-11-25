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
    
    function adicionarTarefa(data){
        
        if(data.nome){
            setCount(count+1);
            const input = document.getElementById('input');
            input.value = '';
            setNome('');
            setComponent([...todoComponent, nomeTask])
        }
    }

    function removerTarefa(index, array){
        let newArray = array;
        newArray[index] = '';
        newArray.splice(index, 1);

        setComponent([...newArray])
        setCount(count-1);
    }
   
    return (
        <>

            <div className={classes.container}>
                <Header count={count}/>
                
                <form className={classes.form}>
                    <br />
                    <input className={classes.input} type="text" id="input" placeholder="Adicionar nova tarefa..." onChange={ e => { setNome(e.target.value) }}/>
                    <button className={classes.button} onClick={(e) => {e.preventDefault(); adicionarTarefa(data) }}> + </button>
                </form>

                <div className={classes.tarefas}>

                    <ul>
                        {todoComponent.map(element => (
                            <Todo title={element} array={todoComponent} removerTarefa={removerTarefa} />
                        ))}
                    </ul>
                    
                </div>
            </div>
        </>
    )
    
}
