import { Container } from "@/components/ui/Container";
import { ProfileComp } from "@/components/user/Profile";
import { Metadata } from "next";


export const metadata:Metadata = {
    title:"Профиль"
}
export default function Profile(){

    return(
        <Container>
            <h1>Профиль</h1>
            <ProfileComp/>
        </Container>
    )
}