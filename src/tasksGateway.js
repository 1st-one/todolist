const baseUrl = 'https://crudcrud.com/api/a883185b70134ecd9c1a04f29abb3bb8/unicorn';

export const fetchTasksList = () => {
    return fetch(baseUrl).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(taskList => taskList.map(({_id, ...task}) => ({
            id: _id,
            ...task,
        })));
};

export const createTask = newTask => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;utc-8',
        },
        body: JSON.stringify(newTask),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to create task');
        } 
    })
};

export const updateTask = (id, updatedTask) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json;utc-8',
        },
        body: JSON.stringify(updatedTask),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to create task');
        }
    })
};

export const deleteTask = id => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete task')
        }
    })
};