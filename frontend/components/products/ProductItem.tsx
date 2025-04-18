import { ProductModel } from "@/interfaces/models/ProductI";
import { FC } from "react";
import { Card } from "../ui/card/Card";
import { CardHeader } from "../ui/card/CardHeader";
import { CardBody } from "../ui/card/CardBody";
import { SwiperComp } from "../swiper/SwiperComp";
import { CardFooter } from "../ui/card/CardFooter";
import { Button } from "@headlessui/react";
import { useModalStore } from "@/store/ModalStore";
import { useUserStore } from "@/store/UserStore";
import { Row } from "../ui/grid/Row";


export const ProductItem:FC<ProductModel> = ({id,name,description,images,price,category,count})=>{
    const {open} = useModalStore();
    const {role} = useUserStore();
    return(
        <Card>
            <CardHeader>{name}</CardHeader>
            <CardBody>
                <SwiperComp images={images}/>
                <p>Цена: {price}</p>
                <p>Описание:</p>
                <p>{description}</p>
            </CardBody>
            <CardFooter>
                <Row min="100px" gap={2}>
                <Button className="p-2 text-xl transition bg-green-500 hover:bg-green-700 text-[#eee] rounded-md cursor-pointer">Заказать</Button>
                {
                    role==2 && (
                        <Button className="bg-red-600 transition hover:bg-red-700 cursor-pointer p-2 text-[#eee] rounded-md">Удалить</Button>
                    )
                }
                </Row>
            </CardFooter>
        </Card>
    )
}