'use client'
import { Button, Field, Input, Label, Select } from "@headlessui/react";
import { FC } from "react";
import { Row } from "../grid/Row";


export const SearchProducts:FC = ()=>{

    return(
        <form className="w-full">
            <Field className="my-2 flex flex-col gap-2">
                <Label>Название</Label>
                <Input type="text" className="w-full outline-none border-b-2 border-green-600"/>
            </Field>
            <Field className="my-2">
                <Select className="w-full shadow p-2 rounded-md">
                    <Input as="option">Ноутбук</Input>
                    <Input as="option">Ноутбук</Input>
                    <Input as="option">Ноутбук</Input>
                </Select>
            </Field>
            <Row gap={2} min="100px">
            <Button type="submit" className="p-2 text-[#eee] rounded-md bg-green-600 cursor-pointer">Найти</Button>
            <Button className="p-2 text-[#eee] rounded-md bg-red-600 cursor-pointer">Очистить</Button>
            </Row>
        </form>
    )
}