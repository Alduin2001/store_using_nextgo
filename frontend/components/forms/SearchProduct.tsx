'use client'
import { Button, Field, Input, Label, Select } from "@headlessui/react";
import { FC, FormEvent, useEffect, useState } from "react";
import { Row } from "../ui/grid/Row";
import { useCategoryStore } from "@/store/CategoryStore";
import { SearchProductDto } from "@/interfaces/dto/product.dto";
import { useProductStore } from "@/store/ProductStore";


export const SearchProducts:FC = ()=>{
    const [params,setParams] = useState<SearchProductDto>({});
    const {getCategories,categories} = useCategoryStore();
    const {getProducts,searchProducts,minimum} = useProductStore();
    useEffect(()=>{
        async function fetchCategories(){
            await getCategories();
        }
        fetchCategories();
    },[]);
    const submitSearch = async (ev:FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        console.log(params);
        await searchProducts(params);
    }
    const clearSearch = async ()=>await getProducts();
    return(
        <form className="w-full" onSubmit={submitSearch}>
            <Field className="my-2 flex flex-col gap-2">
                <Label>Название</Label>
                <Input type="text" className="w-full outline-none border-b-2 border-green-600" onChange={(ev)=>setParams({...params,name:ev.target.value})}/>
            </Field>
            <Field className="my-2">
                <Select className="w-full shadow p-2 rounded-md" onChange={(ev)=>setParams({...params,category:ev.target.value})}>
                    <Input as="option">Выберите категорию</Input>
                    {categories.map((el,i)=><Input key={i} as="option" value={el.id}>{el.name}</Input>)}
                </Select>
            </Field>
            <Field className="my-2">
                <p>Минимальная цена(руб.):</p>
                <Input type="number" className="outline-none border-b-2 border-green-600" min={0} onChange={ev=>setParams({...params,minPrice:parseInt(ev.target.value)})} placeholder={`Минимум ${minimum}`}/>
            </Field>
            <Field className="my-2">
                <p>Максимальная цена(руб.):</p>
                <Input type="number" className="outline-none border-b-2 border-green-600" min={0} onChange={ev=>setParams({...params,maxPrice:parseInt(ev.target.value)})}/>
            </Field>
            <Row gap={2} min="100px">
            <Button type="submit" className="p-2 text-[#eee] rounded-md bg-green-600 cursor-pointer">Найти</Button>
            <Button className="p-2 text-[#eee] rounded-md bg-red-600 cursor-pointer" onClick={clearSearch}>Очистить</Button>
            </Row>
        </form>
    )
}