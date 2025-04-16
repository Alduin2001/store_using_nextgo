'use client'
import { useUserStore } from "@/store/UserStore";
import { FC, useState } from "react";
import { useEffect } from "react";

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
            <p>Имя:{prof.name}</p>
            <p>Фамилия:{prof.surname}</p>
            <p>Email:{prof.email}</p>
        </form>
    )
}