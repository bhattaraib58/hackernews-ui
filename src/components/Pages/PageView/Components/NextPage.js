import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

import ROUTES from 'constants/routes';
import { ITEMS_PER_PAGE } from 'constants/numbers';

import { interpolate } from 'utils/httpUtil';

/**
 * Next Page Component.
 *
 * @param {*} props
 * @returns {Component}
 */
function NextPage({ newsType = '', page = '', news = [] }) {
  const currentPageNumber = parseInt(page);
  const pagesRemaining = parseInt(news?.length / (currentPageNumber * ITEMS_PER_PAGE)) || 0;

  if (pagesRemaining > 0) {
    const nextPageNumber = currentPageNumber + 1;
    const nextPageRoute = interpolate(ROUTES.NEWS_TYPE_WITH_PAGE, { newsType, page: nextPageNumber });

    return (
      <div className="mt-20 ml-40">
        <Link to={nextPageRoute}>More</Link>
      </div>
    );
  }

  return null;
}

NextPage.propTypes = {
  news: PropTypes.array,
  newsType: PropTypes.string,
  page: PropTypes.string
};

export default NextPage;
