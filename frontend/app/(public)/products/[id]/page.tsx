import { Container } from "@/components/Container";
import { TypoGraphy } from "@/components/typography/TypoGraphy";


export default async function Product({params}:{params:{id:string}}){
    const id = await params.id;
    return(
        <Container>
            <TypoGraphy Tag="h1" size="2xl" position="center" >Товар</TypoGraphy>
            <TypoGraphy Tag="h1" size="2xl" position="center" bold>{id}</TypoGraphy>
        </Container>
    )
}