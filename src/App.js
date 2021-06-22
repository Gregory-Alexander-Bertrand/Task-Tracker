import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'do laundry',
            day: 'Monday',
            reminder: true
        },
        {
            id: 2,
            text: 'go to supermarket',
            day: 'Tuesday',
            reminder: true
        },
        {
            id: 3,
            text: 'get new registration for car',
            day: 'Wednesday',
            reminder: false
        }
    ]
)

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 500 + 1)

      const newTask = { id, ...task }

      setTasks([...tasks, newTask])
    }


    const deleteTask = (id) => {
      setTasks(tasks.filter((tasks) => tasks.id !== id))
    }

    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id
      ? {...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ?
       <Tasks tasks={tasks} onDelete={deleteTask}
       onToggle={toggleReminder}/>
      : 'No Tasks'}
    </div>
  );
}

export default App;
