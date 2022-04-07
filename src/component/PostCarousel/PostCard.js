import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { UnderlineLink } from 'util/styledComponent';
PostCard.propTypes = {
  categories: PropTypes.array,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

const PostCardWrapper = styled("div")`
  width: 282px;
  height: 155px;
  margin-top: 74px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #c4c4c4;
  // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  // padding: 12px;
  // border: 1px solid #ddd;
`;
const PostCardCategory = styled("div")`
  font-size: 14px;
  color: #373737;
`;
const PostCardTitle = styled("div")`
  font-size: 24px;
  font-weight: 500;
  white-space: pre-wrap;
`;
const PostCardSubTitle = styled("div")`
  margin-top: 14px;
  font-size: 14px;
`;

function PostCard({ categories, title, subTitle }) {
  return (
    <PostCardWrapper>
      <PostCardCategory>[{categories.join(", ")}]</PostCardCategory>
      <UnderlineLink to={`/post/${1}`}>
        <PostCardTitle>{title.replace('\\', '\n')}</PostCardTitle>
      </UnderlineLink>
      <PostCardSubTitle>{subTitle}</PostCardSubTitle>
    </PostCardWrapper>
  );
}

export default PostCard;
