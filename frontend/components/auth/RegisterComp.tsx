'use client'
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterSchema } from "@/configs/validation/user-valid.schema";
import { Button, Field, Input, Label } from "@headlessui/react";
import { Row } from "../grid/Row";
import { CreateUserDto } from "@/interfaces/dto/user.dto";
import { useUserStore } from "@/store/UserStore";

export const RegisterComp:FC = ()=>{
    const {registerUser} = useUserStore();
    const {register,handleSubmit,reset,formState:{errors}} = useForm<CreateUserDto>({
        resolver:yupResolver(userRegisterSchema),
        mode:'all'
    })
    const submitForm = async (data:CreateUserDto)=>{
        await registerUser(data);
    }
    return(
        <form className="w-full" onSubmit={handleSubmit(submitForm)}>
            <Field className="flex flex-col gap-2">
                <Label>Имя</Label>
                <Input placeholder="Введите имя" {...register('name')} className="outline-none border-b-2 border-purple-400 w-full"/>
                {errors.name?.message && (<p className="text-red-500 italic">*{errors.name.message}</p>)}
            </Field>
            <Field className="flex flex-col gap-2">
                <Label>Фамилия</Label>
                <Input placeholder="Введите фамилия" {...register('surname')} className="outline-none border-b-2 border-purple-400 w-full"/>
                {errors.surname?.message && (<p className="text-red-500 italic">*{errors.surname.message}</p>)}
            </Field>
            <Field className="flex flex-col gap-2">
                <Label>Почта</Label>
                <Input placeholder="Введите почту" {...register('email')} className="outline-none border-b-2 border-purple-400 w-full"/>
                {errors.email?.message && (<p className="text-red-500 italic">*{errors.email.message}</p>)}
            </Field>
            <Field className="flex flex-col gap-2">
                <Label>Пароль</Label>
                <Input placeholder="Введите пароль" type="password" {...register('password')} className="outline-none border-b-2 border-purple-400 w-full"/>
                {errors.password?.message && (<p className="text-red-500 italic">*{errors.password.message}</p>)}
            </Field>
            <Row min="100px" gap={2} className="text-[#eee] mt-2">
                <Button className="w-full bg-green-500 p-2 rounded cursor-pointer" type="submit">Зарегистрироваться</Button>
                <Button className="w-full bg-red-500 p-2 rounded cursor-pointer" onClick={()=>reset()}>Очистить</Button>
            </Row>
        </form>
    )
}