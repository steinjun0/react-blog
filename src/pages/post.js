import { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material";
import { VerticalFlex, Flex, TextSubtitle1, TextSubtitle2 } from "util/styledComponent";

import '@toast-ui/editor/dist/toastui-editor.css';

import { Viewer } from '@toast-ui/react-editor';
import API from 'API.js'
import { Divider } from "@mui/material";

const CustomVerticalFlex = styled(VerticalFlex)`
    padding-top: 100px;
`;

const PostTitle = styled('h1')`
    margin: 12px 0 4px 0;
`;

const CustomDivider = styled(Divider)`
    margin: 8px 0;
`;

const convertCategoryObjectsToString = (categoryObjects) => {
    let resultString = ''
    for (const categoryObject of categoryObjects) {
        resultString += `${categoryObject.name}, `
    }
    resultString = resultString.slice(0, resultString.length - 2)
    return resultString
}

function Post() {

    let params = useParams();
    const [category, setCategory] = useState('여기는 카테고리가 올거에요');
    const [title, setTitle] = useState('여기는 제목이 올거에요');
    const [subTitle, setSubTitle] = useState('여기는 부제목이 올거고 꽤 길 예정이에요. 한 이정도 까지?');
    const [html, setHtml] = useState('여기는 내용이 올거고 html이에요.');
    const [isLoading, setIsLoading] = useState(true);
    const postRes = API.getPost(params.postId);
    postRes.then((res) => {
        if (res.status === 200) {
            setCategory(convertCategoryObjectsToString(res.data.categories))
            setTitle(res.data.title.replace('\\', ' '))
            setSubTitle(res.data.sub_title)
            setHtml(res.data.html)
            setIsLoading(false)
        }
    })
    return (
        <CustomVerticalFlex>
            <TextSubtitle2>[{category}]</TextSubtitle2>
            <PostTitle>{title}</PostTitle>
            <TextSubtitle1>{subTitle}</TextSubtitle1>

            <CustomDivider></CustomDivider>

            {!isLoading && <Viewer initialValue={html}></Viewer>}

        </CustomVerticalFlex>
    )
}

export default Post;