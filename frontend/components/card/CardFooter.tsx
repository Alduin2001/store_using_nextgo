import { CardProps } from "@/interfaces/CardProps";
import { FC } from "react";


export const CardFooter:FC<CardProps> = ({children,className})=>{

    return(
        <div className={`w-full p-2 ${className}`}>
            {children}
        </div>
    )
}