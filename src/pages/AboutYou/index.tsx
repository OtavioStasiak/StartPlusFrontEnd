import { Input } from "../../components/Input";
import logoImg from '../../assets/Frame.png';
import { SignInButton } from "../../components/SignInButton";
import {  Container, Content, InputDiv } from "./styles";
import { Select } from '@chakra-ui/react'

export function AboutYou(){
    return(
        <Container>
            
        <Content>
            <img src={logoImg} alt="Start Plus Logo"/>
            <h2>Dê Start nas criptos</h2>
            <p>Cadastre-se para ter acessos!</p>    
            <div>

            <Input placeholder="CPF" title="CPF"/>
            <Input placeholder="RG" title="RG"/>

            <label>Gênero</label>
            <InputDiv>
                <Select width={'90%'}>
                    <option value='Masculino'>Masculino</option>
                    <option value='Feminino '>Feminino</option>
                </Select>
            </InputDiv>

            <label>Estado Civil</label>
            <InputDiv>
                <Select width={'90%'}>
                    <option value='Solteiro'>Solteiro(a)</option>
                    <option value='Casado'>Casado(a)</option>
                    <option value='Divorciado'>Divorciado(a)</option>
                    <option value='Viúvo'>Viúvo(a)</option>
                </Select>
            </InputDiv>

            <label>Cor da pele</label>
            <InputDiv>
                <Select width={'90%'}>
                    <option value='Branca'>Branca</option>
                    <option value='Parda'>Parda</option>
                    <option value='Negra'>Negra</option>
                    <option value='Outros'>Outros</option>
                </Select>
            </InputDiv>

            <label>Escolaridade</label> 
            <InputDiv>
                <Select width={'90%'}>
                    <option value='Ensino Fundamental'>Ensino Fundamental</option>
                    <option value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
                    <option value='Ensino Médio Completo'>Ensino Médio Completo</option>
                    <option value='Superior Incompleto'>Superior Incompleto</option>
                    <option value='Superior Completo'>Superior completo</option>
                </Select>
            </InputDiv>
            </div>

            <SignInButton title="PROSSEGUIR" onClick={() => {}} />
            <span>Já tem conta?<a> Fazer login</a></span>

        </Content>
    </Container>
    )
}