import React from 'react';
import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import store from './store';
import { Provider } from 'react-redux';
import Routing from './utils/Routing';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  // fonts: {
  //   heading: adventPro.style.fontFamily,
  //   body: adventPro.style.fontFamily,
  // },
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

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Routing />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
