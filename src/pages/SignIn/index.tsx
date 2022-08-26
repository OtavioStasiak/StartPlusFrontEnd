import { Input } from "../../components/Input";
import logoImg from '../../assets/Frame.png';
import { CheckBox, Container, Content } from "./styles";
import { SignInButton } from "../../components/SignInButton";

export function SignIn(){

    return(
        <Container>
            
            <Content>
                <img src={logoImg} alt="Start Plus Logo"/>
                <Input placeholder="Email" title="E-mail"/>
                <Input placeholder="Senha" title="Senha"/>
                <a>Esqueceu a senha</a>


                <CheckBox>
                    <input type="checkbox" />
                    <label>Mantenha-me Conectado</label>
                </CheckBox>
                <SignInButton title="Login" />
                
 
                <span>Não tem uma conta?<a> Crie agora!</a></span>
            </Content>

        </Container>
    )
}