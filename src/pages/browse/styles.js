import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlayIcon from '../../assets/images/play.svg';
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  h1 {
    margin-bottom: 30px;
    display: flex;
    align-items: center;

    ${Spinner} {
      height: 30px;
      margin-left: 5px;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PlayList = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 250px;
  margin-left: 20px;
  margin-bottom: 20px;

  &:hover {
    background: url(${PlayIcon}) no-repeat center;
    background-size: 80px;
  }
  &:first-child {
    margin: 0;
  }
  img {
    height: 250px;
  }

  &:hover img {
    opacity: 0.5;
  }

  strong {
    padding: 4px 0 4px;
    color: #fff;
    font-size: 14px;
  }

  p {
    color: #b4b4b4;
    font-size: 12px;
  }
`;
