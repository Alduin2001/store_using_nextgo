'use client'
import { Button, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { FC } from "react";
import { Container } from "../ui/Container";
import { useUserStore } from "@/store/UserStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Header:FC = ()=>{
    const {isAuth,role,checkAuth,logoutUser} = useUserStore();
    const router = useRouter();
    useEffect(()=>{
        async function check() {
            await checkAuth();
        }
        check();
    },[checkAuth])
    const logout = async ()=>{
        await logoutUser()
        .then(()=>{
            router.push('/login');
        });
    }
    return(
        <header className="shadow-2xl p-2 min-[300px]:text-xs md:text-sm lg:text-lg">
            <Container className="flex flex-wrap justify-between items-center gap-2">
            <Link href="/">Logo</Link>
            <nav className="flex gap-2 text-[#eee]">
                <Menu>
                    <MenuButton className="bg-amber-500 p-2 rounded cursor-pointer">Основные</MenuButton>
                    <MenuItems anchor="bottom start" className="flex flex-col">
                        <MenuItem as={Link} href="/" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Главная</MenuItem>
                        <MenuItem as={Link} href="/about" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">О нас</MenuItem>
                        <MenuItem as={Link} href="/products" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Товары</MenuItem>
                    </MenuItems>
                </Menu>
                {
                    !isAuth && 
                (<Menu>
                    <MenuButton className="bg-amber-500 p-2 rounded cursor-pointer">Вход</MenuButton>
                    <MenuItems anchor="bottom start" className="flex flex-col">
                        <MenuItem as={Link} href="/register" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Регистрация</MenuItem>
                        <MenuItem as={Link} href="/login" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Вход</MenuItem>
                    </MenuItems>
                </Menu>)
}
                {
                    isAuth &&
                (<Menu>
                    <MenuButton className="bg-amber-500 p-2 rounded cursor-pointer">Личный кабинет</MenuButton>
                    <MenuItems anchor="bottom start" className="flex flex-col">
                    <MenuItem as={Link} href="/private/profile" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Профиль</MenuItem>
                        <MenuItem as={Button} onClick={logout} className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Выход</MenuItem>
                    </MenuItems>
                </Menu>)
}
                {
                role==2 &&
                (<Menu>
                    <MenuButton className="bg-amber-500 p-2 rounded cursor-pointer">Администрирование</MenuButton>
                    <MenuItems anchor="bottom start" className="flex flex-col">
                        <MenuItem as={Link} href="/admin/category_manage" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Управление категориями</MenuItem>
                        <MenuItem as={Link} href="/admin/product_manage" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Управление товарами</MenuItem>
                    </MenuItems>
                </Menu>)
}
            </nav>
            </Container>
        </header>
    )
}