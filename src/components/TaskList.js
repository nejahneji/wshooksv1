import React from "react";
import { Task } from "./Task";
export const TaskList = ({ handleDelete, handleComplete, tasks }) => {
  return (
    <div>
      {tasks.map((el) =><Task key={el.id} el={el} handleDelete={handleDelete} handleComplete={handleComplete}/>)}
    </div>
  );
};
