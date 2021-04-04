import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({tasksList, activeFilter, removeTask, updateTask}) => {
    return (
        <div>
            {<ul className="todo-list">
                {tasksList.map(({id, text, isCompleted}) => (
                    <ToDoItem updateTask={updateTask} removeTask={removeTask} id={id} key={id} text={text} isCompleted={isCompleted}/>
                ))}
            </ul>}

            {/*{activeFilter === 'active' && <ul className="todo-list">*/}
            {/*    {tasksList.filter((task) => task.isCompleted === false).map(({id, text, isCompleted}) => (*/}
            {/*        <ToDoItem key={id} id={id} text={text} isCompleted={isCompleted}/>*/}
            {/*    ))*/}
            {/*    }*/}
            {/*</ul>}*/}

            {/*{activeFilter === 'completed' && <ul className="todo-list">*/}
            {/*    {tasksList.filter((task) => task.isCompleted === true).map(({id, text, isCompleted}) => (*/}
            {/*        <ToDoItem key={id} id={id} text={text} isCompleted={isCompleted}/>*/}
            {/*    ))*/}
            {/*    }*/}
            {/*</ul>}*/}

        </div>

    )
}


ToDoList.propTypes = {
    tasksList: PropTypes.array,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
}

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => {},
    updateTask: () => {}
}

export default ToDoList;
