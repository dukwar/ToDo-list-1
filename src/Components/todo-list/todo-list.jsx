import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({tasksList, activeFilter}) => {
    return (
        <div>
            {activeFilter === 'all' && <ul className="todo-list">
                {tasksList.map(({id, text, isCompleted}) => (
                    <ToDoItem key={id} text={text} isCompleted={isCompleted}/>
                ))}
            </ul>}

            {activeFilter === 'active' && <ul className="todo-list">
                {tasksList.filter((task) => task.isCompleted === false).map(({id, text, isCompleted}) => (
                    <ToDoItem key={id} text={text} isCompleted={isCompleted}/>
                ))
                }
            </ul>}

            {activeFilter === 'completed' && <ul className="todo-list">
                {tasksList.filter((task) => task.isCompleted === true).map(({id, text, isCompleted}) => (
                    <ToDoItem key={id} text={text} isCompleted={isCompleted}/>
                ))
                }
            </ul>}

        </div>

    )
}


ToDoList.propTypes = {
    tasksList: PropTypes.array,
}

ToDoList.defaultProps = {
    tasksList: [],
}

export default ToDoList;
