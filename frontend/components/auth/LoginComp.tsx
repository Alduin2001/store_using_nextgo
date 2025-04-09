'use client'
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "@/configs/validation/user-valid.schema";
import { Button, Field, Input, Label } from "@headlessui/react";
import { Row } from "../grid/Row";
import { LoginUserDto } from "@/interfaces/dto/user.dto";
import { useUserStore } from "@/store/UserStore";

export const LoginComp:FC = ()=>{
    const {loginUser} = useUserStore();
    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm<LoginUserDto>({
        resolver:yupResolver(userLoginSchema),
        mode:'all'
    })
    const submitForm = async (data:LoginUserDto)=>{
        console.log(data);
        await loginUser(data);
    }
    return(
        <form className="w-full" onSubmit={handleSubmit(submitForm)}>
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
                <Button className="w-full bg-green-500 p-2 rounded cursor-pointer" type="submit" disabled={!isValid && true}>Войти</Button>
                <Button className="w-full bg-red-500 p-2 rounded cursor-pointer" onClick={()=>reset()}>Очистить</Button>
            </Row>
        </form>
    )
}