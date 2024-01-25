import styled from "styled-components";

const Label = ({children}) => {
    return (
        <LabelName>{children}</LabelName>
    )
}

export default Label;

const LabelName = styled.div`
        border-left: 5px solid #FF7710;

        padding-left: 15px;
        margin-bottom: 0px;
        
        color: #656565;
        font-size: 20px;
        font-weight: 700;
`