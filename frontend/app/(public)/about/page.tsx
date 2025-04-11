import { Card } from "@/components/card/Card";
import { Container } from "@/components/Container";
import { TypoGraphy } from "@/components/typography/TypoGraphy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас",
  description: "Добро пожаловать на страницу о нас",
};

export default function About() {
  return (
    <Container className="mt-2">
      <TypoGraphy Tag="h1" position="center" size="2xl" bold italic>
        О нас
      </TypoGraphy>

      {/* Секция с описанием компании */}
      <div className="mt-8 text-center">
        <TypoGraphy Tag="p" position="left" size="xl">
          Мы — команда энтузиастов, которые страстно любят технологии и стремятся предоставить нашим клиентам лучшие электронные устройства по выгодным ценам.
        </TypoGraphy>
        <TypoGraphy Tag="p" size="xl" position="left" className="mt-4">
          Наша миссия — сделать технологии доступными для каждого, независимо от возраста или уровня технической подготовки.
        </TypoGraphy>
      </div>

      {/* Секция с преимуществами */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Card className="bg-gray-100 p-4 rounded-lg shadow-md">
          <TypoGraphy Tag="h2" size="xl" position="left" bold>
            Высокое качество
          </TypoGraphy>
          <p className="mt-2 text-gray-600">
            Мы тщательно отбираем поставщиков, чтобы гарантировать, что наши продукты соответствуют самым высоким стандартам качества.
          </p>
        </Card>

        <Card className="bg-gray-100 p-4 rounded-lg shadow-md">
          <TypoGraphy Tag="h2" size="xl" position="left" bold>
            Доступные цены
          </TypoGraphy>
          <p className="mt-2 text-gray-600">
            Мы стремимся предложить наши продукты по ценам, которые позволят каждому приобрести необходимую электронику.
          </p>
        </Card>

        <Card className="bg-gray-100 p-4 rounded-lg shadow-md">
          <TypoGraphy Tag="h2" size="xl" position="left" bold>
            Отличный сервис
          </TypoGraphy>
          <p className="mt-2 text-gray-600">
            Наша команда всегда готова помочь с любыми вопросами и предоставить профессиональную поддержку.
          </p>
        </Card>
      </div>

      {/* Секция с контактной информацией */}
      <div className="mt-12 text-center">
        <TypoGraphy Tag="h2" position="left" size="xl" bold>
          Свяжитесь с нами
        </TypoGraphy>
        <p className="mt-2 text-gray-600">
          Email: <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-800">info@example.com</a>
        </p>
        <p className="text-gray-600">
          Телефон: +7 (123) 456-78-90
        </p>
      </div>
    </Container>
  );
}
