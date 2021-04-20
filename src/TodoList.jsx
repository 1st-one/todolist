import React, { useState, useEffect } from 'react';
import TasksList from './TasksList'
import { fetchTasksList, createTask, updateTask, deleteTask } from './tasksGateway';

const TodoList = () => {
    const [listItems, listItemsChange] = useState([]);

    const fetchTasks = () => {
            fetchTasksList()
                .then(res => listItemsChange(res));
        };
        
    useEffect(() => {
        fetchTasks();
    }, []);

    const onCreate = (value) => {

        const newTask = {
            text: value,
            done: false,
        };

        createTask(newTask)
            .then(() => fetchTasks());
    };

    const handleCheckbox = id => {
        const { done, text } = listItems.find(task => task.id === id);
        const updatedTask = {
            text,
            done: done ? false : true,
        };

        updateTask(id, updatedTask)
            .then(() => fetchTasks())
    };

    const handleDelete = id => {
        deleteTask(id)
            .then(() => fetchTasks());
    };
    return (
        <>
            <h1 className='title'>Todo List</h1>
            <TasksList 
            onCreate={onCreate} 
            handleDelete={handleDelete} 
            handleCheckbox={handleCheckbox}
            listItems={listItems}
            />
        </>
    );
};


export default TodoList;