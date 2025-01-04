import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
import { useState } from 'react'

const App = () => {
  const [Tasks, setTasks] = useState([])
  const handleDelete =(taskIndex)=>{
    const newTasks = Tasks.filter((task, index)=>index !== taskIndex)
    setTasks(newTasks)
  }
  return(
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn title="Things to do" icon={todoIcon} tasks={Tasks} status="todo" handleDelete={handleDelete}/> 
        <TaskColumn title="On Going" icon={doingIcon} tasks={Tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn title="Done" icon={doneIcon} tasks={Tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App
