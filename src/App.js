import "./App.css";
import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";
function App() {
  const [taskList, setTaskList] = useState([
    { id: 0, task: "Learn HTML and CSS", isDone: true },
    { id: 1, task: "Learn JS", isDone: true },
    { id: 2, task: "Learn node js", isDone: false },
  ]);

  const handleDelete = (idTask) => {
    setTaskList(
      taskList.filter((el) => el.id !== idTask)
    );
  };
  const handleComplete = (idTask) => {
    setTaskList(
      taskList.map((el) => el.id === idTask ? { ...el, isDone: !el.isDone } : el)
    );
  };
const handleAdd = (newTask) => {
  if(newTask) { setTaskList([...taskList,{id:Math.random(),task:newTask,isDone:false}])}else { alert("write a task")}
}
  return (
    <div className="App">
      <TaskList
        tasks={taskList}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      
      />
<AddTask handleAdd={handleAdd}/>

    </div>
  );
  }

export default App;
