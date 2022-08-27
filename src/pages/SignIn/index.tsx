import { Input } from "../../components/Input";
import logoImg from '../../assets/Frame.png';
import { CheckBox, Container, Content } from "./styles";
import { SignInButton } from "../../components/SignInButton";
import { useState } from "react";
import { ForgotPasswordModal } from '../../components/ForgotPasswordModal';
import { EmailCodeModal } from "../../components/EmailCodeModal";

export function SignIn(){

    const [recoverPassword, setRecoverPassword] = useState(false);
    const [openEmailModal, setOpenEmailModal] = useState(false);

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Start Plus Logo"/>

                <Input placeholder="Email" title="E-mail"/>
                <Input placeholder="Senha" title="Senha"/>

                <a onClick={() => setRecoverPassword(true)}>Esqueceu a senha</a>
                <ForgotPasswordModal onRequestClose={() => setRecoverPassword(false)} isOpen={recoverPassword} />

                <CheckBox>
                    <input type="checkbox" />
                    <label>Mantenha-me Conectado</label>
                </CheckBox>
                
                <SignInButton title="Login" onClick={() => setOpenEmailModal(true)} />     
                <EmailCodeModal onRequestClose={() => setOpenEmailModal(false)} isOpen={openEmailModal}/>
 
                <span>Não tem uma conta?<a> Crie agora!</a></span>
            </Content>
        </Container>
    )
}