import { get, interpolate } from 'utils/httpUtil';

import endpoints from 'constants/endpoints';

/**
 * Fetch Single Item By Item Id.
 *
 * @param {string} itemId
 *
 * @returns {object}
 */
export async function getItem(itemId) {
  const url = interpolate(endpoints.item, { itemId });
  const { data } = await get(url);

  return data;
}
