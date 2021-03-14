import 'assets/style/reset.css';
import 'assets/style/style.css';
import 'assets/style/responsive.css';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from 'components/Router';
import ErrorBoundary from 'components/pages/ErrorBoundary';

import store, { persistor } from 'store';

/**
 * App Component.
 *
 * @returns {Component}
 */
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default App;
