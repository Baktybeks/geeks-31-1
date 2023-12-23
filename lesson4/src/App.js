import './App.css';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import List from './components/List/List';


function App() {
  const [show, setShow] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "HTML",
      completed: false
    },
    {
      id: 2,
      title: "CSS",
      completed: false
    },
    {
      id: 3,
      title: "JS",
      completed: false
    },
    {
      id: 4,
      title: "REACT",
      completed: false
    }
  ])
  console.log(tasks);
  const handleOpen = () => {
    setShow(!show)
  }

  const handleTextInput = (event) => {
    setNewTask(event.target.value)
  }

  const handleAdd = () => {
    setTasks((prevState)=>[...prevState, {
      id: tasks[tasks.length-1].id+1,
      title:newTask,
      completed: false
    }
    ])
  }

  const handleDelete = (id) => {
    console.log(id);
    const deleted = tasks.filter(task=> task.id!==id)
    setTasks([...deleted])
  }

  const handleEdit = (id) => {
    console.log("Edit", id);
  }
  const handleDone  = (id) => {
    tasks.map(task=> {
      if(task.id===id) {
        return task.completed = !task.completed
      }
      return tasks
    })
    setTasks([...tasks])
  }
  // useEffect(() => {
  //   console.log("use");
  // },[show, newTask]);

  return (
    <div className="App">
      <button className='btn' onClick={handleOpen}>Открыть</button>
      {show &&
        <Modal
          handleOpen={handleOpen}
          handleTextInput={handleTextInput}
          handleAdd={handleAdd}
        />
      }
      <List
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleDone={handleDone}
      />
    </div>
  );
}


export default App;
