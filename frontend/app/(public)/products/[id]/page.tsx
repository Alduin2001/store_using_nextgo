import { Card } from "@/components/ui/card/Card";
import { Container } from "@/components/ui/Container";
import { TypoGraphy } from "@/components/ui/typography/TypoGraphy";
import Image from "next/image";
import macbook from '@/public/macbook.webp';
import { Row } from "@/components/ui/grid/Row";
import { Button } from "@headlessui/react";
import Link from "next/link";

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Исправлено, так как params уже объект

  // Данные о продукте (в реальном приложении их следует получать из базы данных или API)
  const productData = {
    id: id,
    name: "MacBook Air",
    description: "Легкий и мощный ноутбук с передовой технологией",
    price: "120 000 ₽",
    image: macbook,
  };

  return (
    <Container className="mt-2">
      <TypoGraphy Tag="h1" size="2xl" position="center" bold>
        {productData.name}
      </TypoGraphy>

      <Card className="mt-8 shadow-md mb-2">
        <div className="flex flex-col items-center">
          <Image src={productData.image} alt="mac" className="w-3/5"/>
          <TypoGraphy Tag="h2" position="left" size="xl" bold className="mt-4">
            {productData.name}
          </TypoGraphy>
          <p className="text-lg mt-2">{productData.description}</p>
          <p className="text-lg font-bold mt-2">{productData.price}</p>
          <Row gap={2} min="100px" className="mt-2">
            <Button className="p-2 cursor-pointer rounded text-[#eee] bg-green-500">Заказать</Button>
            <Button className="p-2 cursor-pointer text-center rounded text-[#eee] bg-red-500" as={Link} href="/products">Вернуться назад</Button>
          </Row>
        </div>
      </Card>
    </Container>
  );
}
