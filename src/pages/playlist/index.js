import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Container, Info, SongList } from './styles';
import TimeIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import Loading from '../../components/Loading';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          }),
        ),
      }),
      loading: PropTypes.bool,
    }).isRequired,
  };
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails() {
    const playlist = this.props.playlistDetails.data;
    const { title, thumbnail, songs } = playlist;
    return (
      <Container>
        <Info>
          <img src={thumbnail} alt={title} />
          <div>
            <p className="title">Playlist</p>
            <h1>{title}</h1>
            {!!songs && <p className="amount_songs">{songs.length} Músicas</p>}

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
            {!songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música nesta playlist</td>
              </tr>
            ) : (
              songs.map(song => (
                <tr key={song.id}>
                  <td>
                    <img src={PlusIcon} alt="Tempo da música" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:00</td>
                </tr>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  }

  render() {
    const { loading } = this.props.playlistDetails;
    return loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
