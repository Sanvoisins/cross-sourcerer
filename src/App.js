import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/layout/common/header/header';
import UserComponent from './components/layout/user/UserComponent';
import RepositoriesComponent from './components/layout/repositories/RepositoriesComponent';
import OverviewComponent from './components/layout/overview/OverviewComponent';
import LanguageComponent from './components/layout/languages/LanguagesComponent';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_GITHUB_TOKEN
  }
});


const App = () => (
  <ApolloProvider client={client}>
  <Header/>
    <Container className="container h-100 d-flex justify-content-center align-items-center p-5">
      <div className="part">
        <UserComponent/>
      </div>
      <br/>
    </Container>
    <Container className="container h-100 d-flex justify-content-center align-items-center p-5">
      <div className="part">
        <OverviewComponent/>
      </div>
    </Container>
    <Container className="container h-100 d-flex justify-content-center align-items-center p-5">
      <div className="part">
        <LanguageComponent/>
      </div>
    </Container>
    <Container className="container h-100 d-flex justify-content-center align-items-center p-5">
      <div className="part">
        <RepositoriesComponent/>
      </div>
    </Container>
  </ApolloProvider>
);

export default App;
