import {ADD_TASK} from "../constants";
import {UPDATE_FILTER} from "../constants";


export const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted
})

export const updateFilter = (id) => ({
    type: UPDATE_FILTER,
    id,

})