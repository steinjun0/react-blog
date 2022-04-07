import { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { DESKTOP_WIDTH, DESKTOP_SMALL_WIDTH, TABLET_WIDTH } from "../../style";

import PostCard from "./PostCard";

const PostCarouselBlock = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    justify-content: center;
  }
  @media only screen and (max-width: ${DESKTOP_SMALL_WIDTH}px) {
    justify-content: space-around;
  }
`;
const Blocks = styled("div")`
  display: ${(props) => {
    if (props.post_carousels.length !== 0) return "flex";
    else return "none";
  }};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: ${(props) => `${props.post_carousels.length * 100}%`};
  transform: translateX(
    ${({ category_index, post_carousels }) =>
    post_carousels.length > 0 &&
    -(category_index / post_carousels.length) * 100}%
  );
`;

const getResponsivePostsCount = (windowWidth = 1281) => {
  if (DESKTOP_WIDTH <= windowWidth) {
    return 4;
  } else if (
    DESKTOP_SMALL_WIDTH < windowWidth &&
    windowWidth <= DESKTOP_WIDTH
  ) {
    return 3;
  } else if (TABLET_WIDTH < windowWidth && windowWidth <= DESKTOP_SMALL_WIDTH) {
    return 2;
  } else if (windowWidth <= TABLET_WIDTH) {
    return 1;
  } else {
    return 4;
  }
};

function useResponsivePostsCount(postCarousels) {
  const [responsivePostsCount, setResponsivePostsCount] = useState([]);

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
    setResponsivePostsCount(getResponsivePostsCount(window.innerWidth));
  }, [postCarousels, isDesktop, isDesktopSmall, isTablet, isPhone]);

  return responsivePostsCount;
}

function PostCarouselBlocks({ postCarousels, categoryIndex }) {
  const responsivePostsCount = useResponsivePostsCount();
  return (
    <Blocks post_carousels={postCarousels} category_index={categoryIndex}>
      {postCarousels.map((postBlock, blockIndex) => {
        return (
          <PostCarouselBlock key={blockIndex}>
            {postBlock.posts.map((post, index) => {
              if (index >= responsivePostsCount) {
                return null;
              }
              return (
                <PostCard
                  key={index}
                  categories={post.categories}
                  title={post.title}
                  subTitle={post.sub_title}
                />
              );
            })}
          </PostCarouselBlock>
        );
      })}
    </Blocks>
  );
}

export default PostCarouselBlocks;
