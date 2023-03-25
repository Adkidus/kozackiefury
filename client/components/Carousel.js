import React, {useState, useEffect} from 'react';
import { Box, IconButton, useBreakpointValue, Flex } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Image from 'next/image';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({images}) {
    const [cards, setCards] = useState([])
    const [slider, setSlider] = useState(null);

    const top = useBreakpointValue({ base: '90%', md: '45%' });
    const side = useBreakpointValue({ base: '50%', md: '15px' });

    useEffect(()=>{
        const arr = [];
        images.forEach(e => {
            arr.push(e.location)
        });
        setCards(arr)
    },[images])

    if(cards.length === 0)
        return <>Loading...</>

    return <Box
        flex={1}
        position={'relative'}
        width={'full'}
        overflow={'hidden'}>
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
{/* Left Icon */}
<IconButton
        display={images.length > 1 ? 'flex' : 'none'}
        aria-label="left-arrow"
        colorScheme="messenger"
        bgColor={'rgb(163, 130, 58)'}
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2} 
        onClick={() => slider?.slickPrev()}
        _hover={{
            bgColor:'rgb(163, 130, 58)'
        }}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        display={images.length > 1 ? 'flex' : 'none'}
        aria-label="right-arrow"
        colorScheme="messenger"
        bgColor={'rgb(163, 130, 58)'}
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        _hover={{
            bgColor:'rgb(163, 130, 58)'
        }}>
        <BiRightArrowAlt />
      </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((image, index) => <Box key={index}>
                <Box style={{width: '100%', height: '450px', position: 'relative'}}>
                <Image
                    alt={'image-' + index}
                    src={image}
                    objectFit={'contain'}
                    layout={'fill'}
                    />
                </Box>
            </Box>)}
        </Slider>
    </Box>
}