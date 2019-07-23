export const NEWS_ACTIONS = {
  SET_ALL_NEWS: 'SET_ALL_NEWS',
  ADD_NEWS: 'ADD_NEWS',
  EDIT_NEWS: 'EDIT_NEWS',
  DELETE_NEWS: 'DELETE_NEWS',
};

export const setNews = (news, isFetchSucessful = false) => ({
  type: NEWS_ACTIONS.SET_ALL_NEWS,
  payload: {
    isFetchSucessful: isFetchSucessful,
    news,
  }, //news array object
});

export const addNews = news => ({
  type: NEWS_ACTIONS.ADD_NEWS,
  news, //news object
});

export const editNews = (id, news) => ({
  type: NEWS_ACTIONS.EDIT_NEWS,
  id,
  news,
});

export const deleteNews = id => ({
  type: NEWS_ACTIONS.DELETE_NEWS,
  id,
});



export const NEWS_FILTERS = {
  TOP_STORIES: 'TOP_STORIES',
  NEW_STORIES: 'NEW_STORIES',
  BEST_STORIES: 'BEST_STORIES',
};

export const setNewsFilter = filter => ({
  type: 'SET_NEWS_FILTER',
  filter,
});
