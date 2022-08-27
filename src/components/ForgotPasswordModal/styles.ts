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
    width: 27vw;
    height: 55vh;
    box-shadow: 1px 0px 5px #696969;
    >img{
        margin-bottom: 5%;
        width: 50%;
        object-fit: contain;
    };

    >p{
        color: #696969;
        padding: 0 1rem;
        margin: 1rem 0;
    }

    >a{
        color: #2BA3E6;
        font-size: .95rem;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
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