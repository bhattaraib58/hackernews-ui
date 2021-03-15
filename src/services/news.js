import { get, interpolate } from 'utils/httpUtil';

import endpoints from 'constants/endpoints';

/**
 * Fetch All News By News Type.
 *
 * @param {string} newsType
 *
 * @returns {object}
 */
export async function getAllNews(newsType) {
  const url = interpolate(endpoints.news, { newsType });
  const { data } = await get(url);

  return data;
}
