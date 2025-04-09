import { RegisterComp } from "@/components/auth/RegisterComp";
import { Container } from "@/components/Container";
import { Metadata } from "next";


export const metadata:Metadata = {
    title:"Регистрация",
    description:"Добро пожаловать на страницу регистрации"
}
export default function Register(){

    return(
        <Container className="mt-2">
            <h1>Регистрация</h1>
            <RegisterComp/>
        </Container>
    )
}