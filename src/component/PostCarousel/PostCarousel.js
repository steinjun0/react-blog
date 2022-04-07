import { styled } from "@mui/material";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import PostCarouselShowBlocks from "./PostCarouselBlocks";
import API from 'API.js'

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
  overflow-x: hidden;
`;

const PostCarouselCategoryWrapper = styled("div")`
  margin-top: 12px;
  margin-bottom: 24px;
  display: flex;
  max-width: 150px;
  overflow-x: hidden;
`;

const PostCarouselCategory = styled("span")`
  font-size: 20px;
  font-weight: 500;
  min-width: 150px;
  display: flex;
  justify-content: center;
  transform: translateX(
    ${({ category_index, post_carousels }) =>
    post_carousels.length > 0 && -category_index * 100}%
  );
`;

PostCarousel.propTypes = {
  categoryIndex: PropTypes.number.isRequired,
  setCategoryIndex: PropTypes.func.isRequired,
};

function PostCarousel({ categoryIndex, setCategoryIndex }) {
  //utils
  const getPrevCategoryIndex = () => {
    if (categoryIndex === 0) return postCarousels.length - 1;
    else return categoryIndex - 1;
  };
  const getNextCategoryIndex = () => {
    if (categoryIndex >= postCarousels.length - 1) return 0;
    else return categoryIndex + 1;
  };

  const movePrevCategory = () => {
    const index = getPrevCategoryIndex();
    setCategoryIndex(index);
  };
  const moveNextCategory = () => {
    const index = getNextCategoryIndex();
    setCategoryIndex(index);
  };

  // state
  const [postCarousels, setPostCarousels] = useState([]);
  // const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    // To do... getMainPagePosts API
    const posts = API.getHomePostList();
    posts.then(
      (res) => {
        if (res.status === 200) {
          console.log('posts', res.data)
          let temp = []
          for (let category in res.data) {
            temp.push({
              category: category,
              posts: res.data[category]
            })
          }
          console.log(temp)
          setPostCarousels(temp)
        }
      }
    )
    // setPostCarousels([
    //   {
    //     category: "Programming",
    //     posts: [
    //       {
    //         categories: ["Django", "Docker"],
    //         title: "gunicorn에 vscode debugger 붙이기",
    //         subTitle: "개발자여, 조금 더 편하게 살아보자",
    //       },
    //       {
    //         categories: ["Vue2"],
    //         title: "v-model과 v-bind.sync 그리고 Vue3",
    //         subTitle: "다가오는 Vue3와 변화되는 문법",
    //       },
    //       {
    //         categories: ["Docker"],
    //         title: "docker compose와 Monolothic Server 구축",
    //         subTitle: "환경 구축으로부터의 탈출",
    //       },
    //       {
    //         categories: ["Vue2"],
    //         title: "v-model과 v-bind.sync 그리고 Vue3",
    //         subTitle: "다가오는 Vue3와 변화되는 문법",
    //       },
    //     ],
    //   },
    //   {
    //     category: "Camera",
    //     posts: [
    //       {
    //         categories: ["Music", "Camera"],
    //         title: "[자작곡] 프로필 스틸컷(2020)",
    //         subTitle: "2020년 여름",
    //       },
    //       {
    //         categories: ["Camera"],
    //         title: "Trip for Europe: London",
    //         subTitle: "2020/01/26 ~ 2020/01/30",
    //       },
    //       {
    //         categories: ["Camera"],
    //         title: "시험 전 휴식-농장",
    //         subTitle: "2020/05/04",
    //       },
    //       {
    //         categories: ["Music, Compose"],
    //         title: "[Remake, Sample] 잘 있어요(아따맘마 오프닝)",
    //         subTitle: "안녕하세요, 감사해요",
    //       },
    //     ],
    //   },
    // ]);
  }, []);

  return (
    <PostCarouselWrapper>
      <PostCarouselMain>
        <ChevronLeftIcon
          onClick={movePrevCategory}
          fontSize="large"
          style={{ marginTop: "74px", cursor: "pointer" }}
        />
        <PostCarouselShowWrapper>
          <PostCarouselShowBlocks
            postCarousels={postCarousels}
            categoryIndex={categoryIndex}
          ></PostCarouselShowBlocks>
        </PostCarouselShowWrapper>

        <ChevronRightIcon
          onClick={moveNextCategory}
          fontSize="large"
          style={{ marginTop: "74px", cursor: "pointer" }}
        />
      </PostCarouselMain>
      <PostCarouselCategoryWrapper>
        {postCarousels.map(({ category }, index) => {
          return (
            <PostCarouselCategory
              key={index}
              post_carousels={postCarousels}
              category_index={categoryIndex}
            >
              {category}
            </PostCarouselCategory>
          );
        })}
      </PostCarouselCategoryWrapper>
    </PostCarouselWrapper>
  );
}

export default PostCarousel;
