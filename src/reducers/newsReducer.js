import { createReducer, createAction } from '@reduxjs/toolkit';

export const getAllNews = createAction('GET_ALL_NEWS/REQUEST');
export const getAllNewsSuccess = createAction('GET_ALL_NEWS/SUCCESS');
export const getAllNewsFailure = createAction('GET_ALL_NEWS/FAILURE');

const initialState = {
  news: [],
  gettingAllNews: false,
  gettingAllNewsSuccess: false,
  gettingAllNewsError: null
};

export const newsReducer = createReducer(initialState, {
  [getAllNews]: (state) => {
    state.gettingAllNews = true;
    state.gettingAllNewsSuccess = false;
    state.gettingAllNewsError = null;
  },
  [getAllNewsSuccess]: (state, action) => {
    const news = Object.values(action.payload?.news || {});

    state.news = news;
    state.gettingAllNews = false;
    state.gettingAllNewsSuccess = true;
    state.gettingAllNewsError = null;
  },
  [getAllNewsFailure]: (state, action) => {
    state.gettingAllNews = false;
    state.gettingAllNewsSuccess = false;
    state.gettingAllNewsError = action.payload;
  }
});
