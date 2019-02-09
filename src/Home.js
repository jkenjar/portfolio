import React, { Component } from "react";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="home-page-container">
        <h1 style={{ marginTop: "10px", marginRight: "10px" }}>
          Code made easy.
          <FaCode
            style={{
              height: "50px",
              width: "50px",
              color: "#FF4136"
            }}
          />
        </h1>
        <div className="row home-row">
          <div className="col-sm-6 home-col">
            <div className="home-panel-one panel panel-default">
              <div className="panel-body">
                <p>
                  This website is meant to serve as a portfolio for myself to
                  demonstrate single page web pages with skills such as
                  JavaScript/React, HTML5, CSS3, Bootstrap and even possibly
                  some back-end skills like Node.js. My goal is to land my first
                  web developer job as soon as possible.
                </p>
                <NavLink className="about-link learn" to="/about">
                  Learn More
                </NavLink>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
