import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
interface Props {
  src: string;
  type?: 'mp4'
}

export default class Video extends React.Component<Props> {
  state = { open: false }

  onClick = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    if (this.state.open) {
      return (
        <div>
          <button
            className="button button--sm button--outline button--secondary"
            style={{ float: "right" }} onClick={this.onClick}
          >
            <FontAwesomeIcon icon={faWindowMinimize} />
          </button>
          <video controls autoPlay width="100%" loop>
            <source src={this.props.src} type={`video/${this.props.type || 'mp4'}`} />
          </video>
        </div>
      );
    }
    return (
      <button
        className="button button--block button--outline button--secondary"
        onClick={this.onClick}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>Video</div>
        <video autoPlay height="150px" loop>
          <source src={this.props.src} type={`video/${this.props.type || 'mp4'}`} />
        </video>
      </button>
    );
  }
}