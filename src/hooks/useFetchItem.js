import { useState, useEffect } from 'react';

import { getItem } from 'services/item';

/**
 * Use Fetch Item Custom Hook.
 * Fetch And Get Data By passing ItemId.
 *
 * @param {number} itemId
 * @returns {Component}
 */
function useFetchItem(itemId) {
  const [item, setItem] = useState(null);
  const [gettingItem, setGettingItem] = useState(true);
  const [gettingItemError, setGettingItemError] = useState(null);
  const [gettingItemSuccess, setGettingItemSuccess] = useState(false);

  useEffect(() => {
    if (!itemId) {
      return;
    }

    /**
     * Fetch Item Data based on itemId.
     *
     */
    async function fetchData() {
      try {
        setGettingItem(true);
        const item = await getItem(itemId + '.json');

        setItem(item);
        setGettingItem(false);
        setGettingItemError(null);
        setGettingItemSuccess(true);
      } catch (error) {
        setGettingItem(false);
        setGettingItemSuccess(false);
        setGettingItemError(error?.message || 'Error Fetching Comment');
      }
    }

    fetchData();
  }, [itemId]);

  return {
    item,
    gettingItem,
    gettingItemError,
    gettingItemSuccess
  };
}

export default useFetchItem;
