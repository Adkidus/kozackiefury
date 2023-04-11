import { Box, Image, Flex, useDisclosure, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from "@chakra-ui/react";
import { useRef } from "react";
import {FaTrash, FaRegStar, FaStar} from 'react-icons/fa'

const CarGalleryImage = ({src, alt, isMain, setMain, deleteImage, canDelete}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const main = () => {
        setMain(src)
    }
    const remove = () => {
        deleteImage(alt);
        onClose()
    }
    return <Box position={'relative'}>
        <Flex position={'absolute'} bg={'rgb(163, 130, 58)'} color={'#fff'} left={0} top={0} p={2} px={3} cursor={'pointer'} zIndex={99} onClick={main}>
           {isMain ? <FaStar /> : <FaRegStar />}
        </Flex>
        <Flex position={'absolute'} bg={'rgb(163, 130, 58)'} color={'#fff'} right={0} top={0} p={2} px={3} cursor={'pointer'} onClick={onOpen}>
            <FaTrash />
        </Flex>
        <Image height={'250px'} w={'full'} src={src} alt={alt} objectFit={'cover'} />
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent bg={'rgb(33, 33, 33)'}>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>{canDelete ? 'Usuwanie' : 'Nie mozna usunąć'} </AlertDialogHeader>
                    <AlertDialogBody>
                        {canDelete ? 'Czy napewno chcesz usunąć?' : 'Samochód musi posiadać minimum 1 zdjęcie!'} 
                    </AlertDialogBody>
                    {
                        canDelete ? 
                        <AlertDialogFooter>
                            <Button variant={'outline'} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} ref={cancelRef} onClick={onClose}>
                                Nie
                            </Button>
                            <Button bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={remove} ml={3}>
                                Tak
                            </Button>
                        </AlertDialogFooter>
                        : 
                        <AlertDialogFooter>
                            <Button bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} ref={cancelRef} onClick={onClose}>
                                Zamknij
                            </Button>
                        </AlertDialogFooter>
                    }
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    </Box>
}

export default CarGalleryImage;