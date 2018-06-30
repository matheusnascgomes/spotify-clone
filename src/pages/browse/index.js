import React from 'react';

import { Container, List, PlayList } from './styles';

const Browse = () => (
  <Container>
    <h1>Navegar</h1>
    <List>
      <PlayList to="playlist/1">
        <img src="http://assets.blabbermouth.net/media/systemofadown2014band_638.jpg" alt="SOAD" />
        <strong>Bagunça Gringa</strong>
        <p>Só as melhores do rock americano</p>
      </PlayList>
      <PlayList to="playlist/1">
        <img src="http://assets.blabbermouth.net/media/systemofadown2014band_638.jpg" alt="SOAD" />
        <strong>Bagunça Gringa</strong>
        <p>Só as melhores do rock americano</p>
      </PlayList>
      <PlayList to="playlist/1">
        <img src="http://assets.blabbermouth.net/media/systemofadown2014band_638.jpg" alt="SOAD" />
        <strong>Bagunça Gringa</strong>
        <p>Só as melhores do rock americano</p>
      </PlayList>
      <PlayList to="playlist/1">
        <img src="http://assets.blabbermouth.net/media/systemofadown2014band_638.jpg" alt="SOAD" />
        <strong>Bagunça Gringa</strong>
        <p>Só as melhores do rock americano</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
