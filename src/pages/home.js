// import logo from "./logo.svg";
import AboutMe from "component/AboutMe";
import PostCarousel from "component/PostCarousel/PostCarousel";
import { useState } from "react";

function Home() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <div>
      <AboutMe categoryIndex={categoryIndex} />
      <PostCarousel
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
      />
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
  );
}

export default Home;
