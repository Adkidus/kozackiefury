import { Container, Flex, SimpleGrid, Text, Button, Divider, Box } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// import { Calendar, momentLocalizer } from 'react-big-calendar'
// import moment from 'moment'
// import 'react-big-calendar/lib/css/react-big-calendar.css';

const CalendarEvents = () => {
    // const localizer = momentLocalizer(moment)
    return <Container maxW={'8xl'}>
        <Flex w="full" justifyContent={'space-between'} alignItems={'center'} px={5}>
            <Text color={'#fff'} fontSize={'5xl'}>Kalendarz</Text>
            {/* <Link to={'/car/new'}>
                <Button bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}}>Dodaj</Button>
            </Link> */}
        </Flex>
        <Divider borderColor={'rgb(163, 130, 58)'} />

    </Container>
}

export default CalendarEvents;