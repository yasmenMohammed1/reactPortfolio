import "bootstrap/dist/css/bootstrap.min.css";

export const Intro = () => {
  return (
    <div
      class="bg-light d-flex justify-content-between"
      style={{ background: "linear-gradient(yellow,red)" }}
    >
      <div className="justifay-content-center p-5">
        <div className="i-intro">
          {" "}
          <div className="i-intrp-wrapper">my name</div>{" "}
        </div>
        <div className="i-intro">yasmena</div>
        <div className="job-title">
          <div className="i-title-wrapper"> Web Developer </div>
        </div>
      </div>
      <div>$50</div>
    </div>
  );
};
