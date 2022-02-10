import { Box, styled } from "@mui/material";
import { useState, useEffect, memo } from "react";
import { useMediaQuery } from "react-responsive";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import PostCard from './PostCard'

import { DESKTOP_WIDTH, DESKTOP_SMALL_WIDTH, TABLET_WIDTH } from "../App";


// PostCarousel.propTypes = {
//   posts: PropTypes.array.isRequired,
// };



const getSlicedPostsResponsive = (windowWidth = 1281, posts) => {
  if (posts.length > 4 && DESKTOP_WIDTH <= windowWidth) {
    return posts.slice(0, 4);
  } else if (
    posts.length > 3 &&
    DESKTOP_SMALL_WIDTH < windowWidth &&
    windowWidth <= DESKTOP_WIDTH
  ) {
    return posts.slice(0, 3);
  } else if (
    posts.length > 2 &&
    TABLET_WIDTH < windowWidth &&
    windowWidth <= DESKTOP_SMALL_WIDTH
  ) {
    return posts.slice(0, 2);
  } else if (posts.length > 1 && windowWidth <= TABLET_WIDTH) {
    return posts.slice(0, 1);
  } else {
    return posts;
  }
}

function useShowPosts(postCarousels, categoryIndex) {
  const [showPosts, setShowPosts] = useState([]);


  const isDesktop = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const isDesktopSmall = useMediaQuery({
    query: "(min-width:960px) and (max-width:1280px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:960px)",
  });
  const isPhone = useMediaQuery({
    query: "(max-width:768px)",
  });

  useEffect(() => {
    postCarousels.map((postBlock) => {
      setShowPosts(showPosts + getSlicedPostsResponsive(window.innerWidth, postBlock.posts));
    })
    console.log('postCarousels', postCarousels)
  }, [postCarousels, isDesktop, isDesktopSmall, isTablet, isPhone]);

  return showPosts;
}

function PostCarouselShowBlocks({ postCarousels, categoryIndex }) {
  const PostCarouselShowBlock = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;
  const Blocks = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: ${postCarousels.length * 100}%;
    transform: translateX(${-(categoryIndex / postCarousels.length) * 100}%);
  `;

  return (
    <Blocks>
      {
        postCarousels.map((postBlock, blockIndex) => {
          return (
            <PostCarouselShowBlock key={blockIndex} >
              {
                postBlock.posts.map((post, index) => {
                  return (
                    <PostCard
                      key={index}
                      categories={post.categories}
                      title={post.title}
                      subTitle={post.subTitle}
                    />
                  );
                })
              }
            </PostCarouselShowBlock>
          );
        })
      }

    </Blocks>);
}

function PostCarousel() {
  //utils
  const getPrevCategoryIndex = () => {
    if (categoryIndex === 0) return postCarousels.length - 1
    else return categoryIndex - 1
  }
  const getNextCategoryIndex = () => {
    if (categoryIndex >= postCarousels.length - 1) return 0
    else return categoryIndex + 1
  }

  const movePrevCategory = () => {
    const index = getPrevCategoryIndex();
    setCategoryIndex(index)
  }
  const moveNextCategory = () => {
    const index = getNextCategoryIndex();
    setCategoryIndex(index)
  }
  // css-in-js
  const PostCarouselWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;
  const PostCarouselMain = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;
  const PostCarouselShowWrapper = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow-x:hidden;
  `;


  const PostCarouselCategory = styled('span')`
    font-size: 20px;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 24px;
  `


  // state
  const [postCarousels, setPostCarousels] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(0);



  // hooks
  // const showPostsMain = useShowPosts(postCarousels, categoryIndex);
  // const showPostsPrev = useShowPosts(postCarousels, getPrevCategoryIndex(categoryIndex));
  // const showPostsNext = useShowPosts(postCarousels, getNextCategoryIndex(categoryIndex));

  useEffect(() => {
    // To do... getMainPagePosts API
    setPostCarousels(
      [{
        category: 'Programming',
        posts: [
          {
            categories: ["Django", "Docker"],
            title: "gunicorn에 vscode debugger 붙이기",
            subTitle: "개발자여, 조금 더 편하게 살아보자",
          },
          {
            categories: ["Vue2"],
            title: "v-model과 v-bind.sync 그리고 Vue3",
            subTitle: "다가오는 Vue3와 변화되는 문법",
          },
          {
            categories: ["Docker"],
            title: "docker compose와 Monolothic Server 구축",
            subTitle: "환경 구축으로부터의 탈출",
          },
          {
            categories: ["Vue2"],
            title: "v-model과 v-bind.sync 그리고 Vue3",
            subTitle: "다가오는 Vue3와 변화되는 문법",
          },
        ]
      },
      {
        category: 'Camera',
        posts: [
          {
            categories: ["Music", "Camera"],
            title: "[자작곡] 프로필 스틸컷(2020)",
            subTitle: "2020년 여름",
          },
          {
            categories: ["Camera"],
            title: "Trip for Europe: London",
            subTitle: "2020/01/26 ~ 2020/01/30",
          },
          {
            categories: ["Camera"],
            title: "시험 전 휴식-농장",
            subTitle: "2020/05/04",
          },
          {
            categories: ["Music, Compose"],
            title: "[Remake, Sample] 잘 있어요(아따맘마 오프닝)",
            subTitle: "안녕하세요, 감사해요",
          },
        ]
      }
      ]);

  }, []);

  const carouselAnimationStyle = {
    minWidth: `${postCarousels.length * 100}%`,
    transform: `translateX(${-(categoryIndex / postCarousels.length) * 100}%)`
  }

  return (
    <PostCarouselWrapper>
      <PostCarouselMain>
        <ChevronLeftIcon onClick={movePrevCategory} fontSize="large" style={{ marginTop: "74px", cursor: 'pointer' }} />
        <PostCarouselShowWrapper >
          {/* <PostCarouselShowBlocks postCarousels={postCarousels} categoryIndex={categoryIndex}></PostCarouselShowBlocks> */}
        </PostCarouselShowWrapper >

        <ChevronRightIcon onClick={moveNextCategory} fontSize="large" style={{ marginTop: "74px", cursor: 'pointer' }} />
      </PostCarouselMain>
      {/* <PostCarouselCategory>
        {postCarousels[categoryIndex] && postCarousels[categoryIndex].category}
      </PostCarouselCategory> */}
    </PostCarouselWrapper >
  );
}

export default PostCarousel;
