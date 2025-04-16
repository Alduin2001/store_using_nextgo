'use client'
import { createCategorySchema } from "@/configs/validation/category-valid.shema";
import { CreateCategoryDto } from "@/interfaces/dto/category.dto";
import { useCategoryStore } from "@/store/CategoryStore";
import { Button, Field, Input, Label } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import {useForm} from 'react-hook-form'
import { toast } from "react-toastify";

export const AddCategory:FC = ()=>{
    const {addCategory} = useCategoryStore();
    const {register,handleSubmit,reset,formState:{errors}} = useForm<CreateCategoryDto>({
        resolver:yupResolver(createCategorySchema),
        mode:'all'
    })

    const submitForm = async (data:CreateCategoryDto)=>{
        await addCategory(data)
        .then(()=>{
            toast('Категория добавлена',{closeButton:true});
        })
        .catch((err)=>{
            toast('Не удалось добавить категорию')
        });
        reset();
    }

    return(
        <form onSubmit={handleSubmit(submitForm)}>
            <Field className="flex flex-col gap-2">
                <Label>Название:</Label>
                <Input type="text" {...register("name")} className="outline-none border-b-2 border-green-600"/>
                {errors.name?.message && (<p className="text-red-600 italic">*{errors.name.message}</p>)}
            </Field>
            <Button type="submit" className="p-2 mt-2 text-[#eee] bg-green-600 w-full cursor-pointer">Добавить</Button>
        </form>
    )
}