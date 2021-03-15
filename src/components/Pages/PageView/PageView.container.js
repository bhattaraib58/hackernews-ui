/* eslint-disable require-jsdoc */
import { connect } from 'react-redux';
import { getAllNews } from 'reducers/newsReducer';

import Component from './PageView';

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    gettingAllNews: state.news.gettingAllNews,
    gettingAllNewsSuccess: state.news.gettingAllNewsSuccess,
    gettingAllNewsError: state.news.gettingAllNewsError
  };
};

const mapDispatchToProps = {
  getAllNews
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
