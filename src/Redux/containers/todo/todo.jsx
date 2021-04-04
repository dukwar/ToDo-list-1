import React, { Component } from 'react';

import './todo.css';
import ToDoInput from "../../../Components/todo-input/todo-input";
import ToDoList from "../../../Components/todo-list/todo-list";
import Footer from "../../../Components/footer/footer";
import {connect} from "react-redux";
import {addTask, updateFilter} from "../../actions/actionCreator";

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

    render() {
        const { taskText } = this.state;
        debugger
        const {tasks, activeFilter } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        return (
            <div className="todo-wrapper">
                <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputText} value={taskText} />
                {isTasksExist && <ToDoList activeFilter={activeFilter} tasksList={tasks} />}
                {isTasksExist && <Footer onClick={this.updateFilter} amount={tasks.length} activeFilter={activeFilter} />}
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
    updateFilter
})(ToDo);

