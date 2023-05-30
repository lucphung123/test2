import React from "react";

const TodoList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul style={{listStyleType:'none', padding:'0'}}>
      {tasks.map((task) => (
        <li key={task.id} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', gap:'10px'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(task.id)}
              style={{marginRight:'10px'}}
            />
            <span
              style={{ textDecoration: task.completed ? "line-through" : "none", fontSize:'24px',color:'white' }}
              >
              {task.title}
            </span>
                </div>
          <button onClick={() => deleteTask(task.id)} style={{backgroundColor:'red', color:'white', border:'none', padding:'10px', borderRadius:'5px', fontSize:'24px',cursor:'pointer'}}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;