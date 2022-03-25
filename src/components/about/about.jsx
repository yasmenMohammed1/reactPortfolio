import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-space-between">
      {/* left section */}
      <div className="left d-flex  align-center col-6">
        this is rightٍ
        <div class=" a-card" style={{position:'relative'}}>
          <div className="card">
            <img
              src="https://ictacademy.com.ng/wp-content/uploads/2021/10/Front-End-Development-Tools.jpg"
              alt=""
              className="a-image"
            />
            <div class="card-body">
              <h5 class="card-title">Front-end Development</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right col-6">this is left</div>
    </div>
  );
};

export default About;
