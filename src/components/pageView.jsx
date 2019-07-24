import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Story from './story';
import * as HTTPHelpers from '../services/Http/http';
import withRouterAndConnect from '../hoc/withRouterAndConnect';

class PageView extends Component {
  constructor(props) {
    super(props);

    this.currentPageNumber = 1;
    this.itemsPerPage = 30;
    this._isMounted = false;
    this.displayNextPage = this.displayNextPage.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.setNews();
  }

  componentDidUpdate(previousProps) {
    let currentLocation = this.props.location.pathname;
    let previousLocation = previousProps.location.pathname;

    if (currentLocation !== previousLocation && this._isMounted) {
      window.scrollTo(0, 0);
      this.setNews();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  displayNextPage() {
    let pagesRemaining =
      this.props.news.length / (this.currentPageNumber * this.itemsPerPage);
    if (parseInt(pagesRemaining) > 0) {
      let path = this.props.match.path;
      if (path === '/') {
        path = '/top';
      }
      return (
        <div className="next-page">
          <Link to={path + '/' + (this.currentPageNumber + 1)}>More</Link>
        </div>
      );
    }
    return null;
  }

  setCurrentPage() {
    let currentLocation = this.props.location.pathname;
    let paths = currentLocation.split('/');
    if (paths[2]) {
      this.currentPageNumber = parseInt(paths[2]);
    } else {
      this.currentPageNumber = 1;
    }
  }

  async setNews() {
    this.setCurrentPage();
    await this.props.setNewsFilter(this.props.match.path);
    let news = await HTTPHelpers.default.getAll(
      HTTPHelpers.BASE_URL + this.props.newsFilter
    );
    if (this._isMounted) {
      this.props.setNews(news);
    }
  }

  render() {
    return (
      <>
        {this.props.news
          .slice(
            (this.currentPageNumber - 1) * this.itemsPerPage,
            this.currentPageNumber * this.itemsPerPage
          )
          .map((storyId, index) => (
            <Story
              storyId={storyId}
              key={storyId}
              index={
                (this.currentPageNumber - 1) * this.itemsPerPage + index + 1
              }
            />
          ))}
        {this.displayNextPage()}
      </>
    );
  }
}

export default withRouterAndConnect(PageView);
