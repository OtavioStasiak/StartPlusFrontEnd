import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --background: #001B2B;
        --light-blue: #49E9FF;
        --second-blue: #27546D;
        --blue: #00446A;
        --text: #80AB9E;
        --white: #ffffff;
        --light-gray: #9A9A9A;
        --second-blue: rgb(39, 86, 113, 0.91);
        --overlay: rgb(129, 146, 143, 0.05);
    };

    &::-webkit-scrollbar {
        width: 6px;
    };

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 8px;
        margin-top: 8px;
        margin-bottom: 10px;
        margin-left: 10px;
    };

    &::-webkit-scrollbar-thumb{
        background: #27546D;
        width: 5px;
        height: 10px !important;
        border-radius: 5px;
    };

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html {
        
        @media(max-width: 1910px) {
            font-size: 90%;
        };
        @media(max-width: 1530px) {
            font-size: 80%;
        };
      
    };

    body {
        background-color: #FFFFFF;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    };

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #FFFFFF;
    };

    h1, h3, h4 ,h5, h6, strong {
        font-weight: 600;
    };

    h2 {
        color: #696969;
        font-size: 1.5rem;
    };

    button {
        cursor: pointer;
    };
    
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    };

    .react-modal-overlay{
        background: rgba(0,0,0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ease-in-out .2s;
    };
    .react-modal-content{
        
    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }
`