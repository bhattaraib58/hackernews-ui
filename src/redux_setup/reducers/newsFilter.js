import { NEWS_FILTERS } from '../actions';

const newsFilter = (stories = 'topstories.json', action) => {

  switch (action.type) {
    case NEWS_FILTERS.TOP_STORIES:
      return 'topstories.json';

    case NEWS_FILTERS.NEW_STORIES:
      return 'newstories.json';

    case NEWS_FILTERS.BEST_STORIES:
      return 'beststories.json';

    default:
      return stories;
  }

};

export default newsFilter;
