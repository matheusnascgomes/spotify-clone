import styled, { css } from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  margin-top: 30px;

  ${Spinner} {
    height: 45px;
  }

  ${props => props.loading
    && css`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;

export const Info = styled.div`
  display: flex;

  img {
    width: 220px;
    height: 220px;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    .title {
      font-size: 11px;
      letter-spacing: 1.11px;
      color: #b3b3b3;
      text-transform: uppercase;
      font-weight: bold;
    }

    h1 {
      margin: 14px 0 8px;
    }
    .amount_songs {
      font-size: 10px;
      letter-spacing: 1.11px;
      color: #b3b3b3;
      text-transform: uppercase;
    }

    button {
      margin-top: 8px;
      border: 0;
      background-color: #1db954;
      color: #fff;
      padding: 11px 44px;
      border-radius: 500px;
      text-transform: uppercase;
    }
  }
`;

export const SongList = styled.table`
  width: 100%;
  margin-top: 16px;
  text-align: left;

  thead {
    font-size: 11px;
    text-transform: uppercase;
    color: #b3b3b3;
    letter-spacing: 1.11px;

    th {
      padding-bottom: 10px;
    }
  }

  tbody td {
    font-size: 11px;
    border-top: 1px solid #333333;
    padding: 10px 0 10px 0;
  }

  tbody tr:hover td {
    background: #282828;
  }
`;

export const SongItem = styled.tr`
  background: ${props => (props.selected ? '#282828' : 'transparent')};
  color: ${props => (props.selected ? '#1ED760' : '#FFF')};
`;
