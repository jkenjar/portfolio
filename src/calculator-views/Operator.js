import React from "react";

export default class Operator extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-outline-primary sm"
          onClick={() => this.props.onClick()}
        >
          {this.props.op}
        </button>
      </div>
    );
  }
}
