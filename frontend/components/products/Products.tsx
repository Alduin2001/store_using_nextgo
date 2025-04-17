'use client'
import { FC, useEffect } from "react";
import { Container } from "../ui/Container";
import { useProductStore } from "@/store/ProductStore";
import { ProductItem } from "./ProductItem";
import { Row } from "../ui/grid/Row";


export const ProductsComp:FC = ()=>{
    const {getProducts,products} = useProductStore();

    useEffect(()=>{
        async function fetchProducts(){
            await getProducts();
        }
        fetchProducts();
    },[]);
    return(
        <Container>
            <h1>Товары</h1>
            <Row min="200px" gap={2}>
                {products.map((el,i)=><ProductItem key={i} {...el} />)}
            </Row>
        </Container>
    )
}