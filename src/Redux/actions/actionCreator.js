import {ADD_TASK, REMOVE_TASK, UPDATE_TASK} from "../constants";
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

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    id,

})

export const updateTask = (id, isCompleted) => ({
    type: UPDATE_TASK,
    id,
    isCompleted,

})