import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { FC } from "react";


export const Header:FC = ()=>{

    return(
        <header className="flex flex-wrap justify-between items-center gap-2 shadow-2xl p-2 min-[300px]:text-xs md:text-sm lg:text-lg">
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
                <Menu>
                    <MenuButton className="bg-amber-500 p-2 rounded cursor-pointer">Вход</MenuButton>
                    <MenuItems anchor="bottom start" className="flex flex-col">
                        <MenuItem as={Link} href="/register" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Регистрация</MenuItem>
                        <MenuItem as={Link} href="/login" className="bg-amber-500 p-2 text-[#eee] transition hover:bg-amber-400 rounded cursor-pointer">Вход</MenuItem>
                    </MenuItems>
                </Menu>
            </nav>
        </header>
    )
}