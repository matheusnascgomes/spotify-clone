import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './styles/global';
import './config/reactotron';
import store from './store';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import Routes from './routes';

import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
