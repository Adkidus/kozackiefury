import React, {useEffect} from 'react';
import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import store from './store';
import { Provider } from 'react-redux';
import Routing from './routes/Routing';
import Fonts from './utils/fonts';

const Input = {
  variants: {
    goldInput: {
      field: {
        border: "1px solid rgb(163, 130, 58)",
        bg: '#000',
        borderRadius: 'xl',
        color: '#fff',
        _autofill: {
          border: "1px solid rgb(163, 130, 58)",
          bg: '#000',
        },
      },
    },
  },
  defaultProps: {
    variant: "goldInput",
  },
}

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: 'Advent Pro',
    body: 'Advent Pro',
  },
  components: {
    Input,
  },
  styles: {
    global: {
      'body': {
        background: 'linear-gradient(#000,#121111);',
        lineHeight: 'tall',
        minHeight: '100vh',
        color: '#fff',
        width: '100vw',
        overflowY: 'none',
      },
    },
  },
});

function App() {
  useEffect(() => {
    document.title = 'KOZACKIEFURY | PANEL';
  },[])
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Routing />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
