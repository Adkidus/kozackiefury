import { Box, Container, FormLabel, Flex, Heading, Text, Input, FormControl, Textarea, Button } from "@chakra-ui/react";

export default function RentForm(){

    return <Container maxW={'2xl'} justifyContent={'center'} alignItems={"center"} my={12}>
        <Flex flexFlow={'column'} >
            <Heading textTransform={'uppercase'} textAlign={'center'}>Przejdźmy się !</Heading>
            <form>
                <Flex flexFlow={'column'} gap={'1rem'} mt={8}>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Imię i nazwisko</FormLabel>
                        <Input borderColor={'rgb(163, 130, 58)'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Email</FormLabel>
                        <Input borderColor={'rgb(163, 130, 58)'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Telefon</FormLabel>
                        <Input borderColor={'rgb(163, 130, 58)'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Treść</FormLabel>
                        <Textarea borderColor={'rgb(163, 130, 58)'} />
                    </FormControl>
                    <Button 
                        mt={4}
                        bg={'rgb(163, 130, 58)'}
                        color={'#fff'}
                        w={'full'} 
                        textTransform={'uppercase'}
                        rounded={0}
                        _hover={{
                            bg: 'rgb(163, 130, 58)',
                            color: '#fff'
                        }}>Wyślij</Button>
                </Flex>
            </form>
        </Flex>
    </Container>
}