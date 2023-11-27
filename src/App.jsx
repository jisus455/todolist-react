import { useState, useEffect } from 'react'
import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'

// Añadir iconos FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faFontAwesome)

const getLocalStrorage = () => {
  let list = localStorage.getItem("list");
  if (list !== null) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
}

function App() {

  const [toDoList, setToDoList] = useState(getLocalStrorage());
  const [fecha, setFecha] = useState('');

  function getFecha() {
    const fechaActual = new Date();
    const mesAnyo = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const mes = mesAnyo[fechaActual.getMonth()];
    const fechaF = `${mes} ${fechaActual.getDay()} ${fechaActual.getFullYear()}`;
    setFecha(...fecha, fechaF);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(toDoList));
    getFecha();
  }, [toDoList]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter(task => task.
      taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? {
          ...task,
          checked: !task.checked
        } : task,
      ),

    );
  }


  return (
    <>
      <div className='container'>
        <div className='task-header'>
          <FontAwesomeIcon icon="fa-solid fa-angle-left" style={{ color: "#000000", }} />
          <h1>Todo List</h1>
          <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" style={{ color: "#000000", }} />
        </div>
        <div className="task-content">
          <h2>Today</h2>
          <p className='task-fecha'>{fecha}</p>
          <TaskInput addTask={addTask} />
          <TaskList toDoList={toDoList}
          deleteTask={deleteTask}
          toggleCheck={toggleCheck} />
        </div>
      </div>
    </>
  )
}

export default App
