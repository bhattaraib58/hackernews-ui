import React from 'react';

import styles from './Loading.module.css';

/**
 * Loading Component.
 *
 * @returns {Component}
 */
function Loading() {
  return (
    <div className={styles.loader}>
      <i className="fa fa-spinner fa-spin" />
    </div>
  );
}

export default Loading;
