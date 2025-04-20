import { FC } from "react";
import { Card } from "../ui/card/Card";
import { CardHeader } from "../ui/card/CardHeader";
import { CategoryModel } from "@/interfaces/models/CategoryI";
import { CardBody } from "../ui/card/CardBody";
import { Button } from "@headlessui/react";
import { useCategoryStore } from "@/store/CategoryStore";
import { DeleteModalCategory } from "./DeleteModalCategory";
import { EditModalCategory } from "./EditModalCategory";


export const CategoryProps:FC<CategoryModel> = ({id,name})=>{
    const {isOpenDelete,selectedId,openDelete,isOpenEdit,openEdit} = useCategoryStore();
    return(
        <Card shadow="2xl" className="p-2">
            <CardHeader>{name}</CardHeader>
            <CardBody className="flex gap-2 flex-wrap">
                <Button className="p-2 text-xl cursor-pointer text-[#eee] bg-blue-600 rounded-md" onClick={()=>openEdit(id)}>Редактировать</Button>
                <Button className="p-2 text-xl cursor-pointer text-[#eee] bg-red-600 rounded-md" onClick={()=>openDelete(id)}>Удалить</Button>
            </CardBody>
            {isOpenDelete && <DeleteModalCategory/>}
            {isOpenEdit && selectedId===id && <EditModalCategory initialName={name}/>}
        </Card>
    )
}