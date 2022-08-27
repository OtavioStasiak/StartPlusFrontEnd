import { Button } from "./styles";

type Props = {
    title: string;
    onClick?: () => void;
};

export function SignInButton({title, onClick}: Props){
    return(
        <Button onClick={onClick} type="button">
            {title}
        </Button>
    )
}