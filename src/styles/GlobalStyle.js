import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        margin: 0px;
        font-family: 'Pretendard Variable', sans-serif;
    }
`;

export const GRAY30 = "#A8A8A8";
export const GRAY50 = "#1F1F1F";
export const PRIMARY = "#FF7710";
export const WHITE = "#FFFFFF";
