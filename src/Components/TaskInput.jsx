import React, { useState } from "react";

const TaskInput = ({ addTask }) => {

    const [task, setTask] = useState('');

    function InputValue(event) {
        setTask(event.target.value)
    }

    function AddTask(event) {
        event.preventDefault();
        if (task.trim() === '') return;
        addTask(task);
        setTask('');
    }

    return <form className="task-form" onSubmit={AddTask}>
        <input
            type="text"
            value={task}
            placeholder="Agregar nueva tarea.."
            onChange={InputValue}/>
        <button>+</button>
    </form>
}


export default TaskInput