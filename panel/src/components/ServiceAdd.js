import {Flex, Button, useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import { ServiceModel } from '../models/Service'

const ServiceAdd = ({addService}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const addSingle = () => {
        const arr = []
        arr.push({...ServiceModel})
        addService(arr)
    }
    return <>
    <Flex flexFlow={'column'} p={4} color={'rgb(163, 130, 58)'} gap={'1rem'} justifyContent={'center'} >
        <Button bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={addSingle}>Dodaj nowy</Button>
        <Button variant={'outline'} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} onClick={onOpen}>Wybierz z bazy</Button>
    </Flex>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
    >
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33, 33, 33)'}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
                Wybierz
            </DrawerHeader>

            <DrawerBody>

            </DrawerBody>

            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
    </>
}

export default ServiceAdd;