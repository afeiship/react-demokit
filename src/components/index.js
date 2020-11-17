import NxOfflineSw from '@jswork/next-offline-sw';
import ReactGithubCorner from '@jswork/react-github-corner';
import ReactSwUpdateTips from '@jswork/react-sw-update-tips';
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
    url: PropTypes.string,
    /**
     * The compoennt name.
     */
    title: PropTypes.string,
    /**
     * The component description.
     */
    description: PropTypes.string,
    /**
     * Main element.
     */
    element: PropTypes.element
  };

  static defaultProps = {
    element: <img width="160" src="https://create-react-app.dev/img/logo.svg" />
  };

  state = { hasUpdate: false };

  componentDidMount() {
    NxOfflineSw.install({
      onUpdateReady: () => {
        this.setState({ hasUpdate: true });
      }
    });
  }

  render() {
    const {
      className,
      children,
      element,
      url,
      title,
      description,
      ...props
    } = this.props;

    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <header className="is-header">
          {element}
          <h1>{title}</h1>
          <h2>{description}</h2>
        </header>
        <div className="is-body">{children}</div>
        <ReactSwUpdateTips value={this.state.hasUpdate} />
        <ReactGithubCorner value={url} />
        <footer className="is-footer">v{ReactDemokit.version}</footer>
      </div>
    );
  }
}
