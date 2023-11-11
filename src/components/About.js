import React, { Component } from "react";
import Rj from "./ranjeet photo.jpg";

export default class About extends Component {
  mystyle = {
    width: "20%",
    height: "18%",
  };

  render() {
    return (
      <div className="container text-center my-3">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>About Me</strong>
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body" style={{ background: "black" }}>
                <div className="d-flex justify-content-between">
                  <img src={Rj} alt="rj" style={this.mystyle} />
                  <div className="container mx-3">
                    <p className="lead text-light">
                      Meet Ranjeet, an experienced front-end engineer
                      specializing in React.js. Currently in his fourth year at
                      Delhi Technological University, he brings a unique blend
                      of technical skills and a passion for web development.
                      With a solid foundation in programming and a deep
                      understanding of electronics, Ranjeet creates engaging
                      user interfaces. Collaborative and constantly seeking
                      growth, he stays up-to-date with industry trends to
                      deliver exceptional front-end solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {" "}
                  <strong>Social Media Handles</strong>
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
              style={{ background: "black" }}
            >
              <div className="d-flex justify-content-center my-5 container mx-3">
                <a href="https://wa.link/3n2u69">
                  <i className="fa-brands fa-whatsapp fa-fade fa-2xl mx-3 "></i>
                </a>
                <a href="https://www.instagram.com/ranjeet_r.j_/">
                  <i className="fa-brands fa-instagram fa-fade fa-2xl mx-3 "></i>
                </a>
                <a href="https://www.linkedin.com/in/ranjeet-prasad-235115206/">
                  <i className="fa-brands fa-linkedin fa-fade fa-2xl mx-3 "></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100038181072171">
                  <i className="fa-brands fa-facebook fa-fade fa-2xl mx-3 "></i>
                </a>
                <address>
                  <a href="mailto:ranjeet16pd@.com">
                    <i className="fa-brands fa-envelope fa-fade fa-2xl mx-3 "></i>
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
