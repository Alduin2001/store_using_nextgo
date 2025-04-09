import { LoginComp } from "@/components/auth/LoginComp";
import { Container } from "@/components/Container";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"Вход",
    description:"Добро пожаловать на страницу входа"
}

export default function Register(){

    return(
        <Container className="mt-2">
            <h1>Вход</h1>
            <LoginComp/>
        </Container>
    )
}