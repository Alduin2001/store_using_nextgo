import { Button, Field, Input, Label } from "@headlessui/react";
import { FC } from "react";


export const AddCategory:FC = ()=>{

    return(
        <form>
            <Field className="flex flex-col gap-2">
                <Label>Название:</Label>
                <Input type="text" className="outline-none border-b-2 border-green-600"/>
            </Field>
            <Button type="submit" className="p-2 mt-2 text-[#eee] bg-green-600 w-full">Добавить</Button>
        </form>
    )
}