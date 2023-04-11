import { Box, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const auth = useSelector((state) => state.auth);
    return <Flex flexFlow={'column'} gap={'1rem'}>
        <Box fontSize={'2xl'}>
            <Flex gap={'.25rem'}>
                <Text fontWeight={500} letterSpacing={'1px'}>Cześć,</Text>
                <Text textTransform={'uppercase'} letterSpacing={'3px'} color={'rgb(163, 130, 58)'} fontWeight={700}>{auth.currentUser.first_name}! </Text>
            </Flex> 
            <Flex gap={'.35rem'} >
                <Text fontWeight={500} letterSpacing={'1px'}>Witaj w </Text>
                <Text letterSpacing={'3px'} color={'rgb(163, 130, 58)'} fontWeight={700}> KOZACKIEFURY!</Text>
            </Flex>
        </Box>
    </Flex>
}

export default Dashboard;