import React, { useContext } from 'react'

import Lixeira from '../../assets/icons/trash/trash@2x.png';
import { GlobalContext} from '../../context/GlobalContext';
import { Checkbox, Container } from './styles';


export default function Todo({element}){

    const {deleteTask, setCountTask, toggleIsActive } = useContext(GlobalContext);

    return(
            <Container active={element.isActive}>
                <div>
                    <Checkbox
                        type="checkbox" 
                        defaultChecked={false}
                        active={element.isActive}
                        onClick={() => {
                            toggleIsActive(element.id);
                        }}
                    />
                    <div className="nameContainer"><span title={element.name}>{element.name}</span></div>
                    
                    <img src={Lixeira} alt="ExcluirTask" onClick={ () => { 
                        setCountTask(state => state-1);
                        deleteTask(element.id);
                    }}/>
                </div>
            </Container>
    )
}