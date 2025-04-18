import { ChildrenProps } from "./ChildrenProps";

export interface CardProps extends ChildrenProps{
    bordered?:boolean
    dashed?:boolean
    shadow?:'2xs' | '2xl'
    width?:'full' | '1/12' | '1/6' | '4/5'
}