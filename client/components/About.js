import { Flex, Heading, Text, Box, Icon, Card, CardBody, Container } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import logoBlack from '../assets/logoblack.jpeg';
import logoKozackieFury from '../assets/logo-kozackie-fury.svg';

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

const About = () => {
    return <Container maxW={'8xl'} my={12}>
        <Flex flexFlow={{base: 'column', lg: 'row'}} minH={'35vh'}>
            <Flex flex={1} justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <>
                        <Heading color={'rgb(163, 130, 58)'}>O NAS</Heading>
                        <Box width={'7rem'} height={'1px'} backgroundColor={'#a3823a'}></Box>
                    </>
                    <>
                        <Text textAlign={'justify'} mt={'1.5rem'}>Kozackie Fury to marka, która z pewnością spełni oczekiwania każdego, kto poszukuje wyjątkowego pojazdu na swoje wydarzenie. Jako specjaliści w dziedzinie wynajmu samochodów, oferujemy Państwu najwyższą jakość obsługi i niepowtarzalne doświadczenia, które będą wspomnieniem na całe życie. Nasza oferta jest niezwykle różnorodna i dostosowana do potrzeb klientów. Posiadamy w swojej flocie klasyczne Fury, eleganckie limuzyny oraz te nieokiełznane, piekielnie szybkie samochody, które dostarczą dawkę adrenaliny i emocji.</Text>
                    </>
                    <>
                        <Text textAlign={'justify'} mt={'1rem'}>Nasza nazwa mówi sama za siebie - Kozackie Fury to synonim prestiżu, szybkości i luksusu. Jesteśmy dumni z tego, co robimy i nie akceptujemy kompromisów. Nasza oferta jest przejrzysta i prosta, a umowy są jasne i zrozumiałe dla każdego. W Kozackie Fury nie tylko wynajmujemy samochody, ale tworzymy z naszymi klientami wyjątkową społeczność. Chcemy, aby każdy, kto zdecyduje się na nasze usługi, poczuł się jak w rodzinie. Nasze oferty są zawsze zindywidualizowane, by sprostać wymaganiom i oczekiwaniom każdego klienta </Text>
                    </>
                    <>
                       <Text textAlign={'justify'} mt={'1rem'}>Różne oferty wynajmu pozwalają dostosować usługę do indywidualnych potrzeb klienta. Możesz zdecydować się na samodzielne prowadzenie samochodu lub wynająć szofera, który zadba o Twoje bezpieczeństwo i wygodę.</Text>
                    </>
                    {/* <Text textAlign={'justify'} mt={'1rem'}>Dostarczamy nasze Fury do każdego miejsca wskazanego przez klienta, niezależnie od tego, gdzie odbywa się wydarzenie. Dzięki temu możemy zapewnić naszym klientom pełną swobodę i komfort podczas organizacji imprezy.Razem z naszymi klientami tworzymy coś więcej niż tylko wynajem - tworzymy wspomnienia, które pozostaną w pamięci na zawsze. Dlatego, jeśli szukasz niepowtarzalnej Fury, która spełni Twoje marzenia i oczekiwania, to Kozackie Fury są dla Ciebie idealnym wyborem.</Text>
                    <Text textAlign={'justify'} mt={'1rem'}>Celem naszej firmy na przyszłość jest nieustanny rozwój i odkrywanie nowych, nietuzinkowych obszarów. Będziemy dążyć do kreowania trendów oraz tworzenia ofert, które będą wyznaczać nowe granice i zawierać innowacyjne rozwiązania. Nasza nazwa odzwierciedla naszą determinację do bycia pionierami i eksploratorami w branży. Naszym celem jest stanie się liderem na rynku poprzez stały rozwój i nieustanne dążenie do doskonałości.</Text> */}
                </Box>
            </Flex>
            <Flex flex={1} justifyContent={'center'} alignItems={'center'} position={'relative'} w={'full'} mt={{base: '5rem', lg: '3rem'}} px={'2rem'}>
              <Flex>
              <Image src={logoKozackieFury.src} alt="logo" objectFit="cover" fill />
              </Flex>
            
                {/* <Blob
                    width={'100%'}
                    height={'100%'}
                    left={0}
                    zIndex={-1}
                    color={'rgb(163, 130, 58)'}
                /> */}
                {/* <Card position={'absolute'}  w={'70%'} h={'350px'} bg={'transparent'}>
                    <CardBody p={0} bg={'transparent'}>
                        <Image src={headerImg.src} alt='header logo' objectFit="cover"  layout='fill' style={{borderRadius: '2rem'}} />
                    </CardBody>
                </Card> */}
            </Flex>
        </Flex>
    </Container>
}

export const Blob = (props) => {
    return (
        <Icon
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="100%"
            id="blobSvg"
            filter="blur(qs0px)"
        
        {...props}>
  <image
    x="0"
    y="0"
    width="100%"
    height="100%"
    clip-path="url(#shape)"
    href={logoBlack.src}
    preserveAspectRatio="none"
  ></image>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor: "rgb(163, 130, 58)"}}></stop>
      <stop offset="100%" style={{stopColor: "rgb(163, 130, 58)"}}></stop>
    </linearGradient>
  </defs>
  <clipPath id="shape">
    <path id="blob" fill="url(#gradient)">
      <animate
        attributeName="d"
        dur="6000ms"
        repeatCount="indefinite"
        values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
      ></animate>
    </path>
  </clipPath>
        </Icon>
    );
};

export default About;
