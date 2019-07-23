import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux_setup/store';
import PageView from './components/pageView';

import './assets/style/reset.css';
import './assets/style/style.css';


ReactDOM.render(
  <Provider store={store}>
    <App>
      <PageView />
    </App>
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
