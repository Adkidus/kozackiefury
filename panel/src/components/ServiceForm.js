import {Flex, FormControl, FormLabel, Textarea, Input} from "@chakra-ui/react"
import {FaTrash} from 'react-icons/fa'

const ServiceForm = ({i, service, deleteService, change}) => {
    const remove = () => {
        deleteService(i)
    }
    return <Flex flexFlow={'column'} p={4} border={'1px solid'} borderColor={'rgb(163, 130, 58)'} color={'rgb(163, 130, 58)'} gap={'1rem'} position={'relative'}>
        <Flex position={'absolute'} bg={'rgb(163, 130, 58)'} color={'#fff'} right={0} top={0} p={3} px={4} cursor={'pointer'} zIndex={99} onClick={remove}>
            <FaTrash />
        </Flex>
        <FormControl mt={4}>
            <FormLabel>Nazwa</FormLabel>
            <Input value={service.title} name='title' onChange={e => change(e,i)} />
        </FormControl>
        <FormControl>
            <FormLabel>Czas</FormLabel>
            <Input value={service.time} name='time' onChange={e => change(e,i)} />
        </FormControl>
        <FormControl>
            <FormLabel>Cena</FormLabel>
            <Input value={service.price} name='price' onChange={e => change(e,i)} />
        </FormControl>
        <FormControl>
            <FormLabel>Opis</FormLabel>
            <Textarea bg={'#000'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} value={service.description} name='description' onChange={e => change(e,i)} />
        </FormControl>
    </Flex>
}

export default ServiceForm;