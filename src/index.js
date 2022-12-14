import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {WagmiConfig, configureChains, defaultChains, chain, createClient} from 'wagmi'
import {publicProvider} from 'wagmi/providers/public'
import {BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import {ApolloProvider} from '@apollo/client'
import {apolloClient} from './graphql/apollo/apoloClient'
import {ChakraProvider} from '@chakra-ui/react'
const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
])

const client = createClient({
  provider,
  webSocketProvider,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ApolloProvider client={apolloClient}>
   
     <ChakraProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider> 
   
    </ApolloProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
