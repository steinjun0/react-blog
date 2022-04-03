// import logo from "./logo.svg";
import "./App.css";
import Gnb from "./component/Gnb";
import AboutMe from "./component/AboutMe";
import PostCarousel from "./component/PostCarousel/PostCarousel";
import { createContext, useState } from "react";
import Home from 'pages/home';

function App() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <div className="AppWrapper">
      <Gnb></Gnb>
      <div className="App">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
