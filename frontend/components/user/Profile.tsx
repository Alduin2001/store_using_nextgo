'use client'
import { useUserStore } from "@/store/UserStore";
import { Button, Field, Input, Label } from "@headlessui/react";
import { FC, useState } from "react";
import { useEffect } from "react";
import { Row } from "../ui/grid/Row";

export const ProfileComp:FC = ()=>{
    const {getProfile,isAuth} = useUserStore();
    const [prof,setProf] = useState({
        name:"",
        surname:"",
        email:""
    });

    useEffect(()=>{
        async function fetchProfile() {
            await getProfile()
            .then(res=>{
                console.log(res)
                setProf(res.data.profile)
            });
        }
        fetchProfile();
    },[]);

    if(!isAuth){
        return(
            <div className="">Доступ запрещён</div>
        )
    }
    return(
        <form>
            <Field className="my-2 flex flex-col gap-2">
                <Label>Имя:</Label>
                <Input type="text" value={prof.name} className="outline-none border-b-2 border-green-400 focus:shadow-2xl"/>
            </Field>

            <Field className="my-2 flex flex-col gap-2">
                <Label>Фамилия:</Label>
                <Input type="text" value={prof.surname} className="outline-none border-b-2 border-green-400 focus:shadow-2xl"/>
            </Field>

            <Field className="my-2 flex flex-col gap-2">
                <Label>Email:</Label>
                <Input type="text" value={prof.email} className="outline-none border-b-2 border-green-400 focus:shadow-2xl"/>
            </Field>
            <Row min="100px" gap={2}>
                <Button className="bg-blue-500 p-2 text-[#eee] cursor-pointer rounded-md">Поменять данные</Button>
                <Button className="bg-red-500 p-2 text-[#eee] cursor-pointer rounded-md">Удалить аккаунт</Button>
            </Row>
        </form>
    )
}