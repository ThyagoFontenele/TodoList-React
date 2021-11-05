import React from "react";
import classes from './Header.module.css'
export default function Header({count}) {

    const wordTarefa = count === 1 ? 'tarefa' : 'tarefas';

    return (
        <>
            <header>
                <p>Created by Thyago Fontenele</p>
                
                <div className={classes.section}>

                    <h1 className={classes.todo}>to.do.list</h1>
                    <h2 className={classes.tarefas}><b>Você tem </b>{count} {wordTarefa}</h2>

                </div>
                
               
            </header>
        </>
    )
}