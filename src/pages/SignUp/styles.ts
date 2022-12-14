import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    background: #fff;
`;

export const InputDiv = styled.div`
    width: 100%;
    height: 6vh;
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

export const InputDivII = styled.div`
    width: 100%;
    height: 6vh;
    border-color: #c4c4c4;
    display: flex;
    flex-direction: column;
    padding-left: 7.5%;
    margin-bottom: 7%;
    >div{
        width: 90%;

        >input{
            height: 5vh;
            border: 1px solid #c4c4c4;
            border-radius: 5px;
            padding-left: 5px;
        }
    }

    >label{
        font-size: .9rem;
        color: #c4c4c4;
        margin-left: 1px;
        margin-bottom: .3rem;
        width: 90%;
    }
`

export const Content = styled.div`
    background: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25vw;
    height: 95vh;
    box-shadow: 1px 0px 5px #696969;

    >div{
        height: 60%;
        width: 100%;
        align-items: center;
        overflow-y: scroll;
        padding: 1rem 0;

    }
    >img{
        margin-bottom: 5%;
        width: 50%;
        object-fit: contain;
    };

    >a{
        color: #2BA3E6;
        font-size: .9rem;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-right: 8%;
        margin-top: -1rem;
        margin-bottom: 1rem;
        &:hover{
            cursor: pointer;
        };
    };

    >span{
        color: #696969;
        font-size: .9rem;
        margin-top: 10%;
        >a{
            color: #2BA3E6;

            &:hover{
                cursor: pointer;
            };
        };
    };

    >label{
        font-size: .9rem;
        color: #c4c4c4;
        padding-left: 1.1rem;
        margin-bottom: .3rem;
        width: 90%;
    }
`

export const CheckBox = styled.div`
    display: flex;
    width: 100%;
    padding-left: 7.5%;
    align-items: center;
    margin-bottom: 20%;

    >input{
        width: 15px;
        height: 15px;
        
    };

    >label{
        color: #c8c8c8;
        font-size: .8rem;
        margin-left: .5rem;
    };
`