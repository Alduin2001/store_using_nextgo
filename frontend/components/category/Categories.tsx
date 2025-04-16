'use client'
import { FC, useEffect } from "react";
import { Container } from "../ui/Container";
import { Row } from "../ui/grid/Row";
import { useCategoryStore } from "@/store/CategoryStore";
import { CategoryProps } from "./Category";

export const Categories:FC = ()=>{

    const {categories,getCategories} = useCategoryStore();
    useEffect(()=>{
        async function fetchCategories() {
            await getCategories();
        }
        fetchCategories();
    },[]);
    return(
        <Container className="mt-2">
            <Row min="300px" gap={2}>
                {categories.map(el=><CategoryProps {...el}/>)}
            </Row>
        </Container>
    )
}