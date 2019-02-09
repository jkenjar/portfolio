import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

export default class CalculatorHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: ""
    };
  }

  render() {
    return (
      <div className="hist">
        <Paper style={{ maxHeight: '355px', overflowY: 'scroll'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>History</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.expressions.map(exp => (
                <TableRow key={exp}>
                  <TableCell>{exp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Paper>
          <Button
            style={{
              marginLeft: "150px",
              backgroundColor: "#007bff",
              marginBottom: "10px",
              marginTop: "10px"
            }}
            onClick={() => this.props.resetHist()}
            variant="contained"
            color="primary"
          >
            Reset History
          </Button>
        </Paper>
      </div>
    );
  }
}
