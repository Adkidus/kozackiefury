import { Box, Image, Flex } from "@chakra-ui/react";
import {FaTrash, FaRegStar, FaStar} from 'react-icons/fa'

const CarGalleryItem = ({image: {src, alt, file, isMain}, pos, setMain, deleteImage}) => {
    return <Box position={'relative'}>
        <Flex position={'absolute'} bg={'rgb(163, 130, 58)'} color={'#fff'} left={0} top={0} p={2} px={3} cursor={'pointer'} zIndex={99} onClick={()=>setMain(pos)}>
           {isMain ? <FaStar /> : <FaRegStar />}
        </Flex>
        <Flex position={'absolute'} bg={'rgb(163, 130, 58)'} color={'#fff'} right={0} top={0} p={2} px={3} cursor={'pointer'} zIndex={99} onClick={()=>deleteImage(pos)}>
            <FaTrash />
        </Flex>
        <Image height={'250px'} w={'full'} src={src} alt={alt} objectFit={'cover'} />
    </Box>
}

export default CarGalleryItem;