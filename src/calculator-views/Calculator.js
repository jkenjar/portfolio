import React from "react";
import CalculatorLayout from "./CalculatorLayout";
import math from "mathjs";
import CalculatorHistory from "./CalculatorHistory";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: "",
      expressions: [
        "Calculator history will show here.",
        "Just enter an expression!",
        "Finally click equals."
      ]
    };
    this.add = this.add.bind(this);
  }

  num = key => {
    this.setState({
      values: this.state.values + key
    });
  };

  negative = () => {
    var oldValues = this.state.values;
    var len = this.state.values.length;
    var index;

    for (var i = len - 1; i >= 0; i--) {
      if (
        (oldValues.charAt(i) == "-" || oldValues.charAt(i) == " ") &&
        oldValues.charAt(i - 1) != "e"
      ) {
        index = i;
        break;
      }
    }

    if (index == undefined) {
      if (
        typeof Number(oldValues) == "number" &&
        oldValues[0] != "-" &&
        oldValues[len - 1] != " "
      ) {
        console.log("Hey");
        this.setState({
          values: String(Number(oldValues) * -1)
        });
      }
    } else {
      if (oldValues[index] != "-" && oldValues[len - 1] != " ") {
        index = index + 1;
        this.setState({
          values:
            oldValues.slice(0, index) + Number(oldValues.slice(index, len)) * -1
        });
      }
    }
  };

  positive = () => {
    var checkForNeg = this.state.values;
    var len = this.state.values.length;
    var index;
    var neg;
    var newValues;

    for (var i = len - 1; i >= 0; i--) {
      if (checkForNeg.charAt(i) == "-" && checkForNeg.charAt(i - 1) != "e") {
        index = i;
        break;
      }
    }
    if (index != undefined) {
      neg = Number(checkForNeg.slice(index, len));
      if (typeof Number(neg) == "number" && neg < 0) {
        neg = neg * -1;
        newValues = checkForNeg.slice(0, index) + neg;
        this.setState({
          values: newValues
        });
      }
    }
  };

  decimal = () => {
    let oldValues = String(this.state.values);
    let len = this.state.values.length;
    let lastVal = oldValues[len - 1];
    let hasDecimal = false;
    let hasE = false;
    let index;
    if (oldValues) {
      if (String(oldValues).includes("e")) {
        hasE = true;
      } else {
        for (let i = len - 1; i >= 0; i--) {
          if (oldValues.charAt(i) === " " || oldValues.charAt(i) === ".") {
            index = i;
            break;
          }
        }
      }
    }

    if (
      !index &&
      String(lastVal) !== " " &&
      typeof Number(lastVal) === "number" &&
      !hasE
    ) {
      console.log("Hey");
      hasDecimal = oldValues.includes(".");
      if (!hasDecimal) {
        this.setState({
          values: oldValues + "."
        });
      }
    }
  };

  add = () => {
    let lastVal = this.state.values[this.state.values.length - 1];
    if (
      this.state.values &&
      typeof Number(lastVal) == "number" &&
      String(lastVal) != " " &&
      String(lastVal) != "."
    ) {
      this.setState({
        values: this.state.values + " + "
      });
    }
  };

  minus = () => {
    let lastVal = this.state.values[this.state.values.length - 1];
    if (
      this.state.values &&
      typeof Number(lastVal) == "number" &&
      String(lastVal) != " " &&
      String(this.state.values[this.state.values.length - 1]) != "."
    ) {
      this.setState({
        values: this.state.values + " - "
      });
    }
  };

  multiply = () => {
    let lastVal = this.state.values[this.state.values.length - 1];
    if (
      this.state.values &&
      typeof Number(lastVal) == "number" &&
      String(lastVal) != " " &&
      String(this.state.values[this.state.values.length - 1]) != "."
    ) {
      this.setState({
        values: this.state.values + " * "
      });
    }
  };

  reset = () => {
    this.setState({
      values: ""
    });
  };

  divide = () => {
    let lastVal = this.state.values[this.state.values.length - 1];
    if (
      this.state.values &&
      typeof Number(lastVal) == "number" &&
      String(lastVal) != " " &&
      String(this.state.values[this.state.values.length - 1]) != "."
    ) {
      this.setState({
        values: this.state.values + " / "
      });
    }
  };

  percent = () => {
    let oldValues = this.state.values;
    let index;
    let isNegative = false;
    if (oldValues) {
      let len = oldValues.length;
      let lastVal = oldValues[len - 1];
      for (let i = len - 1; i >= 0; i--) {
        if (oldValues.charAt(i) === " " || oldValues.charAt(i) === "-") {
          index = i;
          if (oldValues.charAt(i) === "-") {
            isNegative = true;
          }
          break;
        }
      }
      if (
        index === undefined &&
        lastVal !== " " &&
        lastVal !== "." &&
        typeof Number(lastVal) == "number"
      ) {
        this.setState({
          values: Number(oldValues) / 100
        });
      } else if (
        index !== undefined &&
        lastVal !== " " &&
        lastVal !== "." &&
        typeof Number(lastVal) == "number"
      ) {
        if (isNegative) {
          this.setState({
            values:
              oldValues.slice(0, index) +
              (Number(oldValues.slice(index + 1, len)) / 100) * -1
          });
        } else {
          this.setState({
            values:
              oldValues.slice(0, index) +
              " " +
              Number(oldValues.slice(index + 1, len)) / 100
          });
        }
      }
    }
  };

  exponent = () => {
    let lastVal = this.state.values[this.state.values.length - 1];
    if (
      this.state.values &&
      typeof Number(lastVal) == "number" &&
      String(lastVal) != " " &&
      String(this.state.values[this.state.values.length - 1]) != "."
    ) {
      this.setState({
        values: this.state.values + " ^ "
      });
    }
  };

  equals = () => {
    let calcValues = this.state.values;
    let lastVal;
    if (this.state.values[calcValues.length - 1] != " " && calcValues) {
      lastVal = Number(this.state.values[calcValues.length - 1]);
      if (
        calcValues.includes("+") ||
        calcValues.includes(" - ") ||
        calcValues.includes("*") ||
        calcValues.includes("^") ||
        (calcValues.includes("/") &&
          (typeof lastVal == "number" &&
            this.state.values[calcValues.length - 1] != "."))
      ) {
        this.setState({
          values: String(math.eval(this.state.values)),
          expressions: []
        });
        if (this.state.values != "") {
          this.setState({
            expressions: [
              ...this.state.expressions,
              calcValues + " = " + math.eval(this.state.values)
            ]
          });
        }
      }
    }
  };

  resetHist = () => {
    if (this.state.expressions.length > 1) {
      this.setState({
        expressions: [
          "Calculator history will show here.",
          "Just enter an expression!",
          "Finally click equals."
        ]
      });
    }
  };

  render() {
    return (
      <div className="container widgets" style={{ marginTop: "10px" }}>
        <div className="row page-row">
          <div className="col-sm-4">
            <CalculatorLayout
              values={this.state.values}
              num={this.num}
              add={this.add}
              minus={this.minus}
              equals={this.equals}
              reset={this.reset}
              multiply={this.multiply}
              divide={this.divide}
              negative={this.negative}
              positive={this.positive}
              decimal={this.decimal}
              percent={this.percent}
              exponent={this.exponent}
            />
          </div>
          <div className="col-sm-4">
            {this.state.expressions.length && (
              <CalculatorHistory
                resetHist={this.resetHist}
                expressions={this.state.expressions}
              />
            )}
          </div>

          <div className="col-sm-4">
            <Paper>
              <List>
                <ListItem divider={true} className="list-header">
                  <ListItemText className="list-header-text">
                    <strong>Skills Used</strong>
                  </ListItemText>
                </ListItem>
                <ListItem divider={true}>
                  <ListItemText>HTML</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>CSS/Bootstrap</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    JavaScript (React, mathjs, Material-UI)
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
