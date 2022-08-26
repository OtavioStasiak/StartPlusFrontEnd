import { Button } from "./styles";

type Props = {
    title: string;
}

export function SignInButton({title}: Props){
    return(
        <Button type="button">
            {title}
        </Button>
    )
}