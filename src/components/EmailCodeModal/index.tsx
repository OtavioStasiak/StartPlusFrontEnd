import Modal from "react-modal";
import logoImg from '../../assets/Frame.png';
import { Input } from "../Input";
import { SignInButton } from "../SignInButton";
import { Content } from "./styles";
import {AiOutlineLeft} from 'react-icons/ai';
import { useState } from "react";
import ReactCodeInput from "react-code-input";

type Props = {
    isOpen: boolean;
    onRequestClose: () => void;
};

export function EmailCodeModal({isOpen, onRequestClose}: Props){
    const [code, setCode] = useState('');
    

    return(
        <Modal 
         overlayClassName="react-modal-overlay" 
         className="react-modal-content" 
         onRequestClose={() => {onRequestClose()}} 
         isOpen={isOpen}
        >
            <Content>
                <img src={logoImg} alt="Start Plus Logo"/>
                
                     <h2>Verificação!</h2>
                     <p>Enviamos para seu e-mail um código de verificação para autenticarmos sua conta, para garantir sua segurança.</p>
                     <ReactCodeInput value={code} onChange={(value) => setCode(value)} name="input" inputMode="numeric" fields={6}  style={{marginBottom: 20}}/>

                     <SignInButton title="VERIFICAR" />
                     <a>Reenviar Código</a>
            </Content>
        </Modal>
    )
}