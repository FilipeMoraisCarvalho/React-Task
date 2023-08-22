import { TaskType } from "../../types/TaskType";
import * as C from "./styled";
import trash from "../../assets/images/Layer 1.svg";
import circle from "../../assets/images/Layer 3.svg"
import circleCheck from "../../assets/images/Layer2.svg"

type Props = {
    item: TaskType
    onDelete: () => void
    onCheck: () => void
}


export const TaskItem = ({item, onDelete, onCheck}: Props) => {
    return(
        <C.Task>
            <C.CheckArea>
                <C.Check onClick={onCheck} src={item.completed && circleCheck || circle}/>
            </C.CheckArea>

            <C.TaskTextArea>
                {item.completed &&
                    <C.TaskText textDecoration = {'line-through'}>
                        {item.task}
                    </C.TaskText>
                }

                {!item.completed &&
                    <C.TaskText textDecoration = {'none'}>
                        {item.task}
                    </C.TaskText>
                }
            </C.TaskTextArea>

            <C.Trash>
                <C.Del onClick={onDelete} src={trash}/>
            </C.Trash>
            
        </C.Task>
    );
}

 

