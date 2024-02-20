import styled from "styled-components";
import PreviewPostList from "../components/previewPost/PreviewPostList.js";
import Label from "../components/Label";
import MoreRead from "../components/previewPost/MoreRead.js";

const Home = () => {
    const trackName = ['UX/UI', 'Front-end', 'Back-end'];

    return (
        <HomeLayout>
            <div className="home-img">
                <img src="./home-image.png" alt="홈 이미지"/>
            </div>
            <div className="grid-box">
                <div>
                    <div className="label-box">
                        <Label>NOTICE</Label>
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
            </div>
        </HomeLayout>
    );
};

export default Home;

const HomeLayout = styled.div`
    margin: auto;
    max-width: 1840px;

    .grid-box {
        margin-left: 20px;
        display: grid;
        grid-template-columns: 851px 851px;
        grid-template-rows: minmax(190px, auto);
        grid-column-gap: 70px;
        grid-row-gap: 20px;
    }

    .label-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
    }

    .track-box{
        display: grid;
        grid-template-columns: 268px 268px 268px;
        grid-template-rows: minmax(190px, auto);
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
`
