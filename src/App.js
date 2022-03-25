import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Intro } from "./components/intro/intro";
import "./normalise.css";
import About from "./components/about/About";
const profilePhoto = require("./assets/images/profile.png");
function App() {
  return (
    <><div
      className="App "
      style={{
        backgroundColor: "white",
      }}
    >
      <Intro profilePhoto={profilePhoto}></Intro>
    </div><About></About></>
  );
}

export default App;
