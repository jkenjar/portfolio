import React from "react";
import NumBox from "./NumBox.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Operator from "./Operator";
import TextField from '@material-ui/core/TextField';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calc-container">
        <div className="row in-row">
          <div className="col-md-12">
            <TextField
              className="calc-input"
              type="text"
              value={this.props.values}
              variant="outlined"
              style={{
                marginTop: '30px',
                marginBottom: '5px',
                width: '214px',
                marginLeft: '20px'
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <NumBox val="0" onClick={this.props.num} />
          </div>
          <div className="col-sm-3">
            <NumBox val="1" onClick={this.props.num} />
          </div>
          <div className="col-sm-3">
            <NumBox val="2" onClick={this.props.num} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <NumBox val="3" onClick={this.props.num} />
          </div>
          <div className="col-sm-3">
            <NumBox val="4" onClick={this.props.num} />
          </div>
          <div className="col-sm-3">
            <NumBox val="5" onClick={this.props.num} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <NumBox val="6" onClick={this.props.num} />
          </div>
          <div className="col-sm-3">
            <NumBox val="7" onClick={this.props.num} />
          </div>
          <div className="col-sm-3">
            <NumBox val="8" onClick={this.props.num} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <NumBox val="9" onClick={this.props.num} />
          </div>
          <div className="col-sm-3">
            <Operator
              op="+"
              className="btn btn-primary sm"
              onClick={this.props.add}
            />
          </div>

          <div className="col-sm-3">
            <Operator
              op="-"
              className="btn btn-primary sm"
              onClick={this.props.minus}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <Operator
              op="="
              className="btn btn-primary sm"
              onClick={this.props.equals}
            />
          </div>
          <div className="col-sm-3">
            <Operator
              op="c"
              className="btn btn-primary sm"
              onClick={this.props.reset}
            />
          </div>
          <div className="col-sm-3">
            <Operator
              op="x"
              className="btn btn-primary sm"
              onClick={this.props.multiply}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <Operator
              op="/"
              className="btn btn-primary sm"
              onClick={this.props.divide}
            />
          </div>
          <div className="col-sm-3">
            <Operator
              op="m-"
              className="btn btn-primary sm"
              onClick={this.props.negative}
            />
          </div>
          <div className="col-sm-3">
            <Operator
              op="m+"
              className="btn btn-primary sm"
              onClick={this.props.positive}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <Operator
              op="."
              className="btn btn-primary sm"
              onClick={this.props.decimal}
            />
          </div>
          <div className="col-sm-3">
            <Operator
              op="%"
              className="btn btn-primary sm"
              onClick={this.props.percent}
            />
          </div>
          <div className="col-sm-3">
            <Operator
              op="Power"
              className="btn btn-primary sm"
              onClick={this.props.exponent}
            />
          </div>
        </div>
      </div>
    );
  }
}
