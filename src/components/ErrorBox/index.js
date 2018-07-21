import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { Creators as ErrorActions } from '../../store/ducks/error';

const ErrorBox = ({ error: { message, visible }, hideMessage }) => visible && (
<Container>
  <p>{message}</p>
  <button onClick={hideMessage} type="submit">
    <p>Close</p>
  </button>
</Container>
);

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
