import { Flex, Button, Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return <Container height={'100vh'}>
        <Flex h={'full'} flexFlow="column" justifyContent={'center'} alignItems={'center'}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bg="rgb(163, 130, 58)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you're looking for does not seem to exist
            </Text>
            <Link to={'/'}>
                <Button
                    colorScheme="teal"
                    bg="rgb(163, 130, 58)"
                    color="white"
                    variant="solid"
                    _hover={{bg: 'rgb(163, 130, 58)'}}>
                    Go to Home
                </Button>
            </Link>
        </Flex>
    </Container>
}

export default NotFound;