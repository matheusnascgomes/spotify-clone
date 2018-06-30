import React from 'react';

import { Container, Info, SongList } from './styles';
import TimeIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Info>
      <img src="http://assets.blabbermouth.net/media/systemofadown2014band_638.jpg" alt="SOAD" />
      <div>
        <p className="title">Playlist</p>
        <h1>Bagunça Gringa</h1>
        <p className="amount_songs">13 Músicas</p>
        <button type="submit">Play</button>
      </div>
    </Info>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={TimeIcon} alt="Tempo da música" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Tempo da música" />
          </td>
          <td>BIOB</td>
          <td>SOAD</td>
          <td>Toxicity</td>
          <td>3:00</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Tempo da música" />
          </td>
          <td>BIOB</td>
          <td>SOAD</td>
          <td>Toxicity</td>
          <td>3:00</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Tempo da música" />
          </td>
          <td>BIOB</td>
          <td>SOAD</td>
          <td>Toxicity</td>
          <td>3:00</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Tempo da música" />
          </td>
          <td>BIOB</td>
          <td>SOAD</td>
          <td>Toxicity</td>
          <td>3:00</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Tempo da música" />
          </td>
          <td>BIOB</td>
          <td>SOAD</td>
          <td>Toxicity</td>
          <td>3:00</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Tempo da música" />
          </td>
          <td>BIOB</td>
          <td>SOAD</td>
          <td>Toxicity</td>
          <td>3:00</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
