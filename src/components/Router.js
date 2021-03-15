import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import history from 'utils/history';
import ROUTES from 'constants/routes';

import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';

import PageView from 'components/Pages/PageView';
import PageNotFound from 'components/Pages/PageNotFound';
// import CommentView from 'components/Pages/commentView';

/**
 * Top level application router.
 *
 * @returns {Component}
 */
const Router = () => {
  return (
    <BrowserRouter history={history}>
      <div className="body-container mt-10 mb-10">
        <Header />

        <Switch>
          <Route exact path={[ROUTES.HOME, ROUTES.NEWS_TYPE, ROUTES.NEWS_TYPE_WITH_PAGE]} component={PageView} />
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
