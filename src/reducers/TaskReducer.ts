import { useReducer } from "react";
import { TaskType } from "../types/TaskType";
import {v4 as uuidV4} from "uuid";

type actionType = {
    type: string
    payload?: {
        task?: string
        id?:string
        completed?: boolean
    }
}
const inicialstate: TaskType[] = [];


const reducer = (state: TaskType[], action: actionType ) => {
    switch(action.type){
        case "ADD":
        if(action.payload?.task){
            const newState = [...state];
            newState.push({
                task: action.payload.task,
                id: uuidV4(),
                completed: false
            });
            return newState
        }
        break
        case "DEL":
        if(action.payload?.id){
            const newState = state.filter(item => item.id !== action.payload?.id);
            return newState
        }
        break

        case "Check":
        if (action.payload?.id) {
            const newState = state.map(item => {
                if (item.id === action.payload?.id) {
                    
                return {
                    ...item,completed: !item.completed
                };
            
            }
            
            return item;
        });
        return newState;
    }
    break;


    }
    return state
}

export const useTaskList = () => useReducer(reducer, inicialstate);