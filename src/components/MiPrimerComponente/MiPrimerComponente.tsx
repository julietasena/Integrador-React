import { FC } from "react"

interface IPropsMiPrimerComponente{
    text:String;
    color:String;
    fontSize?: number;
}

export const MiPrimerComponente : FC<IPropsMiPrimerComponente> = ({text, color, fontSize}) =>{
    return(
        <div style={{color: `${color}`, fontSize: `${fontSize}rem`}}> <p>{text}</p></div>
    )
}