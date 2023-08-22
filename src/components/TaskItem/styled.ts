import { styled } from "styled-components";

export const Task = styled.div`
    display: flex;
    align-items: flex-start;
    width: 736px;
    min-height: 72px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #333333;
    gap: 12px;
    background-color: #262626;

    @media (max-width: 800px) {
        width: 80vw;
    }

`
export const CheckArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    
`

export const Check = styled.img`
    width: 17.45px;
    height: 17.45px;
    top: 3.27px;
    left: 3.27px;
    cursor: pointer;
;
`

export const Trash = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 4px;
`

export const Del = styled.img`
    width: 12.48px;
    height: 14px;
    top: 5px;
    left: 6px;
    cursor: pointer;
`

export const TaskTextArea = styled.div`
    width: 632px;
    min-height: 40px;

`
interface Props {
    textDecoration: string
}

export const TaskText = styled.h3<Props>`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    font-family: Inter;
    letter-spacing: 0em;
    text-align: left;
    color: #F2F2F2;
    text-decoration: ${(props) => (props.textDecoration)};
    word-wrap: break-word; 
    word-break: break-word;
;
`
