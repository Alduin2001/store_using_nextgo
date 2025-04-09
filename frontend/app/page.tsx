import { Container } from "@/components/Container";
import { Row } from "@/components/grid/Row";
import Image from "next/image";
import { Card } from "@/components/card/Card";
import { Metadata } from "next";


export const metadata:Metadata = {
  title:"Главная",
  description:"Добро пожаловать на главную страницу"
}
export default function Home() {
  return (
    <Container className="mt-2">
      <h1>Главная страница</h1>
    </Container>
  );
}
