import * as C from "./styled";
import plus from "../../assets/images/plus.svg";
import ClipBoard from "../../assets/images/Clipboard.svg";
import { useEffect, useState } from "react";
import { TaskItem } from "../TaskItem";
import { useTaskList } from "../../reducers/TaskReducer";
import { TaskType } from "../../types/TaskType";

export const Tasks = () => {
    const [taskInput, setTaskInput] = useState('');
    const [taskListCompleted, seTaskListCompleted] = useState<TaskType[]>([]);
    const [taskList, dispatch] = useTaskList();
    
    useEffect(() => {
        const newTaskListCompleted = taskList.filter((item) => item.completed);
        seTaskListCompleted(newTaskListCompleted);
    }, [taskList])
    
    const handleItemCheck = (id:string) => {
        dispatch({
            type: 'Check',
            payload: {
                id
            }
        });
        
    }
    const handleItemDelete = (id:string) => {
        dispatch({
            type: 'DEL',
            payload: {
                id
            }
        });
    }
    
    const handleClickButton = () => {
        if(taskInput){
            dispatch({
                type: 'ADD',
                payload: {
                    task: taskInput
                }
            });
            setTaskInput('');
        }

        else alert('Adicione uma nova tarefa.');
    }

    return(
        <C.Container>
            <C.NewTask>
                <C.InputTask type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="Adicione uma nova tarefa" />
                <C.CreateTaskButton onClick={handleClickButton} >Criar <img src={plus}/></C.CreateTaskButton>
            </C.NewTask>

            <C.TaskArea>
                <C.Info>
                    <C.CreatedArea>
                        <C.CreatedTasks>
                            Tarefas criadas
                        </C.CreatedTasks>
                        <C.Counter>
                            <C.TaskMax>
                                {taskList.length}
                            </C.TaskMax>
                        </C.Counter>
                    </C.CreatedArea>

                    <C.Done>
                        <C.TasksCompletedInfo>
                            Concluídas
                        </C.TasksCompletedInfo>    
                        <C.Counter>
                            <C.TaskMax>
                                {taskList.length >= 1 &&
                                    `${taskListCompleted.length} de ${taskList.length}`
                                }
                                {taskList.length === 0 &&
                                    taskList.length
                                }
                            </C.TaskMax>
                        </C.Counter>
                    </C.Done>
                </C.Info>

                {taskList.length === 0 &&
                    <C.TaskListArea margintop = {'1px solid var(--grey-400, #333);'}>
                        <img src={ClipBoard} width={56} height={56} />
                        <C.FillxHugArea>
                            <C.FillxHug fontw = {'700'}>Você ainda não tem tarefas cadastradas</C.FillxHug>
                            <br />
                            <C.FillxHug fontw = {'400'}>Crie tarefas e organize seus itens a fazer</C.FillxHug>
                        </C.FillxHugArea>
                        
                    </C.TaskListArea>
                }


                {taskList.length >= 1 &&
                    <C.TaskListArea margintop = {'0'}>
                        {taskList.map((item, index) => (
                            <TaskItem 
                            item = {item} 
                            key={index}
                            onDelete={() => handleItemDelete(item.id)}
                            onCheck={() => handleItemCheck(item.id)}
                            />
                        ))}
                    </C.TaskListArea>
                }


            </C.TaskArea>

        </C.Container>
    );
}