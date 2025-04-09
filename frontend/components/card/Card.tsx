import { CardProps } from "@/interfaces/CardProps";
import { FC } from "react";


export const Card:FC<CardProps> = ({children,bordered,className,dashed,shadow})=>{
    return(
        <div className={`w-full ${className || ""} ${bordered && 'border-2' || ""} ${dashed && 'border border-dashed' || ""} ${shadow && `shadow-${shadow}` || ""}`}>
            {children}
        </div>
    )
}