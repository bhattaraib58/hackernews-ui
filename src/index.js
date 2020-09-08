import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/style/reset.css';
import './assets/style/style.css';
import './assets/style/responsive.css';

import store from './redux_setup/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
