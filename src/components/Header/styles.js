import styled from "styled-components";

import SearchIcon from "../../assets/images/search.svg";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 0;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    border-radius: 12px;
    height: 24px;
    width: 175px;
    padding: 6px 7px 6px 26px;
    background: #fff url(${SearchIcon}) no-repeat 7px center;

    input {
        width: 100%;
        font-size: 13px;
        color: #121212;
        border: 0;
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 5px;
    }
`;
