import { Card } from "@/components/card/Card";
import { CardBody } from "@/components/card/CardBody";
import { CardFooter } from "@/components/card/CardFooter";
import { CardHeader } from "@/components/card/CardHeader";
import { Container } from "@/components/Container";
import { Row } from "@/components/grid/Row";
import { TypoGraphy } from "@/components/typography/TypoGraphy";
import { Metadata } from "next";
import Link from "next/link";
import macbook from '@/public/macbook.webp';
import Image from "next/image";

export const metadata: Metadata = {
  title: "Товары",
  description: "Добро пожаловать на страницу товаров",
};

export default function Products() {
  const products = [
    { id: 1, name: "MacBook Air", description: "Легкий и мощный ноутбук", price: "120 000 ₽" },
    { id: 2, name: "iPhone 14 Pro", description: "Смартфон с передовой камерой", price: "90 000 ₽" },
    { id: 3, name: "Samsung Galaxy Watch", description: "Умные часы для фитнеса и стиля", price: "20 000 ₽" },
  ];

  return (
    <Container>
      <TypoGraphy className="mt-2" Tag="h1" size="2xl" bold position="center">Наши товары</TypoGraphy>
      <Row min="300px" gap={2}>
        {products.map((product) => (
          <Card key={product.id} bordered className="shadow-md hover:shadow-lg">
            <CardHeader>
              <TypoGraphy Tag="h2" position="center" size="2xl" bold>{product.name}</TypoGraphy>
            </CardHeader>
            <CardBody>
              <Image src={macbook} alt="mac"/>
              <p className="mt-2">{product.description}</p>
              <p className="text-lg font-bold mt-2">{product.price}</p>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Link href={`/products/${product.id}`} className="text-blue-600 hover:text-blue-800">Подробнее</Link>
            </CardFooter>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
