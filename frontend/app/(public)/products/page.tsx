import { Card } from "@/components/card/Card";
import { Container } from "@/components/Container";
import { Row } from "@/components/grid/Row";
import { TypoGraphy } from "@/components/typography/TypoGraphy";


export default function Products(){

    return(
        <Container>
            <TypoGraphy className="mt-2" Tag="h1" size="2xl" bold position="center">Наши товары</TypoGraphy>
            <Row min="100px" gap={2}>
                <Card bordered>
                    <h1>Товар один</h1>
                </Card>
                <Card bordered>
                    <h1>Товар один</h1>
                </Card>
                <Card bordered>
                    <h1>Товар один</h1>
                </Card>
            </Row>
        </Container>
    )
}