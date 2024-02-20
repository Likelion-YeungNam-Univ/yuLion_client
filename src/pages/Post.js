import styled from "styled-components";
import Label from "../components/Label";
import MoreRead from "../components/previewPost/MoreRead";
import PreviewPostList from "../components/previewPost/PreviewPostList";

const Post = () => {
    const trackName = ['UX/UI', 'Front-end', 'Back-end'];

    return(
        <PostContainer>
            <div className="grid-box">
                <div>
                    <div className="label-box">
                        <Label>강의자료</Label>
                        <MoreRead/>
                    </div>
                    <div className="track-box">
                        {trackName.map((track, index)=>(
                            <div key={index}>
                                <b>{track}</b>
                                <PreviewPostList/>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="label-box">
                        <Label>NOTICE</Label>
                        <MoreRead/>
                    </div>
                    <PreviewPostList/>
                </div>
                <div>
                    <div className="label-box">
                        <Label>HOMEWORK</Label>
                        <MoreRead/>
                    </div>
                    <div className="track-box">
                        {trackName.map(track=>(
                            <div key={track}>
                                <b>{track}</b>
                                <PreviewPostList/>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="label-box">
                        <Label>Q&A</Label>
                        <MoreRead/>
                    </div>
                    <PreviewPostList/>
                </div>
                <div>
                    <div className="label-box">
                        <Label>STUDY</Label>
                        <MoreRead/>
                    </div>
                    <PreviewPostList/>
                </div>
            </div>
            {/* <button>글쓰기</button> */}
        </PostContainer>
    )
}

export default Post;

const PostContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;

    .grid-box{
        display: grid;
        grid-template-columns: 800px 800px;
        grid-template-rows: minmax(190px, auto);
        grid-column-gap: 150px;
        grid-row-gap: 60px;
    }

    .label-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0px;
    }

    .track-box{
        display: flex;
        justify-content: space-between;

        //PreviewPostList.js의 .list
        .list {
            width: 220px;
        }

        b{  
            margin-left: 20px;
            font-weight: 700;
            font-size: 14px;
            color: #656565;
            text-decoration:underline;
        }   

        /* button{
            width: 80px;
            height: 40px;
            border: 2px solid #D1D1D1;
            background: none;
            margin-bottom: 20px;
            font-size: 16px;
        } */
}`;

