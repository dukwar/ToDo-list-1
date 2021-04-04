import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';


const ToDoInput = ({ value, onChange, onKeyPress }) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus" />
        <input
            onKeyPress={onKeyPress}
            className="todo-input"
            placeholder="Click to add task"
            onChange={onChange}
            value={value}
        />
    </div>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    onKeyPress:PropTypes.func
}

ToDoInput.defaultProps = {
    onChange: () => {},
    value: '',
    onKeyPress: () => {}
}

export default ToDoInput;