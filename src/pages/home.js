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

// transform은 2개를 동시에 적용할 수 없다.
// 따라서 다른 엘레먼트를 추가하여서(감싸서) 적용해줘야한다.
// 그래서 imageWrapperCropper 추가함
const ImageWrapperCropper = styled(Flex)`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;


const ImagesWrapper = styled(Flex)`
  max-width: 800px;
  transform: ${(props) => {
    if (props.hide === 'left') {
      return 'translateX(-800px)'
    }
    else if (props.hide === 'right') {
      return 'translateX(0)'
    }
    else {
      return 'translateX(0)'
    }
  }};
`

const ImageWrapper = styled(Flex)`
  max-width: 400px;
  max-height: 400px;
  min-width: ${(props) => {
    return props.selected ? '400px' : '200px' // undefined라도 무조건 값을 넣어놔야지 re-render가 안일어난다.
    // 200px 말고 공백으로 넣었어서 트랜지션이 안됐었음
  }};
  min-height: ${(props) => {
    return props.selected ? '400px' : '200px'
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
  const [changeMainImageIntervalIndex, setChangeMainImageIntervalIndex] = useState(-1);
  useEffect(() => {
    let intervalIndex = setInterval(() => {
      setMainImageIndex(mainImageIndex => mainImageIndex + 1)
    }, 2000);
    setChangeMainImageIntervalIndex(intervalIndex)
    return () => clearInterval(intervalIndex)
  }, [])

  useEffect(() => {
    if (mainImageIndex >= 6) {
      setMainImageIndex(0)
    }
  }, [mainImageIndex])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setMainImageIndex(1)
  //   }, 1000);
  // })
  const selectedCategoryStyled = {
    color: 'black',
    transform: 'scale(0.95)',
  };

  return (
    <div>
      {/* <AboutMe categoryIndex={categoryIndex} /> */}
      <Flex
        onMouseEnter={() => {
          clearInterval(changeMainImageIntervalIndex)
        }}
        onMouseLeave={() => {
          let intervalIndex = setInterval(
            () => {
              setMainImageIndex(mainImageIndex => mainImageIndex + 1)
            }
            , 2000)
          setChangeMainImageIntervalIndex(intervalIndex)
        }}
      >
        <VerticalFlex>
          <CategoryTitle
            onMouseEnter={() => {
              setMainImageIndex(1)
            }}
            style={mainImageIndex < 3 ? selectedCategoryStyled : {}} to='/'>Posts</CategoryTitle>
          <CategoryTitle
            onMouseEnter={() => {
              setMainImageIndex(4)
            }}
            style={mainImageIndex >= 3 ? selectedCategoryStyled : {}} to='/'>Proj.</CategoryTitle>
        </VerticalFlex>
        <ImageWrapperCropper

        >
          <ImagesWrapper hide={`${mainImageIndex >= 3 ? 'left' : 'right'}`}>
            <ImageWrapper onMouseEnter={() => { setMainImageIndex(0) }} selected={mainImageIndex % 6 === 0} hide={`${mainImageIndex >= 3 ? 'left' : 'right'}`}>
              <MainImage src={test1}></MainImage>
            </ImageWrapper>
            <ImageWrapper onMouseEnter={() => { setMainImageIndex(1) }} selected={mainImageIndex % 6 === 1} hide={`${mainImageIndex >= 3 ? 'left' : 'right'}`}>
              <MainImage src={junProfile}></MainImage>
            </ImageWrapper>
            <ImageWrapper onMouseEnter={() => { setMainImageIndex(2) }} selected={mainImageIndex % 6 === 2} hide={`${mainImageIndex >= 3 ? 'left' : 'right'}`}>
              <MainImage src={test2}></MainImage>
            </ImageWrapper>
          </ImagesWrapper>

          <ImagesWrapper hide={`${mainImageIndex >= 3 ? 'left' : 'right'}`}>
            <ImageWrapper onMouseEnter={() => { setMainImageIndex(3) }} selected={mainImageIndex % 6 === 3} hide={`${mainImageIndex >= 3 ? 'left' : 'right'}`}>
              <MainImage src={test1}></MainImage>
            </ImageWrapper>
            <ImageWrapper onMouseEnter={() => { setMainImageIndex(4) }} selected={mainImageIndex % 6 === 4} hide={`${mainImageIndex >= 3 ? 'left' : 'right'}`}>
              <MainImage src={junProfile}></MainImage>
            </ImageWrapper>
            <ImageWrapper onMouseEnter={() => { setMainImageIndex(5) }} selected={mainImageIndex % 6 === 5} hide={`${mainImageIndex >= 3 ? 'left' : 'right'}`}>
              <MainImage src={test2}></MainImage>
            </ImageWrapper>
          </ImagesWrapper>
        </ImageWrapperCropper>


      </Flex>
      <PostCarousel
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
      />
    </div >
  );
}

export default Home;
