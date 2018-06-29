import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
    <Container>
        <Search>
            <input placeholder="Search" />
        </Search>
        <User>
            <img
                src="https://avatars2.githubusercontent.com/u/21980644?s=460&v=4"
                alt="user"
            />
            <small>Matheus Gomes</small>
        </User>
    </Container>
);

export default Header;
