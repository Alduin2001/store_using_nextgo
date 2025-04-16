import { ChildrenProps } from "@/interfaces/components/ChildrenProps";
import { FC } from "react";


export const Container:FC<ChildrenProps> = ({children,className})=>{

    return(
        <div className={`w-4/5 mx-auto ${className && className}`}>
            {children}
        </div>
    )
}