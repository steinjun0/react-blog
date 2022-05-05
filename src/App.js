// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import Post from 'pages/post';

import "./App.css";
import Gnb from "./component/Gnb";
import Home from 'pages/home';
import 'assets/css/pageTransition.css'

// https://stackoverflow.com/questions/61089053/animating-route-transitions-with-csstransitiongroup-and-react-router-v6
// react v6 transition-group 적용 방법
function App() {
  return (
    <div className="AppWrapper">
      <div className="App">
        <BrowserRouter>
          <Gnb></Gnb>

          <RouteWrapper></RouteWrapper>
          {/* <TransitionGroup>
            <Routes >
              <Route path="/" element={
                <CSSTransition
                  classNames="fade"
                  timeout={300}
                >
                  <Home />
                </CSSTransition>
              }>
              </Route>

              <Route path="/post/" >
                <Route path=":postId" element={
                  <CSSTransition
                    className="fade"
                    timeout={300}
                  >
                    <Post />
                  </CSSTransition>} />
              </Route>
            </Routes>
          </TransitionGroup> */}
          {/* <Routes>
            <Route path="/" element={

              <div>
                <Home />
              </div>

            }>
            </Route>
            <Route path="/post/" element={<Post />}>
              <Route path=":postId" element={<Post />} />
            </Route>
          </Routes> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

function RouteWrapper() {
  let location = useLocation();
  return (<TransitionGroup>
    {/*
    This is no different than other usage of
    <CSSTransition>, just make sure to pass
    `location` to `Switch` so it can match
    the old location as it animates out.
  */}
    <CSSTransition
      key={location.key}
      classNames="page"
      timeout={300}
    >
      <Routes location={location}>
        <Route path="/" element={
          <Home />
        }>
        </Route>

        <Route path="/post/" >
          <Route path=":postId" element={
            <Post />
          } />
        </Route>
      </Routes>
    </CSSTransition>

  </TransitionGroup>);
}

export default App;
