import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateTaskInput = ({ onCreate }) => {
    const [value, changeValue] = useState('');

    const handlerChange = event => {
        changeValue(event.target.value)
    };

    const handleTaskCreate = () => {
        if (value === '') {
            return null;
        };
        
        onCreate(value);
        changeValue('');
    };

    return (
        <div className="actions">
            <input type="text" value={value} onChange={handlerChange} className="task-input" />
            <button className="btn" onClick={handleTaskCreate}>Create</button>
        </div>
    );
};

CreateTaskInput.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default CreateTaskInput;