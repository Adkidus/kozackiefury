import LayoutWrapper from '@/layouts/LayoutWrapper';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Advent_Pro, Lato } from '@next/font/google'
import '../styles/globals.css';

const adventPro = Advent_Pro({ subsets: [ 'cyrillic' ] })

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: adventPro.style.fontFamily,
    body: adventPro.style.fontFamily,
  },
  styles: {
    global: {
      'body': {
        background: 'linear-gradient(#000,#121111);',
        lineHeight: 'tall',
        minHeight: '100vh',
        color: '#fff',
        width: '100vw',
        overflowY: 'none'
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  )
}

export default MyApp