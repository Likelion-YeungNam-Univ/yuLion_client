import styled from "styled-components";

const PreviewPostListItem = () => {
    return (
        <PreviewListItem>
            <div  className="list">
                <p>스터디 모집</p>
                <p>2023.01.01</p>
            </div>
        </PreviewListItem>
    )
}

export default PreviewPostListItem;

const PreviewListItem = styled.li`
    list-style-type : disc;
    color: #656565;
    line-height:200%;
    cursor: pointer;
    margin-left: 20px;

    &::marker {
        font-size: 10px;
    }

    .list{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
`
