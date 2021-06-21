import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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


    const deleteTask = (id) => {
      setTasks(tasks.filter((tasks) => tasks.id !== id))
    }

    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id
      ? {...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
     <Header />
     {tasks.length > 0 ?
       <Tasks tasks={tasks} onDelete={deleteTask}
       onToggle={toggleReminder}/>
      : 'No Tasks'}
    </div>
  );
}

export default App;
