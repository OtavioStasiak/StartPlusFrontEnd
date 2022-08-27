import { Input } from "../../components/Input";
import logoImg from '../../assets/Frame.png';
import { Container, Content } from "./styles";
import { SignInButton } from "../../components/SignInButton";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export function RecoverPassword(){

    const [recoverPassword, setRecoverPassword] = useState(false);
    const [openEmailModal, setOpenEmailModal] = useState(false);
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Start Plus Logo"/>
                <h2>Resetar Senha</h2>
                <p>Sua nova senha <strong>precisa</strong> ser diferente das senhas utilizadas anteriormente.</p>
                <Input placeholder="Nova Senha" title="Nova Senha"/>
                <Input placeholder="Confirme a nova Senha" title="Confirme a Nova Senha"/>
                
                <SignInButton title="ALTERAR SENHA" onClick={() => setOpenEmailModal(true)} />     
                <a ><AiOutlineLeft style={{marginRight: 2}} /> Voltar Para Login</a>

            </Content>
        </Container>
    )
}