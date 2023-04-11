import { Button, Flex, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useToast } from "@chakra-ui/react";
import { CarContext } from '../../providers/CarContext';
import CarSummaryDetails from "./CarSummaryDetails";
import CarSummaryOwner from "./CarSummaryOwner";
import CarSummaryGallery from "./CarSummaryGallery";
import CarSummaryServices from "./CarSummaryServices";
import { useContext } from "react";
import api from "../../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const _steps = [
    {title: 'Dane samochodu', display: <CarSummaryDetails />},
    {title: 'Właściciel', display: <CarSummaryOwner />},
    {title: 'Galeria', display: <CarSummaryGallery />},
    {title: 'Oferta', display: <CarSummaryServices />}
];

const CarSummary = ({stepActions}) => {
    const navigate = useNavigate()
    const {carData} = useContext(CarContext);
    const toast = useToast();
    const [loading, setLoading] = useState(false)
    const save = async () => {
        setLoading(true)
        let userId = carData.owner._id
        if(userId === ''){
            let {first_name, last_name, email, phone, password} = carData.owner;
            try {
                let res = await api.post('/users/register', {
                    first_name, last_name, email, phone, password
                })
                userId = res.data.user._id
            } catch (error) {
                setLoading(false)
                toast({
                    title: `Nie udało się utworzyć konta!`,
                    description: 'Sprawdź czy dane są poprawne w kroku 2 (Właściciel).',
                    status: 'error',
                    isClosable: true,
                  })
                return;
            }
        }
        try {
            let obj = {...carData.details}
            obj.services = [...carData.services]
            obj.userId = userId;
            const res = await api.post('/cars/new', obj);   
            const carId = res.data._id;
            const images = [...carData.images]
            const isMain = images.find(i => i.isMain);
            let formData = new FormData();
            for (const image of images) {
                formData.append('images', image.file)
            }
            formData.append("mainImage",isMain.alt)
            await api.post(`/cars/uploadImage/${carId}`,formData)
            setLoading(false)
            navigate('/cars');
        } catch (error) {
            setLoading(false)
            toast({
                title: `Nie udało się dodać samochodu!`,
                description: 'Sprawdź czy uzupełniłeś wszystkie dane.',
                status: 'error',
                isClosable: true,
              })
            return;
        }
    }
    return <>
        <Accordion>
            {_steps.map((step,index) => {
                return <AccordionItem key={index} color={'#fff'} borderColor={'rgb(163, 130, 58)'}>
                    <h2>
                        <AccordionButton borderColor={'rgb(163, 130, 58)'} fontSize={'2xl'}>
                            <Box as="span" flex='1' textAlign='left'>
                                {step.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {step.display}
                    </AccordionPanel>
                </AccordionItem>
            })}
        </Accordion>
        <Flex flexFlow={'column'} mt={10}>
            <Button my={4} bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={save} isLoading={loading} loadingText='Zapisuje...'>Zapisz</Button>
            <Button variant={'outline'} my={4} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} onClick={()=>stepActions(false)}>Cofnij</Button>
        </Flex>
    </>
}

export default CarSummary;