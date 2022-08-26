type Props = {
    title: string;
    placeholder: string;
}

export function Input({title, placeholder}: Props){
    return(
        <div>
            <label>{title}</label>
            <input placeholder={placeholder} type="input" /> 
        </div>
    )
}