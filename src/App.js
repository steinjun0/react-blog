// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Post from 'pages/post';

import "./App.css";
import Gnb from "./component/Gnb";
import Home from 'pages/home';

function App() {
  return (
    <div className="AppWrapper">
      <div className="App">
        <Gnb></Gnb>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/" element={<Post />}>
              <Route path=":postId" element={<Post />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
