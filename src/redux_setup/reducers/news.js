import { NEWS_ACTIONS } from '../actions';

const news = (state = [], action) => {
  switch (action.type) {
    case NEWS_ACTIONS.SET_ALL_NEWS:
      return [...action.payload.news];

    default:
      return state;
  }
};

export default news;
