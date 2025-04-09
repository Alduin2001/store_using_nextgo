import { ChildrenProps } from "./ChildrenProps"


export interface TypoGraphyProps extends ChildrenProps{
    Tag:'h1' | 'h2' | 'h3' | 'h4' | 'p'
    position:'center' | 'left' | 'right'
    size:'xs' | 'xl' | '2xl'
    bold?:boolean
    italic?:boolean
}