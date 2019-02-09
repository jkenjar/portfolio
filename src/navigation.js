import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaCode, FaHome } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

export default class Navigation extends Component {
  render() {
    return (
      <div style={{ padding: "20px 20px 20px 20px" }}>
        <NavLink className="link" to="/">
          <FaHome style={{ color: "white", marginBottom: "5px" }} />
        </NavLink>
        <NavLink className="link" to="/calculator">
          Calculator
        </NavLink>
      </div>
    );
  }
}
