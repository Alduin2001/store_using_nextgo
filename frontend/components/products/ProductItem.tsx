'use client'
import { ProductModel } from "@/interfaces/models/ProductI";
import { FC } from "react";
import { Card } from "../ui/card/Card";
import { CardHeader } from "../ui/card/CardHeader";
import { CardBody } from "../ui/card/CardBody";
import { SwiperComp } from "../swiper/SwiperComp";
import { CardFooter } from "../ui/card/CardFooter";
import { Button } from "@headlessui/react";
import { useUserStore } from "@/store/UserStore";
import { Row } from "../ui/grid/Row";
import { useProductStore } from "@/store/ProductStore";
import { DeleteProductModal } from "./DeleteModal";
import Link from "next/link";

export const ProductItem:FC<ProductModel> = ({id,name,description,images,price,category,count})=>{
    const {role,isAuth} = useUserStore();
    const {isOpenDelete,openDeleteModal} = useProductStore();
    
    return(
        <Card shadow="2xl" bordered className="pl-1 pr-1 rounded-xl">
            <CardHeader>{name}</CardHeader>
            <CardBody>
                <SwiperComp images={images}/>
                <p>Категория: {category.name}</p>
                <p>Цена: {price} руб.</p>
                <p>Описание:</p>
                <p>{description}</p>
                <p>Осталось {count}</p>
            </CardBody>
            <CardFooter>
                {
                    isAuth ?
                <Row min="100px" gap={2}>
                <Button className="p-2 text-xl transition bg-blue-500 hover:bg-blue-700 text-[#eee] rounded-md cursor-pointer">В корзину</Button>
                {
                    role==2 && (
                        <Button className="bg-red-600 transition hover:bg-red-700 cursor-pointer p-2 text-[#eee] rounded-md" onClick={()=>openDeleteModal(id)}>Удалить</Button>
                    )
                }
                </Row>
                :
                <Link href="/login" className="p-2 text-xl transition bg-blue-500 hover:bg-blue-700 text-[#eee] rounded-md cursor-pointer">В корзину</Link>
}
            </CardFooter>

            {isOpenDelete && <DeleteProductModal/>}
        </Card>
    )
}