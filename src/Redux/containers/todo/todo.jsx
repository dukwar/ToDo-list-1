import React, { Component } from 'react';

import './todo.css';
import ToDoInput from "../../../Components/todo-input/todo-input";
import ToDoList from "../../../Components/todo-list/todo-list";
import Footer from "../../../Components/footer/footer";
import {connect} from "react-redux";
import {addTask, removeTask, updateFilter, updateTask} from "../../actions/actionCreator";

class ToDo extends Component {

    state = {
        taskText: ''
    }

    handleInputText = ({target: {value}}) => {
        this.setState({
            taskText: value
        })
    }

    addTask = ({key}) => {
        const {taskText} = this.state

        if (taskText.length > 3 && key === 'Enter') {
            const {addTask} = this.props

            addTask((new Date()).getTime(), taskText, false)

            this.setState({
                taskText: ''
            })
        }
    }

    updateFilter = (event, id) => {
        const {updateFilter} = this.props

        updateFilter(id)
    }

    filterTasks = (activeFilter, tasks) => {
        switch (activeFilter) {
            case 'active':
                return tasks.filter((task) => !task.isCompleted)
            break

            case 'completed':
                return tasks.filter((task) => task.isCompleted )
            break

            default:
                return tasks
        }

    }

   restTasks = (tasks) => {
        return tasks.filter(task => !task.isCompleted).length
    }




    render() {
        const { taskText } = this.state;
        const {tasks, activeFilter, removeTask, updateTask } = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(activeFilter, tasks)
        const leftTasks = this.restTasks(tasks)

        return (
            <div className="todo-wrapper">
                <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputText} value={taskText} />
                {isTasksExist && <ToDoList updateTask={updateTask} removeTask={removeTask} tasksList={filteredTasks} />}
                {isTasksExist && <Footer onClick={this.updateFilter} amount={leftTasks} activeFilter={activeFilter} />}
            </div>
        );
    }
}


const MapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        activeFilter: state.buttons.activeFilter
    }
}

export default connect(MapStateToProps, {
    addTask,
    updateFilter,
    removeTask,
    updateTask
})(ToDo);

