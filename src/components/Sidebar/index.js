import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Nav, NewPlayList } from './styles';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
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
            <li className="sidebar_item_content">
              <span>Paylists</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(item => (
              <li key={item.id}>
                <Link to={`/playlist/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlayList>
          <img src={AddPlayListIcon} alt="Adicionar playlist" />
          Nova Playlist
        </NewPlayList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
