import styled from "styled-components";
import PreviewPostListItem from "./PreviewPostListItem";

const PreviewPostList = () => {
    return (
        <PreviewList>
            <PreviewPostListItem/>
            <PreviewPostListItem/>
            <PreviewPostListItem/>
            <PreviewPostListItem/>
        </PreviewList>
    )
}

export default PreviewPostList;

const PreviewList = styled.ul`
    //border: 2px solid red;
    
    margin-top: 5px;
    margin-bottom: 10px;
`;