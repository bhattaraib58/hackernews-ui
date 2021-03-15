import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import appConfig from 'appConfig';

import rootSaga from 'sagas';
import { newsReducer } from 'reducers/newsReducer';

const persistConfig = {
  news: {
    key: 'news',
    storage,
    whitelist: ['news']
  }
};

const rootReducer = combineReducers({
  news: persistReducer(persistConfig.news, newsReducer)
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Add new middleware here
const customMiddleWare = [sagaMiddleware];

const store = configureStore({
  devTools: appConfig.devMode,
  middleware: [...customMiddleWare],
  reducer: rootReducer
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
