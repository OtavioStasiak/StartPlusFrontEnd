import { Input } from "../../components/Input";
import { Container, Content } from "./styles";

export function SignIn(){

    return(
        <Container>
            
            <Content>
                <img src="" alt="Start Plus Logo"/>
                <Input placeholder="Email" title="E-mail"/>
                <Input placeholder="Senha" title="Senha"/>
                <a>Esqueceu a senha</a>

                <button type="button">
                    Login
                </button>

                <span>Não tem uma conta? Crie agora! <a>Criar conta</a></span>
            </Content>

        </Container>
    )
}