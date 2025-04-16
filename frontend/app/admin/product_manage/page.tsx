import { Container } from "@/components/ui/Container";
import { TypoGraphy } from "@/components/ui/typography/TypoGraphy";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function ProductManage(){
    return(
        <Container className="mt-5">
            <TypoGraphy Tag="h1" size="2xl" position="center">Управление товарами</TypoGraphy>
            <Container className="mt-2">
            <TabGroup manual>
                <TabList className="flex gap-2 text-2xl">
                    <Tab className="outline-none p-2 data-[selected]:bg-green-200 data-[hover]:underline cursor-pointer rounded-md">Добавить</Tab>
                    <Tab className="outline-none p-2 data-[selected]:bg-green-200 cursor-pointer data-[hover]:underline rounded-md">Список</Tab>
                </TabList>
            <TabPanels className="text-2xl">
                <TabPanel className="animate-fade-in">
                    <Container>
                        <TypoGraphy Tag="h1" size="2xl" position="center">Заполните форму</TypoGraphy>
                        
                    </Container>
                </TabPanel>
                <TabPanel className="animate-fade-in">
                    
                </TabPanel>
            </TabPanels>
            </TabGroup>
            </Container>
        </Container>
    )
}