import styled from "styled-components";
import Label from "../components/Label";
import MoreRead from "../components/previewPost/MoreRead";
import PreviewPostList from "../components/previewPost/PreviewPostList";

const Post = () => {
    const trackName = ['UX/UI', 'Front-end', 'Back-end'];
    const rightBoxLabel = ['NOTICE', '커뮤니티', 'Q&A']

    return(
        <PostContainer>
            <LeftBox>
                <div>
                    <div className="label-box">
                        <Label>강의자료</Label>
                        <MoreRead/>
                    </div>
                    <div className="track-box">
                        {trackName.map(track=>(
                            <div>
                                <b>{track}</b>
                                <PreviewPostList/>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="label-box">
                        <Label>HOMEWORK</Label>
                        <MoreRead/>
                    </div>
                    <div className="track-box">
                        {trackName.map(track=>(
                            <div>
                                <b>{track}</b>
                                <PreviewPostList/>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="label-box">
                        <Label>STUDY</Label>
                        <MoreRead/>
                    </div>
                    <PreviewPostList/>
                </div>
                <div>
                    <div className="label-box">
                        <Label>TEAM BILDING</Label>
                        <MoreRead/>
                    </div>
                    <PreviewPostList/>
                </div>
                
            </LeftBox>
            <RightBox>
                {rightBoxLabel.map(label=>(
                    <div>
                        <div className="label-box">
                            <Label>{label}</Label>
                            <MoreRead/>
                        </div>
                        <PreviewPostList/>
                    </div>
                ))}
            </RightBox>
        </PostContainer>
    )
}

export default Post;

const PostContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const LeftBox = styled.div`
    width: 850px;
    height: 867px;
    //background: pink;

    .label-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
    }

    .track-box{
        display: grid;
        grid-template-columns: 268px 268px 268px;
        grid-column-gap: 25px;
        margin-top: 15px;

        b{  
            margin-left: 20px;
            font-weight: 700;
            font-size: 14px;
            color: #656565;
            text-decoration:underline;
        }
    }
`;

const RightBox = styled.div`
    width: 850px;
    height: 635px;
    //background: skyblue;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .label-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
    }

    .track-box{
        display: grid;
        grid-template-columns: 268px 268px 268px;
        grid-column-gap: 25px;
        margin-top: 15px;

        b{  
            margin-left: 20px;
            font-weight: 700;
            font-size: 14px;
            color: #656565;
            text-decoration:underline;
        }
    }
`;