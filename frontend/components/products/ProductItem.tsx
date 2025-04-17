import { ProductModel } from "@/interfaces/models/ProductI";
import { FC } from "react";
import { Card } from "../ui/card/Card";
import { CardHeader } from "../ui/card/CardHeader";
import { CardBody } from "../ui/card/CardBody";
import { SwiperComp } from "../swiper/SwiperComp";
import { CardFooter } from "../ui/card/CardFooter";
import { Button } from "@headlessui/react";


export const ProductItem:FC<ProductModel> = ({id,name,description,images,price,category,count})=>{

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
                <Button className="p-2 text-xl bg-green-500 text-[#eee] rounded-md cursor-pointer">Заказать</Button>
            </CardFooter>
        </Card>
    )
}