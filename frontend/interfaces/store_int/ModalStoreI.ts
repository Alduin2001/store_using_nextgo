import { CreateCategoryDto } from "../dto/category.dto"

type ModalType = 'delete' | 'edit' | 'info'

export interface ModalStoreI{
    isOpen:boolean
    type:ModalType | null
    data:{
        title?:string
        body?:string
        dataUpdate?:CreateCategoryDto
        submitFunc?:()=>Promise<any>
        cancelText?:string
        submitText?:string
    }
    open:(type:ModalType,data?:ModalStoreI['data'])=>void
    close:()=>void
}