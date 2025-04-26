import UserAPI from "@/api/UserAPI";
import { Container } from "@/components/ui/Container";
import { Button } from "@headlessui/react";
import { redirect } from "next/navigation";


export default async function VerifyEmail({params,}:{params:Promise<{token:string}>}){
    const {token} = await params
    await UserAPI.verify(token).then(()=>{
        redirect('/login');
    });
    return(
        <Container className="mt-5">
            <h1 className="text-2xl text-center">Подтвердите вашу почту</h1>
            
        </Container>
    )
}