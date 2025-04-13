import { Card } from "@/components/ui/card/Card";
import { CardBody } from "@/components/ui/card/CardBody";
import { CardFooter } from "@/components/ui/card/CardFooter";
import { CardHeader } from "@/components/ui/card/CardHeader";
import { Container } from "@/components/ui/Container";
import { Row } from "@/components/ui/grid/Row";
import { TypoGraphy } from "@/components/ui/typography/TypoGraphy";
import { Metadata } from "next";
import Link from "next/link";
import macbook from '@/public/macbook.webp';
import Image from "next/image";
import { SearchProducts } from "@/components/forms/SearchProduct";

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
      <div className="flex gap-2 flex-wrap">
        <Card>
          <TypoGraphy Tag="h1" size="2xl" position="center" bold italic>Поиск</TypoGraphy>
          <SearchProducts/>
        </Card>
        <div className="flex-1 w-full">
        <Row gap={2} min="300px">
        {products.map((product) => (
          <Card width="full" key={product.id} bordered className="shadow-md hover:shadow-lg">
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
        </div>
      </div>
    </Container>
  );
}
