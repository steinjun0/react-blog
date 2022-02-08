import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

PostCard.propTypes = {
  categories: PropTypes.array,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

// PostCarousel.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

function PostCard({ categories, title, subTitle }) {
  const PostCardWrapper = styled("div")`
    width: 282px;
    height: 155px;
    margin-top: 74px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #c4c4c4;
  `;
  const PostCardCategory = styled("div")`
    font-size: 14px;
    color: #373737;
  `;
  const PostCardTitle = styled("div")`
    font-size: 24px;
    font-weight: 500;
  `;
  const PostCardSubTitle = styled("div")`
    margin-top: 14px;
    font-size: 14px;
  `;
  return (
    <PostCardWrapper>
      <PostCardCategory>[{categories.join(", ")}]</PostCardCategory>
      <PostCardTitle>{title}</PostCardTitle>
      <PostCardSubTitle>{subTitle}</PostCardSubTitle>
    </PostCardWrapper>
  );
}

function useShowPosts(posts) {
  const [showPosts, setShowPosts] = useState([]);
  function sliceShowPosts(windowWidth = 1281) {
    if (posts.length > 4 && 1280 <= windowWidth) {
      setShowPosts(posts.slice(0, 4));
    } else if (posts.length > 3 && 960 < windowWidth && windowWidth <= 1280) {
      setShowPosts(posts.slice(0, 3));
    } else if (posts.length > 2 && 768 < windowWidth && windowWidth <= 960) {
      setShowPosts(posts.slice(0, 2));
    } else if (posts.length > 1 && windowWidth <= 768) {
      setShowPosts(posts.slice(0, 1));
    } else {
      setShowPosts(posts);
    }
  }

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
    sliceShowPosts(window.innerWidth);
  }, [posts, isDesktop, isDesktopSmall, isTablet, isPhone]);

  return showPosts;
}

function PostCarousel() {
  const PostCarouselWrapper = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  const [posts, setPosts] = useState([]);
  const showPosts = useShowPosts(posts);

  useEffect(() => {
    // To do... getMainPagePosts API
    setPosts([
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
    ]);
  }, []);

  return (
    <PostCarouselWrapper>
      <ChevronLeftIcon fontSize="large" style={{ marginTop: "74px" }} />
      {showPosts.map((post, index) => {
        return (
          <PostCard
            key={index}
            categories={post.categories}
            title={post.title}
            subTitle={post.subTitle}
          />
        );
      })}
      <ChevronRightIcon fontSize="large" style={{ marginTop: "74px" }} />
    </PostCarouselWrapper>
  );
}

export default PostCarousel;
