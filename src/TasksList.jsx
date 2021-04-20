import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import PropTypes from 'prop-types';

const TasksList = ({ onCreate, handleDelete, handleCheckbox, listItems }) => {
    let sorted = listItems.slice().sort((a, b) => a.done - b.done);

    return (
        <div className='todo-list'>
            <CreateTaskInput onCreate={onCreate} />
            <ul className="list">
                {sorted
                    .map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onChange={handleCheckbox}
                            onDelete={handleDelete} />
                    ))}
            </ul>
        </div>
    );
};

export default TasksList;

TasksList.propTypes = {
    onCreate: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleCheckbox: PropTypes.func.isRequired,
    listItems: PropTypes.array,
};

TasksList.defaultProprs = {
    listItems: [],
};