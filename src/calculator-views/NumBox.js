import React from "react";

export default class NumBox extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-outline-primary sm"
          onClick={() => this.props.onClick(this.props.val)}
        >
          {this.props.val}
        </button>
      </div>
    );
  }
}
