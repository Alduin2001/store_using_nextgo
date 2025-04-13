import { CardProps } from "@/interfaces/CardProps";
import { FC } from "react";


export const Card:FC<CardProps> = ({width,children,bordered,className,dashed,shadow})=>{
    return(
        <div className={`w-${width} ${className || ""} ${bordered && 'border-2' || ""} ${dashed && 'border border-dashed' || ""} ${shadow && `shadow-${shadow}` || ""}`}>
            {children}
        </div>
    )
}