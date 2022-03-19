import React from "react";
import classes from './Header.module.css'

import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from 'react';

export default function Header() {

    const {countTask} = useContext(GlobalContext);
    const wordTarefa = countTask === 1 ? 'tarefa' : 'tarefas';
    
    return (
        <>
            <p>Created by Thyago Fontenele</p>
            <header>
                
                <h1 className={classes.todo}>To.do</h1>
                <h2 className={classes.tarefas}><b>Você tem </b>{countTask} {wordTarefa}</h2>
                
            </header>
        </>
    )
}