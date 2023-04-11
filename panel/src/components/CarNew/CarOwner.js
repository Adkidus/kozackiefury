import { Button, Flex, FormControl, FormLabel, Input, useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, List, ListItem, Divider, Text } from "@chakra-ui/react";
import React, {useContext, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { CarContext } from '../../providers/CarContext';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { PersonModel } from '../../models/Person'
import { getUsers } from "../../store/team/actions";

const schema = yup.object({
    first_name: yup.string().required('Pole nie moe być puste!'),
    email:  yup.string().email('Pole musi zawierać @ w adresie email!').required('Pole nie moe być puste!'),
}).required();

const generatePassword = () => {
    var buf = new Uint8Array(6);
    window.crypto.getRandomValues(buf);
    return btoa(String.fromCharCode.apply(null, buf));
}

const CarOwner = ({stepActions}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team);
    const {carData, setCarData} = useContext(CarContext);
    const [type, setType] = useState(null);
    const {register, reset, getValues, setValue} = useForm({
        resolver: yupResolver(schema)
    });
    useEffect(()=>{
        if(team.usersList.length === 0)
            dispatch(getUsers())
    },[dispatch]) // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(()=>{
        if(carData?.owner){
            reset(carData.owner)
            setType(carData.owner._id === '' ? 'new' : 'db')
        }else{
            setCarData({
                ...carData,
                ...{owner: PersonModel}
            })
        }
    },[carData, setCarData]) // eslint-disable-line react-hooks/exhaustive-deps
    const isNew = () => {
        reset(PersonModel)
        setType('new')
    }
    const randomPassword = () => {
        setValue('password',generatePassword())
    }
    const selectPerson = (e) => {
        const userID = e.target.name;
        const user = team.usersList.find(u => u._id === userID)
        let n = {...PersonModel, ...user}
        reset(n)
        setType('db')
        onClose()
    }
    const saveData = () => {
        setCarData({
            ...carData,
            ...{owner: getValues()}
        })
    }
    const submitForm = () => {
        saveData()
        stepActions()
    }
    const back = () => {
        saveData()
        stepActions(false)
    }
    return <>
    <Flex flexFlow={'column'} color={'rgb(163, 130, 58)'}>
        <Flex mb={6} justifyContent={'center'} alignItems={'center'} w={'full'} gap={'1.5rem'}> 
            <Button flex={1} variant={'solid'} border={'1px solid rgb(163, 130, 58)'} bg={type === 'new' ? 'rgb(163, 130, 58)' : 'transparent'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={isNew}>Nowa osoba</Button>
            <Button flex={1} variant={'solid'} border={'1px solid rgb(163, 130, 58)'} bg={type === 'db' ? 'rgb(163, 130, 58)' : 'transparent'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={onOpen}>{type === 'db' ? 'Wybrano' : 'Wybierz'} z bazy</Button>
        </Flex>
        <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'} display={type ? 'flex' : 'none'}>
            <FormControl>
                <FormLabel>Imię</FormLabel>
                <Input disabled={type==='db'} {...register('first_name')} />
            </FormControl>
            <FormControl>
                <FormLabel>Nazwisko</FormLabel>
                <Input disabled={type==='db'} {...register('last_name')} />
            </FormControl>
        </Flex>
        <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'} mt={'1rem'} display={type ? 'flex' : 'none'}>
            <FormControl>
                <FormLabel>Telefon</FormLabel>
                <Input disabled={type==='db'} {...register('phone')} />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input disabled={type==='db'} {...register('email')} />
            </FormControl>
        </Flex>
        <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'} mt={'1rem'} mb={'2rem'} display={type === 'new' ? 'flex' : 'none'}>
            <FormControl flex={1}>
                <FormLabel>Hasło</FormLabel>
                <Input {...register('password')} />
            </FormControl>
            <Flex flex={1} alignItems={'end'}>
                <Button w="full" variant={'outline'} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} letterSpacing={'1px'} _hover={{bg: 'rgb(163, 130, 58)', color: '#fff'}} onClick={randomPassword}>GENERUJ HASŁO</Button>
            </Flex>
        </Flex>
        <Button my={4} bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={submitForm}>Dalej</Button>
        <Button variant={'outline'} my={4} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} onClick={back}>Cofnij</Button>
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
            <List spacing={5}>
                {team.usersList.map(user => <ListItem key={user._id} cursor={'pointer'}>
                    <Flex justifyContent={'space-between'}>
                        <Text>{user.first_name} {user.last_name}</Text>
                        <Button size={'xs'} bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} name={user._id} onClick={selectPerson}>Wybierz</Button>
                    </Flex>
                    <Divider />
                </ListItem>)}
            </List>
          </DrawerBody>
          <DrawerFooter>
            <Button variant={'outline'} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} mr={3} onClick={onClose}>
              Anuluj
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
}

export default CarOwner;