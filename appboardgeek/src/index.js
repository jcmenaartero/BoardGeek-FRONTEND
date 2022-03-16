import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3026/graphql'
  })
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);