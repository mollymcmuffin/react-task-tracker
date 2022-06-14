import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true
      },
      {
        id: 3,
        text: "Do homework",
        day: "Feb 6th at 4:30pm",
        reminder: false
      }])
  
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id)) 
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder} :task))
  };

  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks,newTask]);
  };

  return (
    <div className="container">
      <Header onAdd = {()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask} title = 'Task Tracker'/>
      {showAddTask && (<AddTask onAdd = {addTask}/>)}
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>): 'No tasks'}
    </div>
  );
}

export default App;
