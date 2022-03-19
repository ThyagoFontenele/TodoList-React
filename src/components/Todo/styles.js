import styled from "styled-components";


export const Container = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1rem;
    color: rgb(128, 127, 127);
    width: 100vw;
    margin-bottom: 10px;
    height: 40px;

    &:hover{
        transition: 400ms;
        background-color: #c4bebe6c;
    }

    div{
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        
        .nameContainer{
            width: 300px;
            span {
                font-size: 20px;
                color: ${props => props.active ? "rgb(11, 187, 11)" : ''};
                font-weight: 500;
                transition: all 400ms ease-in-out;
                position: relative;
            }
            span::before{
                content: '';
                position: absolute;
                transition: width 0.3s ease-in-out;
                width: ${props => props.active ? '100%' : '0%'};
                left: 0;
                top: 11px;
                height: 2px;
                background-color: rgb(11, 187, 11);
            }
        }
        img{
            width: 40px;
            cursor: pointer;
        }
    }
    @media (min-width: 900px){
        div{
            width: 600px;
            .nameContainer{
                width: 500px;
            }
        }
    }
    @media (max-width: 440px){
        div{
            width: 300px;
            .nameContainer{
                width: 200px;
            }
        }
    }
`;

export const Checkbox = styled.input`

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border: 1px solid rgb(158, 158, 158);
    border-radius: 4px;
    background-color: white;
    
    &::before{
        content: "";
        position: absolute;
        width: 6px;
        height: 12px;
        opacity: ${props => props.active ? "1" : '0'};
        transition: opacity 0.3s in;
        border-right: 3px solid;
        border-bottom:  3px solid;
        transform: rotate(45deg);
        color: rgb(11, 187, 11);
        top: 1px;
    }
    &:focus{
        box-shadow: 0 0 5px #000;
    }
`