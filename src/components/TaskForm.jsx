import React from "react"
import "./TaskForm.css"
import Tag from "./Tag"
import { useState } from "react"

const TaskForm = ({ setTasks }) => {

  // another way to set useState instead of different useState variables
  const [TaskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: []
  })

  const checkTag = (tag) => {
    return TaskData.tags.some(item => item === tag)
  }

  const selectTag = (tag)=> {
    if(TaskData.tags.some(item => item === tag)){
      const filterTag =  TaskData.tags.filter(item => item !==tag)
      setTaskData(prev => {
        return { ...prev, tags: filterTag}
      })
    }else{
      setTaskData(prev => {
        return {...prev, tags :[...prev.tags, tag]}
      })
    }
  }

  const handleChange = (e) => {
    const { name , value } = e.target
    setTaskData(prev => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTasks(prev => {
      return [...prev, TaskData]
    })

    setTaskData({
      task: "",
      status: "todo",
      tags: []
    })
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
         <input 
         type="text" 
         name="task" 
         value={TaskData.task}
         className="task_input" 
         placeholder="Enter a task" 
         onChange={handleChange}

         />
         <div className="task_form_bottom_line">
           <div>
             <Tag tagName="HTML" selectTag = {selectTag} selected={checkTag("HTML")} />
             <Tag tagName="CSS" selectTag = {selectTag} selected={checkTag("CSS")}/>
             <Tag tagName="JavaScript" selectTag = {selectTag} selected={checkTag("JavaScript")}/>
             <Tag tagName="React" selectTag = {selectTag} selected={checkTag("React")}/>           
          </div>

           <div>
           <select 
           className="task_status"
           value={TaskData.status}
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