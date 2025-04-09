import { Container } from "@/components/Container";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"О нас",
    description:"Добро пожаловать на страницу о нас"
}

export default function About(){

    return(
        <Container className="mt-2">
            <h1>О нас</h1>
        </Container>
    )
}