import { combineReducers } from 'redux';
import tasks from './tasks'
import buttons from "./buttons";

const rootReducer = combineReducers({
    tasks,
    buttons
});

export default rootReducer;