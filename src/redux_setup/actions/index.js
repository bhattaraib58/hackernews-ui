export const NEWS_ACTIONS = {
  SET_ALL_NEWS: 'SET_ALL_NEWS',
  ADD_NEWS: 'ADD_NEWS',
  EDIT_NEWS: 'EDIT_NEWS',
  DELETE_NEWS: 'DELETE_NEWS'
};

export const setNews = (news, isFetchSucessful = false) => ({
  type: NEWS_ACTIONS.SET_ALL_NEWS,
  payload: {
    isFetchSucessful: isFetchSucessful,
    news
  } // news array object
});

export const addNews = (news) => ({
  type: NEWS_ACTIONS.ADD_NEWS,
  payload: {
    news
  } // news object
});

export const editNews = (id, news) => ({
  type: NEWS_ACTIONS.EDIT_NEWS,
  payload: {
    id,
    news
  }
});

export const deleteNews = (id) => ({
  type: NEWS_ACTIONS.DELETE_NEWS,
  payload: {
    id
  }
});

export const NEWS_FILTERS = {
  TOP_STORIES: '/top',
  NEW_STORIES: '/new',
  BEST_STORIES: '/best'
};

export const setNewsFilter = (filter) => ({
  type: 'SET_NEWS_FILTER',
  payload: {
    filter
  }
});
