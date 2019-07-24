import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';

import * as ActionCreators from '../redux_setup/actions/index';

function mapStateToProps(state) {
  return {
    news: state.news,
    newsFilter: state.newsFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// compose(f, g, h) is the same as (...args) => f(g(h(...args)))
const withRouterAndConnect = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

export default withRouterAndConnect;