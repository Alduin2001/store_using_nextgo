'use client'
import { Button, Field, Input, Label, Select, Textarea } from "@headlessui/react";
import { FC, useCallback, useState } from "react";
import { Row } from "../ui/grid/Row";
import { useDropzone } from "react-dropzone";
import { Card } from "../ui/card/Card";
import { CardBody } from "../ui/card/CardBody";
import Image from "next/image";
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { productValidSchema } from "@/configs/validation/product-valid.schema";
import { CreateProductDto } from "@/interfaces/dto/product.dto";

export const AddProduct: FC = () => {
    const [filesDrop, setFilesDrop] = useState([]);
    const {register,handleSubmit,reset,formState:{errors}} = useForm({
        resolver:yupResolver(productValidSchema),
        mode:'all'
    })
    const onDrop = useCallback((accepted: any) => {
        setFilesDrop(accepted);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': []
        },
        maxFiles: 5
    });

    const deleteFileDrop = (id:any)=>{
        setFilesDrop(state=>state.filter((_,i)=>i!=id))
    }

    const submitForm = async (data:CreateProductDto)=>{
        console.log(data);
        let formData = new FormData();
        filesDrop.forEach(el=>{
            formData.append('images',el);
        });
        formData.append('categoryId',data.categoryId.toString());
        formData.append('name',data.name);
        formData.append('description',data.description);
        formData.append('price',data.price.toString());
        formData.append('count',data.count.toString());
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submitForm)} className="w-full p-2 shadow-2xl mt-5" encType="multipart/form-data">
            <Field className="my-2">
                <Select className="w-full p-2 shadow rounded-md" {...register('categoryId')}>
                    <option disabled>Выберите категорию</option>
                    <option value={1}>Ноутбуки</option>
                    <option value={1}>Планшеты</option>
                </Select>
                {errors.categoryId?.message && (<p className="text-red-600 italic">*{errors.categoryId.message}</p>)}
            </Field>
            <Field className="flex flex-col gap-2">
                <Label>Название товара</Label>
                <Input {...register('name')} className="outline-none border-b-2 border-green-600" type="text" />
                {errors.name?.message && (<p className="text-red-600 italic">*{errors.name?.message}</p>)}
            </Field>
            <Field className="flex flex-col gap-2">
                <Label>Описание товара</Label>
                <Textarea className="outline-none border-2 border-green-600" {...register('description')}/>
                {errors.description?.message && (<p className="text-red-600 italic">*{errors.description?.message}</p>)}
            </Field>
            <Field className="flex flex-col gap-2">
                <Label>Цена товара</Label>
                <Input {...register('price')} className="outline-none border-b-2 border-green-600" type="number" />
                {errors.price?.message && (<p className="text-red-600 italic">{errors.price.message}</p>)}
            </Field>
            <Field className="flex flex-col gap-2">
                <Label>Количество товара</Label>
                <Input {...register('count')} className="outline-none border-b-2 border-green-600" type="number" />
                {errors.count?.message && (<p className="text-red-600 italic">*{errors.count.message}</p>)}
            </Field>
            
            {
                filesDrop.length > 0 ?
                <div className="flex flex-wrap gap-2">
                    {filesDrop.map((el,i) => (
                        <Card key={i}>
                            <CardBody className="relative">
                                <Image src={URL.createObjectURL(el)} width="200" height="100" alt="Drop"/>
                                <Button onClick={()=>deleteFileDrop(i)} className="absolute z-10 right-1 top-1 mt-2 text-[#eee] cursor-pointer p-2 bg-red-600 rounded-md">X</Button>
                            </CardBody>
                        </Card>
                    ))}
                </div>
                :
                <div {...getRootProps()} className={`w-full text-center p-5 mt-5 border-2 cursor-pointer italic ${isDragActive ? 'border-dashed' : 'border-solid'}`}>
                <input {...getInputProps()} />
                {
                    isDragActive ? (<p>Сбросьте</p>) : (<p>Перетащите до 5 файлов</p>)
                }
            </div>
            }

            <Row min="100px" gap={2} className="mt-5">
                <Button type="submit" className="p-2 text-[#eee] bg-green-600 rounded-md">Добавить</Button>
                <Button className="p-2 text-[#eee] bg-red-600 rounded-md">Очистить</Button>
            </Row>
        </form>
    )
}