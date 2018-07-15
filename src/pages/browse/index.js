import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from '../../components/Loading';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, List, PlayList } from './styles';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';

class Browse extends Component {
  static PropTypes = {
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
        <h1>Navegar {this.props.playlists.loading && <Loading />}</h1>
        <List>
          {this.props.playlists.data.map(item => (
            <PlayList key={item.id} to={`playlist/${item.id}`}>
              <img src={item.thumbnail} alt={item.title} />
              <strong>{item.title}</strong>
              <p>S{item.description}</p>
            </PlayList>
          ))}
        </List>
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
)(Browse);
