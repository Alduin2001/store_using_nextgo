'use client'
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination } from "swiper/modules";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination'

interface SwiperImgs{
    images:{
        id:number
        image:string
    }[]
}

export const SwiperComp:FC<SwiperImgs> = ({images})=>{
    console.log(images);

    return(
        <Swiper className="w-full" modules={[Autoplay,Pagination]} pagination={{clickable:true}} spaceBetween={10} slidesPerView={1} autoplay={{delay:2000}}>
            {images.map((el,i)=><SwiperSlide key={i}><img src={`http://localhost:3005/${el.image}`} alt="Slider" className="h-[300px] min-w-[200px] w-full"/></SwiperSlide>)}
        </Swiper>
    )
}