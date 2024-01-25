import styled from "styled-components";
import PreviewPostList from "../components/PreviewPostList";
import Label from "../components/Label";
import MoreRead from "../components/MoreRead";

const Home = () => {
    //const labelNames = ['NOTICE', 'STUDY', 'HOMEWORK', 'TEAM BILDING'];
    const trackName = ['UX/UI', 'Front-end', 'Back-end'];

    return (
        <HomeLayout>
            <div className="home-img">
                <img src="http://via.placeholder.com/1840x404" alt="임시이미지"/>
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
                            <div>
                                <b>{track}</b>
                                <PreviewPostList/>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="label-box">
                        <Label>TEAM BILDING</Label>
                        <MoreRead/>
                    </div>
                    <PreviewPostList/>
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

        b{  
            margin-left: 35px;
            font-size: 14px;
            color: #656565;
            text-decoration:underline;
        }
    }
`