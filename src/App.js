// import logo from "./logo.svg";
import "./App.css";
import Gnb from "./component/Gnb";
import AboutMe from "./component/AboutMe";
import PostCarousel from "./component/PostCarousel";

function App() {
  return (
    <div className="AppWrapper">
      <Gnb></Gnb>
      <div className="App">
        <AboutMe />
        <PostCarousel />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </div>
  );
}

export const DESKTOP_WIDTH = 1280;
export const DESKTOP_SMALL_WIDTH = 960;
export const TABLET_WIDTH = 768;

export default App;
