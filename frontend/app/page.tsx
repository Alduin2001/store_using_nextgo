import { Container } from "@/components/Container";
import { Metadata } from "next";
import { TypoGraphy } from "@/components/typography/TypoGraphy";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Главная",
  description: "Добро пожаловать на главную страницу",
};

export default function Home() {
  return (
    <Container className="mt-2">
      <TypoGraphy Tag="h1" position="center" size="2xl" bold>
        Добро пожаловать на наш сайт электроники
      </TypoGraphy>

      {/* Секция с призывом к действию */}
      <div className="flex justify-center mt-8">
        <Link href="/catalog">
          <p className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Перейти в каталог
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </p>
        </Link>
      </div>

      {/* Секция с популярными категориями */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <TypoGraphy Tag="h2" size="xl" position="left" bold>
            Смартфоны
          </TypoGraphy>
          <p className="mt-2 text-gray-600">
            Последние модели от лучших брендов
          </p>
          <Link href="/">
            <p className="text-blue-600 hover:text-blue-800">Перейти</p>
          </Link>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <TypoGraphy Tag="h2" size="xl" position="left" bold>
            Ноутбуки
          </TypoGraphy>
          <p className="mt-2 text-gray-600">
            Высокопроизводительные ноутбуки для работы и игр
          </p>
          <Link href="/">
            <p className="text-blue-600 hover:text-blue-800">Перейти</p>
          </Link>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <TypoGraphy Tag="h2" size="xl" position="left" bold>
            Гаджеты
          </TypoGraphy>
          <p className="mt-2 text-gray-600">
            Инновационные аксессуары для вашего стиля жизни
          </p>
          <Link href="/">
            <p className="text-blue-600 hover:text-blue-800">Перейти</p>
          </Link>
        </div>
      </div>
    </Container>
  );
}
