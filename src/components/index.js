import NxOfflineSw from '@feizheng/next-offline-sw';
import ReactGithubCorner from '@feizheng/react-github-corner';
import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-demokit';

export default class ReactDemokit extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The github homepage url.
     */
    url: PropTypes.string
  };

  static defaultProps = {};

  state = { hasUpdate: false };

  componentDidMount() {
    NxOfflineSw.install({
      onUpdateReady: () => {
        this.setState({ hasUpdate: true });
      }
    });
  }

  render() {
    const { className, children, url, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <div className="is-body">{children}</div>
        <ReactSwUpdateTips value={this.state.hasUpdate} />
        <ReactGithubCorner value={url} />
        <footer className="is-footer">v{ReactDemokit.version}</footer>
      </div>
    );
  }
}
