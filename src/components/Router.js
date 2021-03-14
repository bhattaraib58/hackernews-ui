import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import history from 'utils/history';

import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';

import noMatch from 'components/Pages/noMatch';
import PageView from 'components/Pages/pageView';
import CommentView from 'components/Pages/commentView';

/**
 * Top level application router.
 *
 * @returns {Component}
 */
const Router = () => {
  return (
    <main>
      <Header />

      <div className="page-content news-grid">
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path="/" component={PageView} />
            <Route path="/top" component={PageView} />
            <Route path="/best" component={PageView} />
            <Route path="/new" component={PageView} />
            <Route path="/item/:id" component={CommentView} />
            <Route path="/" component={noMatch} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </main>
  );
};

Router.propTypes = {};

export default Router;
