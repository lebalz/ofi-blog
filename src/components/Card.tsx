import React from "react";
interface Props {
  imgSrc?: string;
  title?: string;
  description?: string;
  spacer?: boolean;
  justifyContent?: 'space-between' | 'start' | 'end'
}

export default class Card extends React.Component<Props> {
  render() {
    return (
      <div
        className="card-demo"
        style={{
          margin: "8px",
          flexBasis: "50px",
          flexGrow: 1,
        }}
      >
        <div
          className="card"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: this.props.justifyContent || "start",
          }}
        >
          {this.props.spacer && <div style={{flexGrow: 1}}></div>}
          {this.props.imgSrc && (
            <div className="card__image">
              <img src={this.props.imgSrc} alt="Image alt text" />
            </div>
          )}
          {this.props.spacer && <div style={{flexGrow: 1}}></div>}

          <div className="card__body">
            {this.props.title && <h4>{this.props.title}</h4>}
            {this.props.description && <small>{this.props.description}</small>}
          </div>
        </div>
      </div>
    );
  }
}
