import React from "react";

import { Container, Nav, NewPlayList } from "./styles";

import AddPlayListIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
    <Container>
        <div>
            <Nav main>
                <li>
                    <a href="">Navegar</a>
                </li>
                <li>
                    <a href="">Radio</a>
                </li>
            </Nav>
            <Nav>
                <li>
                    <span>Naveação</span>
                </li>
                <li>
                    <a href="">Seu Daily Mix</a>
                </li>
                <li>
                    <a href="">Tocados Recentemente</a>
                </li>
                <li>
                    <a href="">Albuns</a>
                </li>
                <li>
                    <a href="">Artistas</a>
                </li>
                <li>
                    <a href="">Vídeos</a>
                </li>
                <li>
                    <a href="">Podcasts</a>
                </li>
            </Nav>
            <Nav>
                <li>
                    <span>Paylists</span>
                </li>
                <li>
                    <a href="">Bagunça Gringa</a>
                </li>
                <li>
                    <a href="">Popzinho</a>
                </li>
            </Nav>
        </div>
        <NewPlayList>
            <img src={AddPlayListIcon} alt="Adicionar playlist" />
            Nova Playlist
        </NewPlayList>
    </Container>
);

export default Sidebar;
