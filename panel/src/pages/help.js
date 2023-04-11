import { Container, Flex, Text, Divider } from "@chakra-ui/react";
const Help = () => {
    return <Container maxW={'8xl'}>
        <Flex w="full" justifyContent={'space-between'} alignItems={'center'} px={5}>
            <Text color={'#fff'} fontSize={'5xl'}>Pomoc</Text>
        </Flex>
        <Divider borderColor={'rgb(163, 130, 58)'} />
    </Container>
}

export default Help;