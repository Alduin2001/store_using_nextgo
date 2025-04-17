'use client'
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import Image from "next/image";

interface SwiperImgs{
    images:{
        id:number
        image:string
    }[]
}

export const SwiperComp:FC<SwiperImgs> = ({images})=>{
    console.log(images);

    return(
        <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={1} autoplay={{delay:2000}}>
            {images.map((el,i)=><SwiperSlide key={i}><img src={`http://localhost:3005/${el.image}`} alt="Slider" className="h-[100px] min-w-[200px]"/></SwiperSlide>)}
        </Swiper>
    )
}