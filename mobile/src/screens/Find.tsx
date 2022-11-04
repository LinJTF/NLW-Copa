import { Heading, Text, VStack } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";


export function Find() {
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Buscar por código" showBackButton={true}/>

            <VStack mt={8} mx={5} alignItems="center">

                <Heading fontFamily="heading" color="white" fontSize="xl" textAlign="center">
                    Encontre um bolão através do código único
                </Heading>

                <Input 
                    mt={8}
                    mb={2}
                    placeholder="Qual código do bolão?"
                />

                <Button 
                    title="BUSCAR BOLÃO"
                />

            </VStack>

        </VStack>
    );
}