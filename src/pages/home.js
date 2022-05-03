// import logo from "./logo.svg";
import { styled } from "@mui/material";
import AboutMe from "component/AboutMe";
import PostCarousel from "component/PostCarousel/PostCarousel";
import { useEffect, useState } from "react";
import { Flex, NoStyleLink, VerticalFlex } from "util/styledComponent";
import junProfile from "assets/img/junProfile.jpg";
import test1 from "assets/img/blog-test1.png";
import test2 from "assets/img/blog-test2.png";


const CategoryTitle = styled(NoStyleLink)`
  font-size: 200px;
  font-weight: 700;
  line-height: 1em;
  color: white;
  -webkit-text-stroke-width: calc(0.005em + 1px);
  -webkit-text-stroke-color: #000;
  &:hover{
    color: black;
    transform: scale(0.95);
  }
`;

const ImagesWrapper = styled(Flex)`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const ImageWrapper = styled(Flex)`
  max-width: 400px;
  max-height: 400px;
  min-width: ${(props) => {
    return props.main === 'true' ? '400px' : '200px' // undefined라도 무조건 값을 넣어놔야지 re-render가 안일어난다.
    // 200px 말고 공백으로 넣었어서 트랜지션이 안됐었음
  }};
  min-height: ${(props) => {
    return props.main === 'true' ? '400px' : '200px'
  }};
  overflow: hidden;

  margin-left: auto;
  margin-right: auto;
  &:hover{
    transform: scale(0.95);
  }
`

const MainImage = styled('img')`
  width: 400px;
  height: 400px;
  transform: scale(1.05);
  &:hover{
    transform: scale(1.3);
  }
`

function Home() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    const changeMainImage = setInterval(() => {
      if (mainImageIndex < 3) {
        setMainImageIndex(mainImageIndex => mainImageIndex + 1)
      } else {
        setMainImageIndex(0)
      }
    }, 2000);

    return () => clearInterval(changeMainImage)
  }, [])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setMainImageIndex(1)
  //   }, 1000);

  // })

  return (
    <div>
      {/* <AboutMe categoryIndex={categoryIndex} /> */}
      <Flex>
        <VerticalFlex>
          <CategoryTitle to='/'>Posts</CategoryTitle>
          <CategoryTitle to='/'>Proj.</CategoryTitle>
        </VerticalFlex>
        <ImagesWrapper>
          <ImageWrapper main={`${mainImageIndex % 3 === 0}`}>
            <MainImage src={test1}></MainImage>
          </ImageWrapper>
          <ImageWrapper main={`${mainImageIndex % 3 === 1}`}>
            <MainImage src={junProfile}></MainImage>
          </ImageWrapper>
          <ImageWrapper main={`${mainImageIndex % 3 === 2}`}>
            <MainImage src={test2}></MainImage>
          </ImageWrapper>
        </ImagesWrapper>
      </Flex>
      <PostCarousel
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
      />
    </div>
  );
}

export default Home;
