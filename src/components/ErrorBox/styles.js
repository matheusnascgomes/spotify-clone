import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  margin: 20px 0 10px;
  padding: 0 20px;
  line-height: 42px;
  font-size: 13px;
  border-radius: 2px;
  background-color: #f55a5a;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background: transparent;

    p {
      color: rgba(0, 0, 0, 0.6);
      font-weight: bold;
    }
  }
`;
