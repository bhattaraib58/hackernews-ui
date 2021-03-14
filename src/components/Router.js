import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import history from 'utils/history';

import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';

// import PageView from 'components/Pages/pageView';
// import CommentView from 'components/Pages/commentView';
import PageNotFound from 'components/Pages/PageNotFound';

/**
 * Top level application router.
 *
 * @returns {Component}
 */
const Router = () => {
  return (
    <BrowserRouter history={history}>
      <Header />

      <div className="page-content news-grid">
        <Switch>
          {/* <Route exact path="/" component={PageView} /> */}
          {/* <Route path="/top" component={PageView} /> */}
          {/* <Route path="/best" component={PageView} /> */}
          {/* <Route path="/new" component={PageView} /> */}
          {/* <Route path="/item/:id" component={CommentView} /> */}

          <Route path="/" component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

Router.propTypes = {};

export default Router;
