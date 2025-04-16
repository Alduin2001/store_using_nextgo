import { ChildrenProps } from "./ChildrenProps";


export interface ModalProps extends ChildrenProps{
    title:string
    text:string
    submitFunc?:void
    submit?:boolean
    close?:boolean
}