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
    </div>
  );
}

export default Home;
