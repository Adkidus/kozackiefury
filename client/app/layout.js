// app/layout.tsx
'use client'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Advent_Pro } from '@next/font/google'
import '../styles/globals.css';
import Script from 'next/script'

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
      <Script id="gtagURL" strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-Y1Q1G1TB58"></Script>
      <Script id="gtag" strategy="lazyOnload" dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y1Q1G1TB58', {
            page_path: window.location.pathname,
          });`
        }}>
      </Script>
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