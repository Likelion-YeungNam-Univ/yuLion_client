import styled from "styled-components";
import Label from "../components/Label";
import MoreRead from "../components/previewPost/MoreRead";
import PreviewPostList from "../components/previewPost/PreviewPostList";

const Post = () => {
    const trackName = ['UX/UI', 'Front-end', 'Back-end'];
    const rightBoxLabel = ['NOTICE', '커뮤니티', 'Q&A']

    console.log(trackName);

    return(
        <PostContainer>
            <LeftBox>
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
                <RightPost>
                    {rightBoxLabel.map(label=>(
                        <div key={label}>
                            <div className="label-box">
                                <Label>{label}</Label>
                                <MoreRead/>
                            </div>
                            <PreviewPostList/>
                        </div>
                    ))}
                </RightPost>
                <button>글쓰기</button>
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

const RightBox = styled.div`
    height: 867px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    button{
        width: 80px;
        height: 40px;
        border: 2px solid #D1D1D1;
        background: none;
        margin-bottom: 20px;
        font-size: 16px;
    }
`;


const RightPost = styled.div`
    width: 800px;
    height: 635px;

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