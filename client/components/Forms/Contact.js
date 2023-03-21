import { Flex, Heading, Text, Box, Container, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { axiosInstance } from "../../api-client/axiosInstance";

const schema = yup.object({
    person: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    notes: yup.string().required(),
}).required();

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
}

const ContactForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async(data) => {
        try {
            const res = await axiosInstance.post('orders/contact', data)
        } catch (error) {
            console.log(error)
        }
    }
    return <Container my={12} maxW={'8xl'}>
        <Box>
            <FadeInWhenVisible>
                <Heading color={'rgb(163, 130, 58)'}>KONTAKT</Heading>
                <Box width={'7rem'} height={'1px'} backgroundColor={'#a3823a'}></Box>
            </FadeInWhenVisible>
        </Box>
        <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'}>
            <Flex flexFlow={'column'} flex={1} >
                <Flex alignItems={'center'} gap={'1rem'} mt={'2rem'} fontSize={'xl'}>
                    <FaEnvelope  />
                    <Text letterSpacing={'5px'}>jedyne@kozackiefury.pl</Text>
                </Flex>
                <Flex alignItems={'center'} gap={'1rem'} mt={'2rem'} fontSize={'xl'}>
                    <FaPhoneAlt  />
                    <Text letterSpacing={'5px'}>+48 111 222 333</Text>
                </Flex>
            </Flex>
            <Box flex={1}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex flexFlow={'column'} gap={'1rem'}>
                        <FormControl>
                            <FormLabel color={'rgb(163, 130, 58)'}>Imię i nazwisko</FormLabel>
                            <Input borderColor={'rgb(163, 130, 58)'} {...register('person')} />
                        </FormControl>
                        <FormControl>
                            <FormLabel color={'rgb(163, 130, 58)'}>Email</FormLabel>
                            <Input borderColor={'rgb(163, 130, 58)'} {...register('email')} />
                        </FormControl>
                        <FormControl>
                            <FormLabel color={'rgb(163, 130, 58)'}>Telefon</FormLabel>
                            <Input borderColor={'rgb(163, 130, 58)'} {...register('phone')} />
                        </FormControl>
                        <FormControl>
                            <FormLabel color={'rgb(163, 130, 58)'}>Treść</FormLabel>
                            <Textarea borderColor={'rgb(163, 130, 58)'} {...register('notes')} />
                        </FormControl>
                        <Button 
                            mt={4}
                            bg={'rgb(163, 130, 58)'}
                            color={'#fff'}
                            w={'full'} 
                            type={'submit'}
                            textTransform={'uppercase'}
                            rounded={0}
                            _hover={{
                                bg: 'rgb(163, 130, 58)',
                                color: '#fff'
                            }}>Wyślij</Button>
                    </Flex>
                </form>
            </Box>
        </Flex>
    </Container>
}


export default ContactForm;
