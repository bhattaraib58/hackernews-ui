import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

import appConfig from 'appConfig';

import styles from './ErrorBoundary.module.css';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.messageWrapper}>
            <h2 className={styles.header}>Opps !!! Something Went Wrong</h2>

            {appConfig.devMode ? (
              <p className={styles.subText}>Please refer below for further information</p>
            ) : (
              <p className={styles.subText}>
                Please refresh your page. If you are still encountering this error, please contact us at{' '}
                <a className={styles.email} href={`mailto:test@gmail.com`}>
                  test@gmail.com
                </a>
              </p>
            )}
          </div>

          {appConfig.devMode && <p className={styles.errors}> {this.state.error?.toString()} </p>}
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};
