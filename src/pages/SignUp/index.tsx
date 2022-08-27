import { Input } from "../../components/Input";
import logoImg from '../../assets/Frame.png';
import {  Container, Content } from "./styles";
import { SignInButton } from "../../components/SignInButton";
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { ForgotPasswordModal } from '../../components/ForgotPasswordModal';
import { EmailCodeModal } from "../../components/EmailCodeModal";
import { Button, Input as ChakraInput, InputGroup, InputRightElement } from '@chakra-ui/react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export function SignUp(){
    const [value, setValue] = useState('');
    const [secondStage, setSecondStage] = useState(false);
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Start Plus Logo"/>
                <h2>Dê Start nas criptos</h2>
                <p>Cadastre-se para ter acessos!</p>
                <div>
                <Input placeholder="Nome Completo" title="Nome Completo"/>
                <Input placeholder="Username" title="Username"/>
                <Input placeholder="E-mail" title="E-mail" />
                <Input placeholder="Convite" title="Convite" />
                <PhoneInput
                 style={{width: '80%', height: '15%', }}
                 defaultCountry="BR"
                 placeholder="Enter phone number"
                 value={value}
                 onChange={(value) => {if(value !== undefined){setValue(value)}}}
                />
                    <label>Senha</label>
                    <InputGroup width={'82%'} height={'8.5%'} borderColor={'#c8c8c8'}>
                        <ChakraInput
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Senha'
                        />
                        <InputRightElement width='3.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {!show ? <AiFillEye style={{fontSize: 20}} /> : <AiFillEyeInvisible style={{fontSize: 20}}/>}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <label>Confirmar Senha</label>
                    <InputGroup width={'80%'} borderColor={'#c8c8c8'}>
                        <ChakraInput
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Confirme sua Senha'
                        />
                        <InputRightElement width='3.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {!show ? <AiFillEye style={{fontSize: 20}} /> : <AiFillEyeInvisible style={{fontSize: 20}}/>}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
                <SignInButton title="CADASTRE-SE" onClick={() => setSecondStage(true)} />     
    
                    <span>Já tem conta?<a> Fazer login</a></span>
            </Content>
        </Container>
    )
}