import React from "react"
import "./TaskForm.css"
import Tag from "./Tag"
import { useState } from "react"

const TaskForm = ({ setTasks }) => {

  // another way to set useState instead of different useState variables
  const [TaskData, setTaskData] = useState({
    task: "",
    status: "todo"
  })

  const handleChange = (e) => {
    const { name , value } = e.target
    setTaskData(prev => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(TaskData);
  }
  // const [Task, setTask] = useState("");
  // const [Status, setStatus] = useState("todo")
  

  // function onHandleChange(e){
  //   setTask(e.target.value)
  // }

  // const handleStatusChange = (e) =>{
  //   setStatus(e.target.value)
  // }

  
  return(
     <header className="app_header">
       <form onSubmit={handleSubmit}> 
         <input type="text" name="task" className="task_input" placeholder="Enter a task" onChange={handleChange}/>
         <div className="task_form_bottom_line">
           <div>
             <Tag tagName="HTML" />
             <Tag tagName="CSS" />
             <Tag tagName="JavaScript"/>
             <Tag tagName="React"/>           
          </div>

           <div>
           <select className="task_status"
           onChange={handleChange} 
           name="status">
             <option value="todo"> To do</option>
             <option value="doing"> Doing</option>
             <option value="done"> Done</option>
           </select>
           <button type="submit" className="task_submit">
             + Add Task
           </button>
          </div>
         </div>
       </form>
     </header>
  )
}

export default TaskForm