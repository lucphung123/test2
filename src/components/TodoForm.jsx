import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== "") {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:'row', alignItems:'center', justifyContent:'center', gap:'10px'}}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add Details"
        style={{padding:'10px', fontSize:'24px', borderRadius:'5px', border:'1px solid #ccc'}}
      />
      <button type="submit" style={{backgroundColor:'blue', color:'white', border:'none', padding:'10px', borderRadius:'8px', fontSize:'24px',width:'100px',cursor:'pointer'}}>Add</button>
    </form>
  );
};

export default TodoForm;