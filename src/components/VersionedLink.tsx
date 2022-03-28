import React from 'react';
import data from '@site/url_data.json';
import { baseUrl } from '../../docusaurus.config'


/**
 * use it like:
 * <VersionedLink url_locator="Programmieren 1.Turtles.001-intro.upload">Displayed Text</VersionedLink>
 */
interface Props {
  url_locator: string; /* e.g. "Programmieren 1.Turtles.001-intro.upload.<version> */
}

export default class VersionedLink extends React.Component<Props> {
  state = { courses: [], course: '' }

  constructor(props) {
    super(props);

    fetch('/versions.json')
      .then(response => response.json())
      .then(json => {
        this.setState({ courses: json })
      }).then(() => {
        this.setState({ course: this.getCourse() })
      });
  }

  getCourse() {
    const location = window.location.pathname.replace(baseUrl, '').split('/')[0];
    if (this.state.courses.includes(location)) {
      return location;
    }
  }

  url(): string | undefined {
    const parts = this.props.url_locator.split('.');
    if (!this.state.course) {
      return
    }
    parts.push(this.state.course)
    const url = parts.reduce((prev: object | string, current: string) => {
      if (!prev) {
        return;
      }
      if (typeof prev === 'object' && prev[current]) {
        return prev[current];
      }
      if (typeof prev === 'string') {
        return prev
      }
    }, data);
    if (typeof url === 'object') {
      return
    }
    return url;
  }


  render() {
    if (!this.url()) {
      if (!this.state.course) {
        return (
          <span className="badge badge--warning">{this.props.url_locator}</span>
        );
      }
      return (
        <span className="badge badge--danger">{this.props.url_locator}.{this.state.course}</span>
      )
    }
    return (
      <a href={this.url()}>{this.props.children ? this.props.children : this.url()}</a>
    )
  }
}