import { FC } from "react";
import { Card } from "../ui/card/Card";
import { CardHeader } from "../ui/card/CardHeader";
import { CategoryModel } from "@/interfaces/models/CategoryI";
import { CardBody } from "../ui/card/CardBody";
import { Button } from "@headlessui/react";
import { useModalStore } from "@/store/ModalStore";
import { ModalUI } from "../ui/modal/ModalUI";
import { date } from "yup";


export const CategoryProps:FC<CategoryModel> = ({id,name})=>{
    console.log(id);
    const {open} = useModalStore();
    const handleOpenDelete = ()=>{
        open('delete',{title:'Подтверждение удаления',body:'Вы действительно хотите удалить'})
    }
    return(
        <Card shadow="2xl" className="p-2">
            <CardHeader>{name}</CardHeader>
            <CardBody className="flex gap-2 flex-wrap">
                <Button className="p-2 text-xl cursor-pointer text-[#eee] bg-blue-600 rounded-md">Редактировать</Button>
                <Button className="p-2 text-xl cursor-pointer text-[#eee] bg-red-600 rounded-md" onClick={handleOpenDelete}>Удалить</Button>
            </CardBody>
        </Card>
    )
}