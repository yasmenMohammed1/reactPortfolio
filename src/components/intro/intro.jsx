import "bootstrap/dist/css/bootstrap.min.css";
import "./intro.css";

export const Intro = (props) => {
  return (
    <div
      className="bg-light d-flex justify-content-center"
      style={{ background: "linear-gradient(#AFA6A0,#A8B1BA)" }}
    >
      <div
        className="justifay-content-center p-5 col-6 left"
        style={{
          color: "#493D41",
        }}
      >
        <div className="i-intro">
          <h1>yasmen mohammed</h1>
        </div>
        {/* job titiles section */}
        <div className="i-title">
          <div className="i-title-wrapper ">
            <div className="i-title-item justify-content-center">
              Web Developer
            </div>
            <div className="i-title-item justify-content-center">
              mobile-applicatio Designer
            </div>
          </div>
        </div>
        {/* description section */}
        <div className="i-description right-0">
          Hi, I am Yasmen Mohammed. I am looking to obtain a responsible and
          challenging Front End Developer position where my education and work
          experience will have valuable application.
        </div>
      </div>
      <div className="right col-6">
        <div className="i-bg"></div>
        <div className="right col-6"></div>
      </div>
    </div>
  );
};