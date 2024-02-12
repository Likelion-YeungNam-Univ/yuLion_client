import styled from "styled-components";
import Label from "../components/Label";
import PreviewPostList from "../components/previewPost/PreviewPostList";

const LectureNote = () => {
    const trackNames = ['UX/UI', 'Front-end', 'Back-end'];

    return(
        <LectureNoteContainer>
            <div className="page-top">
                <Label>강의 자료</Label>
                <button>글쓰기</button>
            </div>
            <hr/>
            <TrackPostBox>
                {trackNames.map(track => (
                    <div key={track}>
                        <p className="tracks">{track}</p>
                        <PreviewPostList/>
                    </div>
                ))}
            </TrackPostBox>
        </LectureNoteContainer>
    )
}

export default LectureNote;

const LectureNoteContainer = styled.div`
    margin: auto;
    max-width: 1440px;

    .page-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button{
        width: 80px;
        height: 32px;
        border: 2px solid #D9D9D9;
        background: none;
        font-weight: 600;
        font-size: 14px;
    }

    hr{
        margin-top: 5px;
        border: 1px solid #D9D9D9;
    }
`;

const TrackPostBox = styled.div`
    width: 1204px;
    margin: auto;
    display: grid;
    grid-template-columns: 268px 268px 268px;
    grid-column-gap: 200px;

    div{
        text-align: center;
    }

    .tracks{
        margin: 40px auto;
        font-weight: 700;
        font-size: 20px;
        color: #656565;
        text-decoration:underline;
    }
`;