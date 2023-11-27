import React from 'react'
import TaskItem from './TaskItem.jsx'

const TaskList = ({ toDoList, deleteTask, toggleCheck }) => {

    return <div className='list'><ul className="list-items">
    {toDoList.map((task, key) => (
      <TaskItem task={task} key={key}
        deleteTask={deleteTask}
        toggleCheck={toggleCheck} />
    ))}
  </ul></div> 
}

export default TaskList





