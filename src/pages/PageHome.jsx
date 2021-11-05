import React, { useState } from 'react'
import Header from '../components/Header/Header'
import classes from './PageHome.module.css'
import Todo from '../components/Todo/todo'
import ReactDOM from 'react-dom';

export default function PageHome() {

    const [count, setCount ] = useState(0);

    const [nomeTask, setNome ] = useState('');

    const data = {
        nome: nomeTask,
    }

    function increment() { setCount(count+1) }

    function todo() { return <Todo/>}
    
    function AdicionarTarefa(data){
        
        if(data.nome){
            increment();

            const rootElement = React.createElement(todo());
            const list = document.getElementById('list');

            ReactDOM.render(rootElement, list)

            const input = document.getElementById('input');
            input.value = '';
            setNome('');
        }
    }
    
   
    return (
        <>

            <div className={classes.container}>
                <Header count={count}/>
                
                <form className={classes.form}>
                    <br />
                    <input type="text" id="input" placeholder="Adicionar novo todo..." onChange={ e => { setNome(e.target.value) }}/>
                    <button onClick={(e) => {e.preventDefault(); AdicionarTarefa(data) }}> + </button>
                </form>

                <div className={classes.tarefas}>
                    <ul id="list">
                        
                    </ul>
                </div>
            </div>
        </>
    )
}