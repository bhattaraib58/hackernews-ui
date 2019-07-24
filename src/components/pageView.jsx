import React, { Component } from 'react';
import Story from './story';
import * as HTTPHelpers from '../services/Http/http';
import withRouterAndConnect from '../hoc/withRouterAndConnect';

class PageView extends Component {
  constructor(props) {
    super(props);

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.setNews();
  }

  componentDidUpdate(previousProps) {
    let currentLocation = this.props.location.pathname;
    let previousLocation = previousProps.location.pathname;

    if (currentLocation !== previousLocation) {
      this.setNews();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async setNews() {
    await this.props.setNewsFilter(this.props.location.pathname);
    let news = await HTTPHelpers.default.getAll(
      HTTPHelpers.BASE_URL + this.props.newsFilter
    );
    if (this._isMounted) {
      this.props.setNews(news.slice(0, 15));
    }
  }

  render() {
    return (
      <>
        {this.props.news.map((storyId, index) => (
          <Story storyId={storyId} key={storyId} index={index + 1} />
        ))}
      </>
    );
  }
}

export default withRouterAndConnect(PageView);
