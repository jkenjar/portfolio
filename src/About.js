import React, { Component } from "react";
import List from "@material-ui/core/List";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="about-head">About Me</h1>
        <hr/>
        <div className="row">
          <div className="col-sm-6">
            <h4>Skillset :</h4>
            <p className="work-done">I have 11 months of FullStack Web Developer experience.</p>
            <p className="work-done">To find out more check out my LinkedIn.</p>
            <ul className="skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript -> jQuery, React, Nodejs, SuiteScript</li>
              <li>PHP -> Laravel)</li>
              <li>SQL -> SQLite, MySQL, Oracle </li>
              <li>Bootstrap</li>
              <li>Material-UI</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <h4>Projects/Relevant Links :</h4>
            <ul className="skills">
              <li>
                <a 
                  className="project" 
                  href="https://vampire-diaries-fans.netlify.com/"
                >
                  Vampire Diaries Fan Site
                </a>
              </li>
              <li>
                <a 
                  className="project" 
                  href="https://github.com/jkenjar"
                >
                  My Github
                </a>
              </li>
              <li>
                <a 
                  className="project" 
                  href="https://github.com/jkenjar"
                >
                  My LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div col-sm-6>
            <h4>
              Contact Me :
            </h4>
            <ul className="skills">
              <li>Phone: 314-828-0012</li>
              <li>EMail: newkenjar@gmail.com</li>
            </ul>
          </div>
          <div col-sm-6>
          </div>
        </div>
      </div>
    );
  }
}
