import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

function GlobalContextProvider({children}){
    const [countTask, setCountTask] = useState(Number(localStorage.getItem("countTask")) || 0);
    const [todoList, setTodoList ] = useState(JSON.parse(localStorage.getItem("listTask")) ? JSON.parse(localStorage.getItem("listTask")) : []);
    const [countId, setCountId] = useState(Number(localStorage.getItem("countId")) || 1);
    // formato: {
    //     id: number
    //     name: string,
    //     isActive: boolean,
    // }

    //salvando no localStorage
    useEffect(() => {
        localStorage.setItem("listTask", JSON.stringify(todoList));
        localStorage.setItem("countId", countId);
        localStorage.setItem("countTask", countTask);
    }, [countId, todoList, countTask])

    //Ativando ou desativando o checkbox
    function toggleIsActive(id){
        setTodoList(todoList.map(e => {
            if(e.id === id){
                e.isActive = !e.isActive;
            }
            return e;
        }));
    }

    //deletando a tarefa
    function deleteTask(id){
        const element = todoList.find(e => e.id === id);
        const index = todoList.indexOf(element)
        todoList.splice(index, 1);
        setTodoList(todoList);
        localStorage.setItem("listTask", JSON.stringify(todoList));
    }
    return(
        <GlobalContext.Provider 
            value={{
                countTask, 
                setCountTask, 
                todoList, 
                setTodoList, 
                toggleIsActive, 
                deleteTask, 
                countId, 
                setCountId
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, GlobalContextProvider}