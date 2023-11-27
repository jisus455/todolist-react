import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faFontAwesome)


const TaskItem = ({ task, deleteTask, toggleCheck }) => {

    return <li className="items">
        <div className="items-text">
            <input
                type="checkbox"
                checked={task.checked}
                onChange={() => toggleCheck(task.taskName)}/>
            <p className={task.checked ? 'isChecked' : ''}>{task.taskName} </p>
        </div>
        <FontAwesomeIcon icon="fa-solid fa-trash" className="delete-icon" onClick={() => deleteTask(task.taskName)} style={{ color: "#0ab6ab", }} />
    </li>
}

export default TaskItem