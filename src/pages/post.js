import { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material";
import { VerticalFlex, Flex, TextSubtitle1, TextSubtitle2 } from "util/styledComponent";

import '@toast-ui/editor/dist/toastui-editor.css';

import { Viewer } from '@toast-ui/react-editor';
// import { border } from "@mui/material";

const CustomVerticalFlex = styled(VerticalFlex)`
    padding-top: 100px;
`;

const PostTitle = styled('h1')`
    margin: 12px 0 4px 0;
`;

function Post() {

    let params = useParams();
    const [category, setCategory] = useState('여기는 카테고리가 올거에요');
    const [title, setTitle] = useState('여기는 제목이 올거에요');
    const [subTitle, setSubTitle] = useState('여기는 부제목이 올거고 꽤 길 예정이에요. 한 이정도 까지?');

    return (
        <CustomVerticalFlex>
            <TextSubtitle2>[{category}]</TextSubtitle2>
            <PostTitle>{title}</PostTitle>
            <TextSubtitle1>{subTitle}</TextSubtitle1>

            <Flex>
                post {params.postId}
            </Flex>

            <Viewer initialValue="<strong>여기가 내용</strong>"></Viewer>

        </CustomVerticalFlex>
    )
}

export default Post;