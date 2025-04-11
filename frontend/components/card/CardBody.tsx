import { CardProps } from "@/interfaces/CardProps";
import { FC } from "react";


export const CardBody:FC<CardProps> = ({children,className})=>{

    return(
        <div className={`w-full p-2 border-b-2 ${className}`}>
            {children}
        </div>
    )
}