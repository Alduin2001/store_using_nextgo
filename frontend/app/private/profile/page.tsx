import { Container } from "@/components/ui/Container";
import { ProfileComp } from "@/components/user/Profile";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"Профиль"
}

export default function Profile(){

    return(
        <Container className="mt-5">
            <h1 className="text-2xl text-center">Профиль</h1>
            <ProfileComp/>
        </Container>
    )
}