import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionCreators from './redux_setup/actions/index';
import Header from './components/header';

function mapStateToProps(state) {
  return {
    news: state.news,
    newsFilter: state.newsFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Header);
console.log(App);
export default App;
