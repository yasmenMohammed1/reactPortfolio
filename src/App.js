import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Intro} from './components/intro/intro'
import './normalise.css'
function App() {
  return (
    <div
      className="App "
      style={{
        backgroundColor: "white",
      }}
    >
    <Intro></Intro>
  </div>)
}
  
export default App;
