import { CardProps } from "@/interfaces/CardProps";
import { FC } from "react";


export const CardHeader:FC<CardProps> = ({children,className})=>{

    return(
        <div className={`w-full p-2 ${className} border-b-2`}>
            {children}
        </div>
    )

}