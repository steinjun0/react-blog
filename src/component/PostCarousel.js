import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

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

function PostCarousel() {
  const PostCarouselWrapper = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
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
      {posts.map((post, index) => {
        return (
          <PostCard
            key={index}
            categories={post.categories}
            title={post.title}
            subTitle={post.subTitle}
          />
        );
      })}
    </PostCarouselWrapper>
  );
}

export default PostCarousel;
