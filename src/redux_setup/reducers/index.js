import { combineReducers } from 'redux';
import news from './news';
import newsFilter from './newsFilter';

export default combineReducers({
  news: news,
  newsFilter: newsFilter,
});