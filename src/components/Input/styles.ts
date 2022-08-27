import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 8vh;
    border-color: #c4c4c4;
    display: flex;
    flex-direction: column;
    padding-left: 7.5%;
    margin-bottom: 5%;
    >label{
        font-size: .9rem;
        color: #c4c4c4;
        margin-left: 1px;
        margin-bottom: .3rem;
        width: 90%;
    }
`

export const TextInput = styled.input`
    width: 90%;
    color: #000;
    height: 85%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding-left: 1rem;

`