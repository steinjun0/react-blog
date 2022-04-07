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
    const postsRes = API.getHomePostList();
    postsRes.then(
      (res) => {
        if (res.status === 200) {
          let postsGroup = []
          for (let category in res.data) {
            postsGroup.push({
              category: category,
              posts: res.data[category]
            })
          }
          setPostCarousels(postsGroup)
        }
      }
    )
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
