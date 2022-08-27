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

export const Content = styled.div`
    background: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25vw;
    height: 60vh;
    box-shadow: 1px 0px 5px #696969;
    >p{
        color: #696969;
        margin: 1rem 0 2rem 0;
        text-align: center;
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
        justify-content: center;
        margin-top: 3rem;
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