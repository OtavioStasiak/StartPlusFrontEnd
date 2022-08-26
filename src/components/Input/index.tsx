import { Container, TextInput } from "./styles";

type Props = {
    title: string;
    placeholder: string;
}

export function Input({title, placeholder}: Props){
    return(
        <Container>
            <label>{title}</label>
            <TextInput placeholder={placeholder} type="input" /> 
        </Container>
    )
}