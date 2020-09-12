import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import noMatch from './components/noMatch';
import PageView from './components/pageView';
import CommentView from './components/commentView';

function App() {
  return (
    <>
      <Header />
      <div className="page-content news-grid">
        <Switch>
          <Route exact path="/" component={PageView} />
          <Route path="/top" component={PageView} />
          <Route path="/best" component={PageView} />
          <Route path="/new" component={PageView} />
          <Route path="/item/:id" component={CommentView} />
          <Route component={noMatch} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
