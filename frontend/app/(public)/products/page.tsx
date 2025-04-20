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
import { ProductsComp } from "@/components/products/Products";

export const metadata: Metadata = {
  title: "Товары",
  description: "Добро пожаловать на страницу товаров",
};

export default function Products() {

  return (
    <Container>
      <TypoGraphy className="mt-2" Tag="h1" size="2xl" bold position="center">Наши товары</TypoGraphy>
      <div className="flex gap-2 flex-wrap">
        <Card>
          <TypoGraphy Tag="h1" size="2xl" position="center" bold italic>Поиск</TypoGraphy>
          <SearchProducts/>
        </Card>
        <div className="flex-1 w-full">
        <ProductsComp/>
        </div>
      </div>
    </Container>
  );
}
