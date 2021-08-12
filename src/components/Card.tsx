import React from "react";

interface Props {
  imgSrc?: string;
  title?: string;
  description?: string;
}

export default class Card extends React.Component<Props> {
  render() {
    return (
      <div className="card-demo" style={{margin: '8px'}}>
        <div className="card" style={{height: '100%'}}>
          {this.props.imgSrc && (
            <div className="card__image">
              <img src={this.props.imgSrc} alt="Image alt text" />
            </div>
          )}
          <div className="card__body">
              {this.props.title && (
                <h4>{this.props.title}</h4>
              )}
              {this.props.description && (
                <small>
                    {this.props.description}
                </small>                  
              )}
          </div>
        </div>
      </div>
    );
  }
}
