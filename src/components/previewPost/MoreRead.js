import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const MoreRead = () => {
    return(
        <LinkBtn to='/postlist'>
            <div>
                <AiOutlinePlus/>
                <p>전체보기</p>
            </div>
        </LinkBtn>
    )
}

export default MoreRead;

const LinkBtn = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    
    div{
        display: flex;
        align-items: center;
    
        font-size: 12px;
        font-weight: 700;
        color: #656565;

        p{
            margin-left: 7px;
        }
    }
`
