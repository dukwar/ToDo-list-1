import {ADD_TASK, REMOVE_TASK, UPDATE_TASK} from "../constants";
import {load} from 'redux-localstorage-simple'

let TASKS = load({namespace:'todo-list'})

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: []
    }
}


const tasks = (state= TASKS.tasks, {type, id, text, isCompleted}) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id,
                    text,
                    isCompleted
                }
            ]

        case REMOVE_TASK:
            return [
                ...state.filter((task) => task.id !== id )
            ]

        case UPDATE_TASK:
            return [
                ...state.map((task) => {
                    if (task.id === id) {
                        task.isCompleted = !task.isCompleted
                    }

                    return task
                })
            ]

        default:
            return state

    }
}

export default tasks