import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const NewTask = styled.div`
    margin-bottom: 75px;
    display: flex;
    width: 736px;
    margin-top: -27px;
    height: auto;
    align-items: center;
    transform: scaleY(robo);
    gap: 8px;

    @media (max-width: 800px) {
        width: 80vw;
    }

     @media (max-width: 450px) {
        flex-direction:column;
    }
`
export const InputTask = styled.input`
    display: flex;
    height: 54px;
    padding: 16px;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 8px;
    border: 1px solid var(--gray-700, #0D0D0D);
    background: var(--gray-500, #262626);
    color: var(--gray-300, #808080);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    outline: none;
`

export const CreateTaskButton = styled.button`
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--blue-dark, #1E6F9F);
    color: var(--gray-100, #F2F2F2);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 19.6px */
    outline: none;

   
`
export const TaskArea = styled.div`
    display: flex;
    width: 736px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    
    @media (max-width: 800px) {
        width: 80vw;
    }
`
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
`
export const CreatedArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
export const CreatedTasks = styled.h1`
    color: var(--purple, #8284FA);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Counter = styled.div`
    display: flex;
    padding: 2px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 999px;
    background: var(--gray-400, #333);
`

export const Done = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    
`
export const TasksCompletedInfo = styled.h1`
    color: var(--purple, #8284FA);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
`
type TaskListAreaProps = {
    margintop: string;
}

export const TaskListArea = styled.div<TaskListAreaProps>`
    display: flex;
    padding: 64px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 8px;
    border-top: ${(props) => (props.margintop)}px solid var(--grey-400, #333);
`

export const FillxHugArea = styled.div`
    height: 44px;

`
type FillxHugProps = {
    fontw: string;
}

export const FillxHug = styled.div<FillxHugProps>`
    font-family: Inter;
    font-size: 16px;
    font-weight: ${(props) => (props.fontw)};
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #808080;
`

export const Fill = styled.span`
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #808080;
;
`

export const TaskMax = styled.div`
    color: #D9D9D9;
    min-width: 9px;
    height: 15px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
`

