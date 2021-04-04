import React from 'react';
import PropTypes, {number} from 'prop-types';
import Mark from '../../img/check-mark.svg'
import MarkCircle from '../../img/dry-clean.svg'
import MarkX from '../../img/delete.svg'
import './todo-item.css'

const ToDoItem = ({text, isCompleted, removeTask, id, updateTask, ...props}) => {

    return (
        <li className="todo-item">
            <div onClick={() => updateTask(id)} className='mark'>
                <img src={isCompleted ? Mark : MarkCircle} alt=""/>
            </div>
            <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
            <div onClick={() => removeTask(id)} className="markX">
                <img src={MarkX} alt=""/>
            </div>
        </li>

    );
}


ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTask: PropTypes.func,
    id: PropTypes.number
}

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    removeTask: () => {},
    id: 0
}





export default ToDoItem;
