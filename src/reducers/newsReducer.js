import { NEWS_ACTIONS } from '../redux_setup/actions';

// eslint-disable-next-line require-jsdoc
export const newsReducer = (state = [], action) => {
  switch (action.type) {
    case NEWS_ACTIONS.SET_ALL_NEWS:
      return [...action.payload.news];

    default:
      return state;
  }
};
