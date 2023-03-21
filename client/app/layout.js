// app/layout.tsx
'use client'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Advent_Pro } from '@next/font/google'
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

export default function RootLayout({children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Box>
              <Navbar />
              {children}
            </Box>  
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}