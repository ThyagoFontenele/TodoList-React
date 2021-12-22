import React from "react";
import classes from './Header.module.css'

export default function Header({count}) {

    const wordTarefa = count === 1 ? 'tarefa' : 'tarefas';
    
    return (
        <>
            <p>Created by Thyago Fontenele</p>
            <header>
                
                <h1 className={classes.todo}>To.do</h1>
                <h2 className={classes.tarefas}><b>Você tem </b>{count} {wordTarefa}</h2>
                
            </header>
        </>
    )
}