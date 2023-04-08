import React, { Component } from "react";
import Rj from "./ranjeet photo.jpg";

export default class About extends Component {
  mystyle = {
    width: "40%",
    height: "30%",
  };

  render() {
    return (
      <div className="container text-center my-3">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
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
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body" style={{ background: "gray" }}>
                <div class="d-flex justify-content-between">
                  <img src={Rj} alt="rj" style={this.mystyle} />
                  <div className="container mx-3">
                    <p class="lead text-light">
                      Hello Recruiter, My name is Ranjeet Prasad, and I am a
                      3rd-year student pursuing ECE at Delhi Technological
                      University. Although I am an electronics student, my
                      passion and interest lie entirely in the field of computer
                      science. I have recently designed and developed a new
                      website, which has allowed me to showcase my skills and
                      love for computer science. I have a strong foundation in
                      computer fundamentals, data structures, and algorithms,
                      which I have gained through my self-learning and academic
                      courses. Along with that, I have practical experience in
                      React framework, which has allowed me to develop my web
                      development skills. I have worked on several projects and
                      have gained expertise in creating responsive,
                      user-friendly, and interactive websites. I have a keen
                      interest in working in a team environment, and I believe
                      that collaboration leads to innovative ideas and
                      successful outcomes. I am always enthusiastic about taking
                      on new challenges and learning from my team members. My
                      technical skills combined with my ability to work well in
                      a team make me an ideal candidate for any software
                      development position. I am confident that I will be a
                      valuable addition to any team, and I am excited about
                      exploring new opportunities. Thank you for considering my
                      application. Best Regards,<b>Ranjeet Prasad.</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
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
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
              style={{ background: "pink" }}
            >
              <div class="d-flex justify-content-center my-5 container mx-3">
                <a href="https://wa.link/3n2u69">
                  <i class="fa-brands fa-whatsapp fa-fade fa-2xl mx-3 "></i>
                </a>
                <a href="https://www.instagram.com/ranjeet_r.j_/">
                  <i class="fa-brands fa-instagram fa-fade fa-2xl mx-3 "></i>
                </a>
                <a href="https://www.linkedin.com/in/ranjeet-prasad-235115206/">
                  <i class="fa-brands fa-linkedin fa-fade fa-2xl mx-3 "></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100038181072171">
                  <i class="fa-brands fa-facebook fa-fade fa-2xl mx-3 "></i>
                </a>
                <address>
                  <a href="mailto:ranjeet16pd@.com">
                    <i class="fa-brands fa-envelope fa-fade fa-2xl mx-3 "></i>
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
