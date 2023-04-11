import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {
    return <Flex justifyContent={'center'} alignItems={'center'} w={'full'} h={'80vh'}>
        <Spinner />
    </Flex>;
}

export default Loader;